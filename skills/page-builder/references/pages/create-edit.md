# Create And Edit Page

## Responsibility

A create and edit page lets users produce or change one domain object with clear validation, persistence, review, and completion behavior. It is not the object's read-only detail page and should not become a general settings surface.

## Page Contract

Define schema, defaults, required fields, validation timing, save model, draft behavior, permissions, conflicts, uploads, preview, cancellation, success destination, and destructive consequences.

## Sections

- **Core:** object fields, validation, persistence controls, completion path.
- **Common:** grouped fields, status, contextual guidance, unsaved-change handling.
- **Conditional:** preview, autosave, version conflict, media, collaboration, approvals, scheduling, advanced options.

## Product Adaptation

CMS and creator products may require a full editor workspace, metadata, preview, revisions, and publishing. CRM forms emphasize structured fields and relationship creation. Ecommerce editors emphasize variants, media, pricing, inventory, and fulfillment. Simple SaaS objects may need a compact form rather than a workspace.

## Components

Tabs, Sidebar, Modal, Top Banner, and CMS Editor Workspace are candidates. Use established form and editor libraries for complex validation, rich documents, history, collaboration, or accessibility.

## Verify

Test new and existing values where the shared form supports both, required and invalid fields, server errors, autosave interruption, stale revisions, uploads, permissions, cancellation, destructive actions, keyboard and composition input, mobile constraints, and the post-save destination.
