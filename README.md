# Connect Ventures website

This is the production source for the Connect Ventures marketing site. It is intentionally a simple static site: one HTML file, optimized images, and no build framework.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Validate a change

```bash
node scripts/check-site.mjs
```

The check verifies local asset references, SEO metadata, external-link safety, and the absence of the unused Tailwind runtime.

## Safe publishing workflow

1. Create a short-lived branch for the requested change.
2. Make and preview the change locally.
3. Run `node scripts/check-site.mjs`.
4. Push the branch and open a pull request.
5. Review the change locally at desktop and mobile widths.
6. Merge the pull request only after the change is approved. Merging to `main` publishes production automatically through GitHub Pages.

Pull requests run validation without publishing. GitHub Pages does not provide a shareable pull-request preview by default, so changes should be reviewed locally before merging.

## Hosting decision

The site is hosted with GitHub Pages and deployed by GitHub Actions. The repository is public while the Connect Ventures organization is on GitHub Free; it can be made private after upgrading the organization to GitHub Team. The current UltraDNS nameservers can remain in place when the custom domain is connected.

## Project structure

- `index.html` — the complete site
- `assets/images/` — optimized production photos
- `assets/logos/` — production logos
- `CLAUDE.md` — instructions Claude Code should follow
- `LAUNCH-CHECKLIST.md` — account, content, and DNS tasks before cutover
- `.github/workflows/site.yml` — validation, preview, and production deploys
