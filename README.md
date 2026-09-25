# Pagina: Page Layer for AI Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/kostja94/pagina)](https://github.com/kostja94/pagina/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/kostja94/pagina)](https://github.com/kostja94/pagina/commits/main)

Pagina gives coding agents page-specific contracts for turning product facts into complete, integrated, and verified pages inside an existing product.

It helps an agent determine what a page must accomplish, what information and states it needs, which components belong there, how it fits the target repository, and what must be tested before the page is complete.

## Quick Start

```bash
npx skills add kostja94/pagina --skill page-builder
```

Then ask your agent for a real page task:

```text
Use page-builder to create the pricing page for this product.

Read the existing repository, product context, routes, design system, and reusable components first. Use only verified product facts, implement the real responsive and failure states, and validate the finished route.
```

## Why Pagina

A coding agent can generate a page without understanding the page.

The result may look plausible while missing the actual user task, required product facts, route behavior, empty and error states, localization constraints, metadata, or the next step in the journey. Generic page templates make this worse by treating a SaaS pricing page, an ecommerce checkout, and a learning dashboard as variations of the same layout.

Pagina supplies the missing page-level judgment. Its references describe durable responsibilities and acceptance criteria, not a fixed visual design.

## What It Covers

Pagina supports both public websites and signed-in web applications. Representative page families include:

| Area | Examples |
|------|----------|
| Product and conversion | Homepage, pricing, landing, product, feature, solution, comparison |
| Content and learning | Blog, article, documentation, glossary, course, lesson, assessment |
| Product interfaces | Dashboard, collection, detail, editor, settings, authentication |
| Commerce | Catalog, product detail, cart, checkout, order tracking, wishlist |
| Ecosystems | Integration, plugin, connector, API, CLI, MCP, migration |
| Trust and communication | About, case study, press, changelog, roadmap, status, legal policy |
| Participation | Community, program, event, waitlist, directory, marketplace, showcase |

The machine-readable source of truth is [`catalog/pages.json`](catalog/pages.json). Related Hub, Index, Detail, transaction, and interface variants may share one maintained family reference when their core judgment is the same.

## How It Works

```text
Target repository and project context
                |
                v
      Page identity and user task
                |
                v
  Content, states, routes, and hierarchy
                |
                v
 Existing components or Bricks references
                |
                v
 Implementation in the project's own stack
                |
                v
 Route, responsive, accessibility, and state verification
```

The `page-builder` workflow:

1. Inspects the target route, neighboring pages, product facts, data contracts, design system, and tests.
2. Selects the matching page identity and loads only its relevant reference.
3. Defines the page contract: audience, task, required truth, inputs, outputs, states, and exclusions.
4. Establishes content and information hierarchy before choosing visual composition.
5. Reuses the project's components first and consults Bricks only when a required component must be created.
6. Implements and verifies the page in its real product context.

When a missing fact would change the page, the agent asks instead of deleting the affected content or filling it with generic copy.

## Page Contracts, Not Templates

A Pagina reference can specify:

- what makes the page a distinct page type;
- the user decision or task it must support;
- core, common, conditional, and discouraged elements;
- data, content, route, permission, and lifecycle states;
- product-archetype adaptations;
- relevant Bricks component IDs;
- page-specific verification and failure risks.

It does not prescribe one hero, one section order, one framework, or one visual style. A pricing page for a developer API and a pricing page for professional services share an identity while requiring different evidence, controls, and conversion paths.

## Product Context

Pagina consumes project truth; it does not maintain a separate project-memory system. [Contextus](https://github.com/kostja94/contextus) is the source of truth for durable product, audience, marketing, brand, website, technical, decision, and change context.

When root `contextus.md` exists, `page-builder` reads only the modules relevant to the page and returns newly confirmed information as Contextus updates or candidates. Without Contextus, Pagina remains fully usable: it reads available project documents or user-provided facts, asks for task-blocking information, and reports durable discoveries at completion. It does not create another context template or archive.

## The Agent Interface Stack

Pagina is one layer in a larger workflow:

| Layer | Responsibility |
|-------|----------------|
| [Contextus](https://github.com/kostja94/contextus) | Durable product and project truth consumed by every downstream task |
| [Marketing Skills](https://github.com/kostja94/marketing-skills) | Marketing, SEO, content, channel, and strategy inputs |
| **Pagina** | The responsibility, composition, content, states, and verification of one page |
| [Bricks](https://github.com/kostja94/bricks) | Reusable interface components and bounded interaction patterns |
| Target repository | Product truth, code, routes, data, design system, and deployment |

Pagina owns one page at a time. It does not own whole-site information architecture, global navigation strategy, or complete website planning.

## Boundaries

Pagina is not:

- a visual template gallery;
- a page-builder SaaS product;
- a replacement for the target project's design system;
- a source of invented pricing, customer proof, legal terms, or product capabilities;
- a whole-site architecture tool;
- an isolated component builder.

The current `page-builder` skill is designed for constructing new pages. Its contracts remain useful page-level references, but the repository does not maintain a separate audit or reconstruction workflow.

## Repository

```text
skills/page-builder/
  SKILL.md                         page construction entry point
  references/
    workflow.md                    shared construction workflow
    quality-gates.md               page-level acceptance criteria
    delivery-localization.md       routes, deployments, locales, and markets
    contextus.md                   upstream context integration and fallback
    pages/                         maintained page-family references
catalog/
  pages.json                       page identities and Bricks recommendations
  component-page-map.json          generated reverse component mapping
  taxonomy.json                    surfaces and product archetypes
schemas/page-reference.schema.json
scripts/
```

`catalog/pages.json` owns page-to-component recommendations. The reverse component map is generated from that source so the relationship is not maintained twice.

## Development

```bash
npm test
```

The validation script checks catalog structure, reference paths, schema expectations, component mappings, and the `page-builder` skill.

When changing page-to-component recommendations, regenerate the reverse map:

```bash
npm run catalog:generate
```

## License

[MIT](LICENSE)
