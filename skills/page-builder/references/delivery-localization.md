# Delivery And Localization Context

Pagina builds the page within the delivery topology and release scope already chosen for the product. It does not decide whole-site architecture.

## Delivery Context

Identify the surface role (`marketing`, `app`, `dashboard`, `docs`, `status`, `community`, `developer`, or `api-service`), placement (`path`, `subdomain`, or `separate-origin`), and implementation (`first-party`, `first-party-separate-deployment`, or an explicitly selected third-party option).

`api-service` describes machine endpoints and is not a page. Pagina may build the human-facing API page, developer console surface, or documentation entry around it.

Default to first-party page construction. Third-party products are recommendations only when their operational systems materially outperform the available project capability; do not configure a third-party service unless the user explicitly chooses it.

A subdomain does not imply third-party ownership. Check canonical origin, base path, asset paths, authentication, cookies, analytics, consent, internal links, return paths, sitemap ownership, and visual chrome across deployments.

## Minimal Supporting Capability

Pagina may add a page-local route handler, adapter, schema, content file, query, cache, or submission endpoint when the page cannot perform its real task without it. Reuse existing infrastructure first. Do not expand a page task into a monitoring, search, notification, identity, moderation, or publishing platform.

Declare unavailable system dependencies and never use static sample data to imply a live capability.

## Locale And Market

Treat language, locale, and market as separate values. Locale controls language and formats; market may control price, plans, taxes, availability, legal text, and fulfillment.

Follow the project's existing route model, including default-unprefixed paths such as `/pricing` plus localized paths such as `/zh/pricing`, locale prefixes, locale subdomains, or locale domains.

Build every locale and market included in the current release scope. Phased publication is valid: do not create language-switcher links or `hreflang` entries for unavailable pages, and do not use another market's price, legal terms, or availability as fallback content.

Share page implementation and component behavior across locales while maintaining localized copy and market-owned commercial data. Verify translated metadata, social previews, structured data, dates, numbers, currencies, units, text expansion, line breaking, and corresponding-locale navigation.
