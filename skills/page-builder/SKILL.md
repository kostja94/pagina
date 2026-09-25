---
name: page-builder
description: Build a new individual page inside an existing product or application. Use for page types such as home, product, feature, landing, pricing, tool, documentation, campaign, article, dashboard, settings, and error pages when the task includes page purpose, structure, content, components, implementation, and verification. Do not use for whole-site information architecture, site-wide navigation planning, or isolated component construction.
metadata:
  version: 0.2.0
---

# Page Builder

Build a page that belongs in the target product instead of producing a generic template.

## Start With The Product

Inspect the target route, neighboring pages, product and audience, source content, design system, reusable components, data contracts, framework, rendering model, responsive conventions, metadata, and tests.

Determine:

- the page type and the user task it must complete;
- how users arrive, what they need to understand or do, and where they continue;
- which claims, data, assets, and states are real;
- which existing components and project conventions should be reused;
- the boundary between this page and site-wide decisions.

Ask one concise question when missing information would materially change the page's responsibility, content, data, or primary action. Do not delete the affected section or replace the missing fact with generic copy.

## Load Only Relevant Guidance

Read [references/workflow.md](references/workflow.md) for construction and [references/quality-gates.md](references/quality-gates.md) before final verification. Read [references/delivery-localization.md](references/delivery-localization.md) when routes, deployments, locales, markets, or supporting data capabilities affect the page. Read [references/project-memory.md](references/project-memory.md) when durable product facts are discovered, confirmed, replaced, or withdrawn during the task.

When a matching page reference exists in [../../catalog/pages.json](../../catalog/pages.json), load only that reference. If the page type is absent, use the shared workflow and do not create a permanent catalog entry unless repository maintenance is part of the task.

Use the page's product contexts to adapt priorities without inventing a new page identity. Component recommendations reference stable IDs in [Bricks](https://github.com/kostja94/bricks). Reuse components already present in the target project first; use Bricks guidance only when a required component must be created. Pagina remains usable when Bricks is not installed.

## Build

1. Define the page contract: purpose, audience, primary task, required truth, inputs, outputs, and exclusions.
2. Establish information hierarchy and content before selecting visual composition.
3. Reuse the target project's components, tokens, layouts, icons, content models, and routing conventions.
4. Implement real states, responsive behavior, accessibility, metadata, and failure handling.
5. Update the project's lightweight context with durable user-confirmed facts and archive any superseded values.
6. Verify the page in its actual route and product context.

## Boundaries

- Pagina owns one page at a time, including its content structure and component composition.
- Build only new pages. Do not use this skill to audit, optimize, patch, or reconstruct an existing page.
- Page references express durable decisions and acceptance criteria, not fixed visual templates.
- Reusable component behavior belongs in the target design system or a component reference such as Bricks.
- Site maps, global navigation, URL architecture, cross-page journeys, and complete website planning remain outside this skill.
- Do not invent product claims, customer evidence, prices, legal terms, or operational capabilities.
- Do not replace an established stack or design system without a concrete requirement.

## Completion

Report the page created, the existing conventions and components reused, the route and states verified, durable context updated, and any material dependency or product decision that remains.
