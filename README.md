# Connect Ventures website

This is the production source for the Connect Ventures marketing site. It is intentionally a simple static site: one HTML file, optimized images, and no build framework.

Production: <https://connectventures.com/>

## Editing with Claude Code on the web

The normal client workflow does not require Terminal or local development tools. Open this repository in a Claude Code cloud environment and use the review-and-approval workflow in [`ALEXA-GUIDE.md`](ALEXA-GUIDE.md).

The official Claude GitHub App is installed once at the Connect Ventures organization level. Each person still connects their own Claude and GitHub accounts and must have access to this repository. Never exchange account passwords.

Claude should show a diff for text-only edits and desktop/mobile screenshots for visual changes, then use its session branch to open a pull request.

## Publishing behavior

Merging an approved pull request into `main` publishes directly to <https://connectventures.com/> through GitHub Actions and GitHub Pages.

The default `https://connect-ventures.github.io/connect-ventures-website/` address is the underlying Pages URL for the same deployment, not a separate staging site. Pull requests do not receive public preview URLs in this repository, so review changes through diffs or screenshots before merging.

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
2. Make the smallest requested change.
3. Run `node scripts/check-site.mjs`.
4. Review a diff for text-only changes or desktop/mobile screenshots for visual changes.
5. Push the branch and open a pull request.
6. Merge only after explicit approval.
7. Confirm the GitHub Pages workflow succeeds once, then verify <https://connectventures.com/> directly.

## Hosting

The site is hosted with GitHub Pages and deployed by GitHub Actions. The custom domain `connectventures.com` is active, DNS cutover from Webflow is complete, and the TLS certificate is active. The repository remains public while the Connect Ventures organization uses GitHub Free; it can be made private after upgrading the organization to GitHub Team.

## Project structure

- `index.html` — the complete site
- `assets/images/` — optimized production photos
- `assets/logos/` — production logos
- `CLAUDE.md` — authoritative instructions Claude Code should follow
- `ALEXA-GUIDE.md` — no-Terminal editing and publishing guide
- `LAUNCH-CHECKLIST.md` — current production status and remaining maintenance tasks
- `.github/workflows/site.yml` — validation and production deployment
