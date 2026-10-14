# Project rules
- All visible text lives in `src/locales/en.json` and `src/locales/es.json` (react-i18next); components hold only layout, media and keys, so both languages stay in sync.
- Spanish routes mirror English ones under `/es`; build internal links with `useLocale().lp()` and let `LocaleLayout` (src/lib/locale.tsx) own `<html lang>`, per-page meta and hreflang, so every page stays bilingual.
- Process step text lives in the locale `process.steps` list and media in `ProcessFlow.tsx` by matching index, so the selected photo and numbered grid stay synchronized.
- Keep farm records (name, slug, photos, hidden) and network totals in `src/data/farms.ts`, with per-language farm copy under `farmData.<slug>`; derive visible farms via `useFarms()` so lists, previews and counters stay synchronized.
- Represent unfinished farm descriptions and facts as empty strings and render only populated copy, so draft wording never appears publicly.
- Keep draft editorial sections unpublished until final copy is supplied, so unapproved claims are not presented as facts.
- Keep About team media in an extensible ID-based list with matching locale member records, so adding people preserves bilingual copy.
- Use the shared farm-tag and farm-tag-row classes for all farm chips, so clickable and informational tags have identical geometry.
