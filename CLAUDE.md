# Instructions for Claude Code

You are editing the Connect Ventures production marketing site.

## Architecture

- The site is deliberately plain HTML, CSS, and JavaScript in `index.html`.
- There is no build step and no framework.
- Production images and logos are in `assets/`.
- Do not introduce a framework, package manager, database, server, or new third-party service unless the user explicitly asks for one and approves the added complexity.

## How to make changes

1. Confirm the requested outcome and inspect the relevant existing section.
2. Create a focused branch such as `alexa/update-team-bio`.
3. Make the smallest change that satisfies the request.
4. Preserve the existing typography, color palette, spacing language, and responsive behavior unless the request is specifically a redesign.
5. Preview at desktop and mobile widths.
6. Run `node scripts/check-site.mjs` before committing.
7. Commit with a plain-language message, push the branch, and open a pull request.
8. Share the local preview or screenshots. Do not merge or publish until the user approves the change.

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
