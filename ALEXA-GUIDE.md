# Alexa's Claude Code guide

This is the routine workflow for updating the Connect Ventures website in Claude Code on the web. You do not need to open Terminal, write code, name branches, or manage files manually.

## One-time connection

1. Sign in to Claude with your own account.
2. Connect and authorize your own GitHub account when Claude prompts you.
3. Confirm that your GitHub account can access the Connect Ventures organization and the `connect-ventures-website` repository.
4. In Claude Code, create or select a cloud environment connected to that repository.

The official Claude GitHub App is installed once for the organization. Do not install a similarly named GitHub Marketplace Action, and never send anyone your GitHub or Claude password.

## Production behavior

The public production site is <https://connectventures.com/>.

Merging a pull request into `main` triggers GitHub Actions and deploys directly to that production domain. The default `https://connect-ventures.github.io/connect-ventures-website/` address is the underlying GitHub Pages URL for the same deployment; it is not a separate staging site.

This repository does not provide a public preview URL for each pull request. Before merging, review a diff for text-only edits and desktop/mobile screenshots for visual or structural changes.

## 1. Request and preview a change

For a text-only change, use:

> Change [describe the specific text]. Keep everything else unchanged. Validate the site and show me the diff. Do not commit, push, merge, or publish anything until I approve it.

For a visual, layout, image, or structural change, use:

> Change [describe the specific thing]. Keep the rest of the page unchanged. Validate the site and show me desktop and mobile screenshots. Do not commit, push, merge, or publish anything until I approve the preview.

If something is wrong, describe the correction in the same conversation and ask for an updated diff or screenshots.

## 2. Approve the pull request

When the review looks right, send:

> I approve the change. Commit it, push it on this session's branch, and open a pull request against main. Do not merge it.

Claude may use an automatically generated branch name beginning with `claude/`. That is expected. Review the summary and pull-request link Claude provides.

## 3. Publish the approved change

When you are ready for the change to go live, send:

> Merge the pull request, check the GitHub Pages deployment once, and send me the production URL: https://connectventures.com/. Do not keep polling after the workflow succeeds.

Merging is the production publish step. Open <https://connectventures.com/> yourself afterward and perform the final visual check on desktop and mobile.

## If something goes wrong

- **Claude reports a `403` while pushing:** Do not restart the work. Ask the organization owner to confirm that the official Claude GitHub App has write access to this repository, then tell Claude to retry from the same session.
- **The preview is wrong:** Do not approve it. Describe the correction and request a new diff or screenshots.
- **The deployment fails:** Do not make unrelated changes. Ask Claude to read the failed GitHub Actions run and explain the specific failure.
- **The live page looks wrong after publishing:** Ask Claude to revert the merged pull request, deploy the rollback, and provide the production URL for another visual check.
- **Claude says the DNS cutover is still pending or that a merge only affects staging:** That information is obsolete. Ask it to reread `CLAUDE.md` and this guide before continuing.

## Safety rules

- Never paste passwords, authentication codes, API keys, client-confidential information, or payment information into Claude or the repository.
- Do not approve unexpected changes outside the section you requested.
- Do not ask Claude to change DNS, legal language, investment claims, or account permissions without coordinating with the appropriate owner.
- When in doubt, stop before merging. An open pull request is safe to leave unmerged.
