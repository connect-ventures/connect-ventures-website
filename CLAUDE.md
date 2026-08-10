# Instructions for Claude Code

You are editing the Connect Ventures production marketing site. The primary user may be working entirely in Claude Code on the web, without a local terminal.

## Architecture

- The site is deliberately plain HTML, CSS, and JavaScript in `index.html`.
- There is no build step and no framework.
- Production images and logos are in `assets/`.
- Do not introduce a framework, package manager, database, server, or new third-party service unless the user explicitly asks for one and approves the added complexity.

## Required workflow

1. Confirm the requested outcome and inspect the relevant existing section.
2. Work on the branch assigned to the current Claude cloud session. Do not stop merely because its generated `claude/...` name differs from a name suggested by the user.
3. Make the smallest change that satisfies the request.
4. Preserve the existing typography, color palette, spacing language, and responsive behavior unless the request is specifically a redesign.
5. Run `node scripts/check-site.mjs`.
6. Generate and show screenshots at desktop and mobile widths whenever the change affects visible content or layout.
7. Explain exactly what changed and wait for explicit approval before committing, pushing, opening a pull request, merging, or publishing.
8. After approval, commit with a plain-language message, push the session branch, and open a pull request against `main`.
9. Do not merge the pull request until the user explicitly approves the merge.
10. After an approved merge, confirm the GitHub Pages workflow succeeds and provide the live URL. If the cloud environment cannot load `github.io`, say so and ask the user to perform the final visual check; a successful workflow run is not a substitute for that check.

GitHub Pages does not provide a shareable preview URL for each pull request in this repository. Before merging, use screenshots as the review artifact.

## Known validation warnings

Until the launch checklist is completed, validation may report known warnings involving the Terms/Privacy destinations, the hero phrase “backing and amplify,” and Nicole's biography. Treat these as pre-existing launch items rather than blockers to unrelated edits. Do not fix them unless the user explicitly asks.

## Guardrails

- Never place passwords, API keys, auth tokens, personal access tokens, or private client information in the repository.
- Do not edit GitHub Actions secrets or DNS records unless the user explicitly asks.
- Do not change legal, investment, or compliance language without explicit approval.
- Do not silently rewrite biographies, quotes, investment claims, company names, or portfolio descriptions.
- Do not remove accessibility attributes, focus states, reduced-motion support, SEO metadata, or external-link protections.
- Keep all `target="_blank"` links paired with `rel="noopener noreferrer"`.
- Use optimized assets from `assets/`; do not reintroduce the large handoff files.
- If a request is ambiguous, show the proposed copy or layout before changing it.

## Rollback

If an approved change causes a problem, revert the pull request or revert the production commit in GitHub. Do not patch production directly outside version control.

If a push fails with `403 Resource not accessible by integration`, preserve the current work and explain that the official Claude GitHub App needs write access to this repository. Retry from the same session after access is corrected; do not recreate the edit or request passwords.
