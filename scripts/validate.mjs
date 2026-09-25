import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { buildComponentMap } from "./generate-component-map.mjs";

const root = path.resolve(import.meta.dirname, "..");
const errors = [];
const catalogPath = path.join(root, "catalog", "pages.json");
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const taxonomy = JSON.parse(await readFile(path.join(root, "catalog", "taxonomy.json"), "utf8"));
const allowedSurfaces = new Set(taxonomy.surfaces);
const allowedArchetypes = new Set(taxonomy.product_archetypes);
const allowedRelations = new Set(taxonomy.relations);
const allowedFunctions = new Set(taxonomy.page_functions);
const ids = new Set();

for (const page of catalog.pages ?? []) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(page.id ?? "")) {
    errors.push(`Invalid page id: ${page.id}`);
  }
  if (ids.has(page.id)) errors.push(`Duplicate page id: ${page.id}`);
  ids.add(page.id);

  for (const surface of page.surfaces ?? []) {
    if (!allowedSurfaces.has(surface)) errors.push(`Unknown surface ${surface}: ${page.id}`);
  }
  const archetypes = new Set();
  for (const context of page.product_contexts ?? []) {
    if (!allowedArchetypes.has(context.archetype)) errors.push(`Unknown product archetype ${context.archetype}: ${page.id}`);
    if (!allowedRelations.has(context.relation)) errors.push(`Unknown product relation ${context.relation}: ${page.id}`);
    if (archetypes.has(context.archetype)) errors.push(`Duplicate product archetype ${context.archetype}: ${page.id}`);
    archetypes.add(context.archetype);
  }
  if (!allowedFunctions.has(page.primary_function)) errors.push(`Unknown primary function ${page.primary_function}: ${page.id}`);
  const secondaryFunctions = new Set();
  for (const role of page.secondary_functions ?? []) {
    if (!allowedFunctions.has(role)) errors.push(`Unknown secondary function ${role}: ${page.id}`);
    if (role === page.primary_function) errors.push(`Primary function repeated as secondary: ${page.id}`);
    if (secondaryFunctions.has(role)) errors.push(`Duplicate secondary function ${role}: ${page.id}`);
    secondaryFunctions.add(role);
  }
  const recommended = new Set();
  for (const relation of taxonomy.relations) {
    for (const component of page.component_recommendations?.[relation] ?? []) {
      if (recommended.has(component)) errors.push(`Component ${component} has multiple relations: ${page.id}`);
      recommended.add(component);
    }
  }

  const referencePath = path.resolve(path.dirname(catalogPath), page.reference);
  try {
    if (!(await stat(referencePath)).isFile()) errors.push(`Reference is not a file: ${page.reference}`);
  } catch {
    errors.push(`Missing reference: ${page.reference}`);
  }
}

try {
  const actual = JSON.parse(await readFile(path.join(root, "catalog", "component-page-map.json"), "utf8"));
  const expected = await buildComponentMap();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    errors.push("Stale component-page-map.json; run npm run catalog:generate");
  }
} catch {
  errors.push("Missing or invalid catalog/component-page-map.json");
}

const skillRoot = path.join(root, "skills");
for (const entry of await readdir(skillRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const skillPath = path.join(skillRoot, entry.name, "SKILL.md");
  let source;
  try {
    source = await readFile(skillPath, "utf8");
  } catch {
    errors.push(`Missing SKILL.md: skills/${entry.name}`);
    continue;
  }
  if (!source.replaceAll("\r\n", "\n").startsWith("---\n")) errors.push(`Missing YAML frontmatter: skills/${entry.name}/SKILL.md`);
  if (!/^name:\s*[a-z0-9-]+\s*$/m.test(source)) errors.push(`Missing valid name: skills/${entry.name}/SKILL.md`);
  if (!/^description:\s*\S.+$/m.test(source)) errors.push(`Missing description: skills/${entry.name}/SKILL.md`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${catalog.pages.length} page references and 1 skill.`);
