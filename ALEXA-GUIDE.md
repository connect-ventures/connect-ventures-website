# Alexa's Claude Code guide

This is the routine workflow for updating the Connect Ventures website in Claude Code on the web. You do not need to open Terminal, write code, name branches, or manage files manually.

## One-time connection

1. Sign in to Claude with your own account.
2. Connect and authorize your own GitHub account when Claude prompts you.
3. Confirm that your GitHub account can access the Connect Ventures organization and the `connect-ventures-website` repository.
4. In Claude Code, create or select a cloud environment connected to that repository.

The official Claude GitHub App is installed once for the organization. Do not install a similarly named GitHub Marketplace Action, and never send anyone your GitHub or Claude password.

## 1. Request and preview a change

Be specific about the text, image, link, or section you want changed. A useful starting prompt is:

> Change [describe the specific thing]. Keep the rest of the page unchanged. Validate the site and show me desktop and mobile screenshots. Do not commit, push, merge, or publish anything until I approve the preview.

Review both screenshots. If something is wrong, describe the correction in the same conversation and ask for updated screenshots.

## 2. Approve the pull request

When the preview looks right, send:

> I approve the preview. Commit the change, push it on this session's branch, and open a pull request against main. Do not merge it.

Claude may use an automatically generated branch name beginning with `claude/`. That is expected. Review the summary and the pull-request link Claude provides.

## 3. Publish the approved change

When you are ready for the change to go live, send:

> Merge the pull request, confirm the GitHub Pages deployment succeeds, and send me the live URL.

Open the URL yourself and perform the final visual check on desktop and mobile. Claude may be able to confirm the deployment succeeded without being able to load the public `github.io` page from its cloud environment.

Until the custom domain is connected, the staging site is:

<https://connect-ventures.github.io/connect-ventures-website/>

After DNS cutover, the public site will use the Connect Ventures domain instead of the repository path.

## If something goes wrong

- **Claude reports a `403` while pushing:** Do not restart the work. Ask the organization owner to confirm that the official Claude GitHub App has write access to this repository, then tell Claude to retry from the same session.
- **The preview is wrong:** Do not approve it. Describe the correction and request new screenshots.
- **The deployment fails:** Do not make unrelated changes. Ask Claude to read the failed GitHub Actions run and explain the specific failure.
- **The live page looks wrong after publishing:** Ask Claude to revert the merged pull request, deploy the rollback, and provide the live URL for another visual check.
- **Claude mentions existing warnings:** Terms/Privacy links and two known copy items remain on the launch checklist. They should not be changed as part of an unrelated request.

## Safety rules

- Never paste passwords, authentication codes, API keys, client-confidential information, or payment information into Claude or the repository.
- Do not approve unexpected changes outside the section you requested.
- Do not ask Claude to change DNS, legal language, investment claims, or account permissions without coordinating with the appropriate owner.
- When in doubt, stop before merging. An open pull request is safe to leave unmerged.
