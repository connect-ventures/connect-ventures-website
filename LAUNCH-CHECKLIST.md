# Production and maintenance checklist

## Current production state

- [x] Public production URL is <https://connectventures.com/>.
- [x] GitHub Pages custom domain is `connectventures.com`.
- [x] DNS cutover from Webflow was completed on August 17, 2026.
- [x] The GitHub Pages TLS certificate is active.
- [ ] Enable **Enforce HTTPS** in GitHub Pages settings.
- [x] Merges to `main` deploy directly to production through GitHub Actions.
- [x] The default `github.io` URL is documented as the same Pages deployment, not a separate staging environment.
- [x] Pull requests are reviewed through diffs or screenshots because this repository has no per-PR preview URL.

The production state above is authoritative. Do not use the completed historical cutover steps below to claim that Webflow still serves the site or that DNS work remains pending.

## Completed DNS cutover

- [x] Set the GitHub Pages custom domain to `connectventures.com`.
- [x] Replace the old `www` CNAME (`cdn.webflow.com`) with `connect-ventures.github.io`.
- [x] Replace the old apex A record (`198.202.211.1`) with all four GitHub Pages A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [x] Leave nameservers, MX, TXT, and other non-web DNS records unchanged.
- [x] Wait for DNS propagation and GitHub's TLS certificate.
- [x] Verify the public site over HTTPS.

Current DNS snapshot (August 17, 2026):

- Nameservers: `pdns97.ultradns.org`, `.biz`, `.com`, `.net`
- Apex A records: all four GitHub Pages addresses listed above
- `www` CNAME: `connect-ventures.github.io`
- Canonical custom domain: `connectventures.com`
- TLS certificate: active

## Ownership and accounts

- [x] Create the Connect Ventures GitHub organization.
- [x] Create the `connect-ventures-website` repository.
- [x] Confirm Alexa and Josh are organization Owners; never request or share passwords.
- [x] Install the official Claude GitHub App for the organization with write access to `connect-ventures-website`.
- [x] Prove the Claude cloud workflow can create a branch, open a pull request, merge after approval, and trigger a successful GitHub Pages deployment.
- [x] Train Alexa on the no-Terminal Claude Code workflow.
- [x] Keep the repository public while using GitHub Pages on GitHub Free, or upgrade to GitHub Team before making it private.

## Ongoing content checks

- [ ] Confirm approved destinations and wording for Terms & Conditions and Privacy Policy.
- [ ] Resolve any remaining copy warnings only with explicit approval.
- [ ] Test portfolio links, social links, Beehiiv subscription, and the newsletter feed after material site changes.
- [ ] Perform a desktop and mobile visual check after each production deployment.

## Handoff

- [x] Add `ALEXA-GUIDE.md` with the tested no-Terminal request, review, approval, pull-request, merge, deployment, and rollback workflow.
- [x] Document that merging into `main` publishes immediately to `connectventures.com`.
- [x] Confirm Alexa can access GitHub without shared credentials.
- [ ] Document who owns billing and renewal notifications for the domain and any future paid GitHub plan.
