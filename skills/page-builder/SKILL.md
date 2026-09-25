---
name: page-builder
description: Build a new individual page inside an existing product or application. Use for page types such as home, landing, pricing, article, dashboard, settings, and error pages when the task includes page purpose, structure, content, components, implementation, and verification. Do not use for whole-site information architecture, site-wide navigation planning, or isolated component construction.
metadata:
  version: 0.1.0
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

Ask one concise question only when missing information would materially change the page's responsibility, data, or primary action.

## Load Only Relevant Guidance

Read [references/workflow.md](references/workflow.md) for construction and [references/quality-gates.md](references/quality-gates.md) before final verification.

When a matching page reference exists in [../../catalog/pages.json](../../catalog/pages.json), load only that reference. If the page type is absent, use the shared workflow and do not create a permanent catalog entry unless repository maintenance is part of the task.

## Build

1. Define the page contract: purpose, audience, primary task, required truth, inputs, outputs, and exclusions.
2. Establish information hierarchy and content before selecting visual composition.
3. Reuse the target project's components, tokens, layouts, icons, content models, and routing conventions.
4. Implement real states, responsive behavior, accessibility, metadata, and failure handling.
5. Verify the page in its actual route and product context.

## Boundaries

- Pagina owns one page at a time, including its content structure and component composition.
- Page references express durable decisions and acceptance criteria, not fixed visual templates.
- Reusable component behavior belongs in the target design system or a component reference such as Bricks.
- Site maps, global navigation, URL architecture, cross-page journeys, and complete website planning remain outside this skill.
- Do not invent product claims, customer evidence, prices, legal terms, or operational capabilities.
- Do not replace an established stack or design system without a concrete requirement.

## Completion

Report the page created, the existing conventions and components reused, the route and states verified, and any material dependency or product decision that remains.
