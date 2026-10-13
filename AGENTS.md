# Project rules
- Keep Services process steps in `ProcessFlow.tsx` and render its selected photo and numbered responsive grid from the same list so descriptions stay synchronized.
- Keep all farm records and network totals in `src/data/farms.ts`; derive visible farms by filtering hidden records so overview lists, previews and slideshow counters stay synchronized.
- Represent unfinished farm descriptions and facts as empty strings and render only populated copy, so draft wording never appears publicly.
- Keep draft editorial sections unpublished until final copy is supplied, so unapproved claims are not presented as facts.