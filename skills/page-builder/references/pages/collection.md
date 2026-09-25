# Collection Page

## Responsibility

A collection page lets users find, filter, sort, compare, select, and act on many objects of the same domain. It is not merely a visual list and should not absorb the responsibilities of an individual object's detail page.

## Page Contract

Define object identity, visible fields, default ordering, filters, search, pagination or virtualization, selection, bulk actions, saved views, permissions, and empty or error behavior.

## Sections

- **Core:** collection identity, discovery controls, object results.
- **Common:** filters, sort, count, create action, pagination, selection.
- **Conditional:** bulk actions, saved views, import/export, alternate list/grid views, summaries.

## Product Adaptation

CRM collections emphasize ownership, stage, recency, and bulk updates. CMS collections emphasize status, author, publication dates, and review. Ecommerce collections emphasize inventory, price, variants, and fulfillment. Marketplaces may prioritize media and comparison over dense operational columns.

## Components

List is the default capability; Grid, Card, Sidebar, disclosure, and announcements are context-dependent. Reuse a proven data-grid library when selection, virtualization, pinning, resizing, or complex keyboard interaction is required.

## Verify

Test large and empty datasets, loading and errors, query persistence, deep links, long values, permissions, bulk actions, destructive confirmation, keyboard use, responsive alternatives, pagination, and return-state restoration from detail pages.
