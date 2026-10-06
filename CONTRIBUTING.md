# Contributing

Thanks for adding a template.

## Rules
- **Plain Mermaid flowcharts only** (`flowchart LR` or `flowchart TD`). No custom syntax, so the diagram renders on GitHub and imports into Planloom.
- Keep it small: roughly 5 to 15 nodes. A diagram should answer one question.
- Use clear labels and name decisions as questions (`Approved?`). Label every edge that leaves a decision.
- Real, generic names. No company-specific secrets or internal URLs.

## Add a diagram
1. Create `category/short-name/diagram.mmd` (categories: `architecture`, `flows`, `planning`).
2. Add a `README.md` in the same folder: summary, the diagram in a ```mermaid block, *When to use it*, *Decisions this diagram makes*, *Adapt it*.
3. Generate the Open link with `node scripts/open-link.mjs category/short-name/diagram.mmd` and add it to the folder README and the table in the root README.
4. Open a pull request.

By contributing you agree your work is released under the MIT license.
