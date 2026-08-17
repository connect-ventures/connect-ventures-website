# Instructions for Claude Code

You are editing the Connect Ventures production marketing site. The primary user may be working entirely in Claude Code on the web, without a local terminal.

## Architecture

- The site is deliberately plain HTML, CSS, and JavaScript in `index.html`.
- There is no build step and no framework.
- Production images and logos are in `assets/`.
- Do not introduce a framework, package manager, database, server, or new third-party service unless the user explicitly asks for one and approves the added complexity.

## Required workflow

1. Confirm the requested outcome and inspect the relevant existing section.
2. Use a fresh Claude Code task for each unrelated request, so each change gets its own session branch. Work on the branch assigned to the current Claude cloud session; do not stop merely because its generated `claude/...` name differs from a name suggested by the user.
3. Make the smallest change that satisfies the request.
4. Preserve the existing typography, color palette, spacing language, and responsive behavior unless the request is specifically a redesign.
5. Run `node scripts/check-site.mjs`.
6. For text-only edits that do not change markup, styles, or layout, show the diff instead of generating screenshots. For layout, styling, image, or structural changes, generate and show desktop and mobile screenshots.
7. Explain exactly what changed and wait for explicit approval before making the edit live in any way.
8. After completing an approved edit, you may commit it, push the session branch, and open a pull request against `main` without requesting additional approval for those steps.
9. Never merge or publish without separate, explicit user approval of the merge itself.
10. After an approved merge, check the GitHub Pages deployment workflow once — do not repeatedly poll GitHub Actions. If it succeeded, report the merge, provide the live URL, and ask the user to verify the live page. If the cloud environment cannot load `github.io`, say so and ask the user to perform the final visual check; a successful workflow run is not a substitute for that check.

GitHub Pages does not provide a shareable preview URL for each pull request in this repository. Use a diff for text-only changes and screenshots for visual changes as the review artifact before merging.

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
