# Repository instructions

- Keep `page-builder` as the default entry point for constructing individual pages.
- Create a separate skill only when a page task develops a genuinely independent workflow, inputs, outputs, or tools.
- Maintain each page type in one reference under `skills/page-builder/references/pages/`.
- Treat page variants as choices within one page reference, not as separate skills.
- Build new pages only; existing-page audits, optimization, patches, and reconstruction are outside Pagina.
- Keep product archetypes and surfaces in `catalog/taxonomy.json`; do not invent near-duplicate labels in page references.
- Maintain page-to-component recommendations in `catalog/pages.json` and generate `catalog/component-page-map.json`; never edit the reverse map manually.
- Component IDs refer to Bricks when available, but target-project components take precedence and Pagina must remain usable independently.
- Maintain only the lightweight project memory contract documented in `references/project-memory.md`; do not expand Pagina into a general memory platform.
- Update durable user-confirmed facts during page work, archive superseded values, and never store secrets or inferred claims as project facts.
- Treat route topology, deployment ownership, locale, and market as construction context; do not infer one from another or turn page work into whole-site architecture.
- Prefer first-party page construction. Third-party platforms are recommendations unless the user explicitly selects one.
- Add only minimal page-local APIs or adapters and never simulate unavailable operational systems with sample data.
- Inspect the target product, route, neighboring pages, design system, content model, and implementation conventions before building.
- Reuse existing components and use Bricks only when component-specific guidance is needed.
- Do not expand a page request into whole-site information architecture or silently redesign neighboring routes.
- Update `catalog/pages.json` whenever a page reference is added, renamed, or removed.
- Run `npm test` before completing structural changes.
