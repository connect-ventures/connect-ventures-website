# Connect Ventures website

This is the production source for the Connect Ventures marketing site. It is intentionally a simple static site: one HTML file, optimized images, and no build framework.

## Editing with Claude Code on the web

The normal client workflow does not require Terminal or local development tools. Open this repository in a Claude Code cloud environment and use the review-and-approval workflow in [`ALEXA-GUIDE.md`](ALEXA-GUIDE.md).

The official Claude GitHub App is installed once at the Connect Ventures organization level. Each person still connects their own Claude and GitHub accounts and must have access to this repository. Never exchange account passwords.

Claude should show desktop and mobile screenshots before publishing, then use its session branch to open a pull request. Merging an approved pull request into `main` publishes automatically through GitHub Pages.

## Local developer preview

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

1. Work on a short-lived branch for the requested change. Claude web sessions may automatically assign a `claude/...` branch name.
2. Make and preview the change locally.
3. Run `node scripts/check-site.mjs`.
4. Push the branch and open a pull request.
5. Review desktop and mobile screenshots or a local preview.
6. Merge the pull request only after the change is approved. Merging to `main` publishes production automatically through GitHub Pages.

Pull requests run validation without publishing. GitHub Pages does not provide a shareable pull-request preview by default, so changes should be reviewed locally before merging.

## Hosting decision

The site is hosted with GitHub Pages and deployed by GitHub Actions. The repository is public while the Connect Ventures organization is on GitHub Free; it can be made private after upgrading the organization to GitHub Team. The current UltraDNS nameservers can remain in place when the custom domain is connected.

## Project structure

- `index.html` — the complete site
- `assets/images/` — optimized production photos
- `assets/logos/` — production logos
- `CLAUDE.md` — instructions Claude Code should follow
- `ALEXA-GUIDE.md` — no-Terminal editing and publishing guide
- `LAUNCH-CHECKLIST.md` — account, content, and DNS tasks before cutover
- `.github/workflows/site.yml` — validation, preview, and production deploys
