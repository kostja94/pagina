# Detail Page

## Responsibility

A detail page presents one domain object, its current state, related information, and context-appropriate actions. It is distinct from the collection used to find the object and from the dedicated editor used to make substantial changes.

## Page Contract

Define object identity, authoritative fields, status, ownership, relationships, activity, permissions, available actions, edit path, deletion behavior, and return destination.

## Sections

- **Core:** identity, status, primary information, contextual actions.
- **Common:** related records, activity, metadata, ownership, navigation back to the collection.
- **Conditional:** tabs, side panel, audit history, comments, attachments, destructive actions.

## Product Adaptation

CRM details emphasize relationship history and next actions. Ecommerce details in an admin context emphasize variants, inventory, pricing, and fulfillment. Operations products emphasize live state, events, ownership, and intervention. CMS details may be read-only review surfaces leading to an editor.

## Components

Breadcrumb, Tabs or Accordion, Sidebar, Card, List, Modal, and Announcement Banner are candidates. Do not use a marketing Hero where a compact identity header is required.

## Verify

Test missing or deleted objects, stale data, permissions, long values, related-record failures, deep links to sections or tabs, actions and confirmations, unsaved transitions, keyboard operation, responsive hierarchy, and return navigation.
