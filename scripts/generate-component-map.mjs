import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const catalogPath = path.join(root, "catalog", "pages.json");
const outputPath = path.join(root, "catalog", "component-page-map.json");

export async function buildComponentMap() {
  const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const components = new Map();

  for (const page of catalog.pages) {
    for (const relation of ["core", "common", "conditional", "discouraged"]) {
      for (const component of page.component_recommendations[relation]) {
        const item = components.get(component) ?? {
          component,
          core: [],
          common: [],
          conditional: [],
          discouraged: [],
        };
        item[relation].push(page.id);
        components.set(component, item);
      }
    }
  }

  return {
    generated_from: "pages.json#component_recommendations",
    version: catalog.version,
    components: [...components.values()]
      .map((item) => {
        for (const relation of ["core", "common", "conditional", "discouraged"]) {
          item[relation].sort();
        }
        return item;
      })
      .sort((a, b) => a.component.localeCompare(b.component)),
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  const result = await buildComponentMap();
  await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`);
  console.log(`Generated reverse mappings for ${result.components.length} Bricks components.`);
}
