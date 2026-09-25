# Pagina

**Page intelligence for AI agents.**

Pagina helps coding agents plan, build, integrate, and verify individual pages inside real products. It identifies the page's job, audience, content, information hierarchy, states, component needs, and acceptance criteria while adapting to the target project's stack and design system.

## Scope

Pagina owns individual page types such as homepages, pricing pages, landing pages, article pages, dashboards, settings pages, and error pages.

- [Bricks](https://github.com/kostja94/bricks) owns reusable interface components, sections, and interaction patterns.
- Pagina decides how one page serves its task and composes relevant interface objects.
- A future website-level project may own site maps, global navigation, URL systems, cross-page journeys, and the relationships among many pages.

Pagina is not a fixed template library or a whole-site generator.

Pagina builds new pages only. Existing-page audits, optimization, patches, and reconstruction are outside its scope.

## Install

```bash
npx skills add kostja94/pagina --skill page-builder
```

## Use

```text
Use page-builder to create the pricing page for this product.
Preserve the existing design system, product truth, routes, and implementation conventions.
```

## Repository Structure

```text
skills/page-builder/
  SKILL.md
  references/
catalog/pages.json
catalog/taxonomy.json
catalog/component-page-map.json
schemas/page-reference.schema.json
scripts/validate.mjs
```

The catalog currently covers 47 public-web and web-app page identities. Related Index, Detail, interface, and program variants may share one family reference until their guidance becomes independently substantial.

`catalog/pages.json` owns page-to-Bricks recommendations. `catalog/component-page-map.json` is generated from that source and supports reverse component-to-page discovery without a second manually maintained mapping.

Pagina also includes a lightweight project-memory convention for durable facts learned during page construction. It updates one active project context and incrementally archives superseded facts; broader memory, retrieval, and knowledge management remain a separate product concern.

## Validate

```bash
npm test
```

## License

[MIT](LICENSE)
