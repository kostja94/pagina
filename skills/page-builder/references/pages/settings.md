# Settings Page

## Responsibility

A settings page changes preferences, integrations, identity-adjacent configuration, and product behavior whose effects persist beyond the current task. It is not an object editor, dashboard, or dumping ground for unrelated administration.

## Page Contract

Define setting ownership, scope, defaults, dependencies, permissions, save behavior, propagation delay, reversibility, audit requirements, and destructive or security-sensitive actions.

## Sections

- **Core:** navigable setting groups, current values, clear save or immediate-apply behavior.
- **Common:** account or workspace scope, integrations, notifications, appearance, data controls.
- **Conditional:** API keys, members and roles, security, domains, import/export, danger zone.

## Product Adaptation

Developer tools emphasize credentials, environments, webhooks, and integrations. Collaboration products emphasize members, roles, notifications, and workspace policy. Analytics products emphasize data sources, attribution, retention, and reporting defaults. Simple products should not expose empty categories merely to resemble enterprise software.

## Components

Navigation, Sidebar, Tabs or Accordion, Modal, and Announcement Banner are common candidates. Marketing Hero, Testimonials, and Carousel conflict with repeated configuration work.

## Verify

Test permissions, inherited and overridden values, immediate and deferred saves, server errors, secrets, reauthentication, destructive confirmation, keyboard navigation, deep links, long labels, responsive grouping, audit events, and whether changes take effect where promised.
