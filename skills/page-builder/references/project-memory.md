# Lightweight Project Memory

Pagina maintains a small amount of durable project context so users do not need to repeat confirmed product facts for every new page. This is a compatibility layer, not a complete memory or knowledge-management system.

## Discover The Active Context

Use an existing project context when the repository identifies one. Common locations include `project-context.md`, `.cursor/project-context.md`, `.claude/project-context.md`, or a documented project file. Do not create a second active context merely because the existing file uses another name or structure.

When no active context exists, create `project-context.md` at the repository root from [../assets/project-context.template.md](../assets/project-context.template.md). Remove unused sections instead of filling them with placeholders.

## Write Durable Facts

After the user confirms information that will affect future pages, update the active context during the same task. Examples include product capabilities, audience, preferred terminology, supported interfaces, routes, locales, markets, regional pricing rules, program eligibility, migration scope, approved evidence, and prohibited claims.

Do not store temporary instructions, drafts, speculative conclusions, reasoning traces, secrets, credentials, unnecessary personal data, or large copies of facts whose source of truth is code or another maintained document. Record a concise summary and source path instead.

Use this evidence order:

1. explicit user confirmation;
2. production code or configuration;
3. project-owned documentation;
4. verified official external information.

Never promote an inference to durable memory. If reliable sources conflict and the user has not resolved the conflict, show the evidence and ask.

## Preserve History

Set frontmatter `updated` to the current date after a substantive memory change. Preserve the original `date`.

When an existing fact is replaced or withdrawn, append the previous value to `project-context-archive/YYYY-MM.md` before updating the active context. Record the date, field, previous value, replacement, source, and short reason. The archive is an incremental change record, not a complete snapshot; Git already preserves full file history.

Do not archive ordinary wording edits or information that was never accepted as a project fact.

## Keep One Source Of Truth

Do not duplicate live prices, plan matrices, route tables, feature catalogs, legal text, or status data when a maintained source already exists. Store the rule and source location, for example:

```yaml
pricing:
  model: regional
  source: config/pricing.ts
  constraint: Never use the US price as a fallback for another market.
```

## Page Completion

Use the refreshed context to write complete page copy, states, metadata, and localized content. Missing facts that block honest content require a concise user question. Do not remove the corresponding section, substitute generic claims, or mark the page complete with hidden placeholders.

Only archive and update facts learned or changed through the current task. Do not reorganize the project's entire context system while building one page.
