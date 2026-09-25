# Repository instructions

- Keep `page-builder` as the default entry point for constructing individual pages.
- Create a separate skill only when a page task develops a genuinely independent workflow, inputs, outputs, or tools.
- Maintain each page type in one reference under `skills/page-builder/references/pages/`.
- Treat page variants as choices within one page reference, not as separate skills.
- Inspect the target product, route, neighboring pages, design system, content model, and implementation conventions before building.
- Reuse existing components and use Bricks only when component-specific guidance is needed.
- Do not expand a page request into whole-site information architecture or silently redesign neighboring routes.
- Update `catalog/pages.json` whenever a page reference is added, renamed, or removed.
- Run `npm test` before completing structural changes.
