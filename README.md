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
5. Review the Netlify preview URL added to the pull request.
6. Merge the pull request only after the preview is approved. Merging to `main` publishes production automatically.

The GitHub Actions workflow requires two repository secrets, `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`, plus a repository variable named `NETLIFY_DEPLOY_ENABLED` set to `true`. Until that variable is enabled, validation runs but deployment stays safely off.

## Hosting decision

The recommended initial host is Netlify, deployed through GitHub Actions rather than Netlify's direct repository integration. This keeps the GitHub organization repository private without requiring Netlify Pro, preserves the current UltraDNS nameservers, and supports previews plus one-click rollback. Hosting can be changed later without changing the editing workflow.

## Project structure

- `index.html` — the complete site
- `assets/images/` — optimized production photos
- `assets/logos/` — production logos
- `CLAUDE.md` — instructions Claude Code should follow
- `LAUNCH-CHECKLIST.md` — account, content, and DNS tasks before cutover
- `.github/workflows/site.yml` — validation, preview, and production deploys
- `_headers` — baseline security headers applied by Netlify
