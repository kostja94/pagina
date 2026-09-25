# Pagina

**Page intelligence for AI agents.**

Pagina helps coding agents plan, build, integrate, and verify individual pages inside real products. It identifies the page's job, audience, content, information hierarchy, states, component needs, and acceptance criteria while adapting to the target project's stack and design system.

## Scope

Pagina owns individual page types such as homepages, pricing pages, landing pages, article pages, dashboards, settings pages, and error pages.

- [Bricks](https://github.com/kostja94/bricks) owns reusable interface components, sections, and interaction patterns.
- Pagina decides how one page serves its task and composes relevant interface objects.
- A future website-level project may own site maps, global navigation, URL systems, cross-page journeys, and the relationships among many pages.

Pagina is not a fixed template library or a whole-site generator.

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
schemas/page-reference.schema.json
scripts/validate.mjs
```

Page references will be added only after their ownership and overlap with existing page guidance have been reviewed.

## Validate

```bash
npm test
```

## License

[MIT](LICENSE)
