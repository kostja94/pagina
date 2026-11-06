---
name: page-content-adapter
description: Audit and adapt the copy of shared sections to each host page using verified facts and the existing component fields. Use for content-only edits to one page or a page family, including feature cards, related objects, proof and FAQs (镜像组件内容适配).
---

# Adapt shared sections to their host pages

Use when the answer to “what belongs in this section?” depends on the host page. Fixed legal text, global navigation and state-driven controls normally keep their shared content. Work in the project's existing content source. An audit request ends with decisions; edit only when requested.

## Establish the baseline

Inspect the rendered section in production, preview or a running local route, then trace it to its content source and contract. Record allowed fields, item count and order, optional media and CTA, and rendering limits. Keep implementation, props, schema, composition, styling and behavior fixed. If a field cannot express the required content or the section has the wrong purpose, flag the instance as blocked. Route duplicated implementations to Bricks component-auditor when relevant. If both tasks are requested, stabilize the component contract before adapting copy.

Use verified project facts, approved claims, terminology and exclusions. Ask one focused question if the page identity or a missing fact prevents a decision. Group instances by the question they answer: a section named “results” can serve the same purpose as one named “features,” while two three-card layouts can serve different tasks.

## Adapt one representative instance

1. Identify the host's audience, primary task, arrival intent, input, specific risk and desired outcome. State what the reader should understand here and what they can do next. Select the two closest sibling pages by task, intent and section role, or all available siblings if fewer exist.
2. Choose the relevant facts and projection. For a **contextual section**, connect an evidenced capability to the host's input, verification step or deliverable. For an **object summary**, choose a feature, use case, integration or story that directly supports the task. Preserve its identity, limits, original quotations and destination URL. Explain why this reader would open the detail page.
3. Assign the selected facts to existing slots before drafting headings, descriptions and CTA text. If the evidence cannot support the required number of relevant items, report the gap. Avoid padding cards or distributing keywords across them.
4. Record one decision per instance: **keep** if it already passes, **adjust** if only specific fields are generic, **rewrite** if the whole group is interchangeable, or **block** if facts or structure cannot support it.

For example, assume timestamped playback is verified on both an audio transcription page and a video transcription page. The audio card can explain how to replay a name or number before sharing notes. The video card can explain how to revisit the corresponding frame before quoting a speaker, provided synchronized video playback is verified. A shared promise of “accurate transcripts” would explain neither use.

## Verify, then expand

| Test | Passing evidence |
|---|---|
| Page identity | With the H1 hidden, the copy identifies the host's task through its input, action, risk or outcome. |
| Sibling swap | Moving the group to the closest sibling and changing only the keyword leaves a concrete mismatch. If there are no siblings, mark this check unavailable. |
| Fact fidelity | Each claim, quantity, limit, quote and destination traces to its source. The wording preserves qualifications. |
| Projection | The section supplies just what the reader needs here and gives a meaningful next step. Check for overlap with the hero, steps, FAQ and detail page. |

Check the first instance in its rendered route before expanding across a family. Reuse its quality standard; choose each subsequent instance's facts and phrasing independently and compare it with finished neighbors. For localization, verify the source-language role first. Preserve object identity, qualifications, field responsibilities and equivalent link destinations. Use natural local phrasing and repeat the identity and swap tests per locale. Confirm market-specific claims against project evidence.

After edits, run applicable schema, type, build and content-loading checks. Inspect wrapping, card balance, links and interactions on desktop, mobile and the longest locale. Verify live rendering after an authorized release; until then, identify the preview or local baseline actually tested.

Deliver one compact record per instance in chat or the project's existing task record: route and section, host task, locked fields, evidence, siblings, decision, changed fields with before/after where applicable, and test results or blockers. Shared evidence and build results can be reported once for the batch.
