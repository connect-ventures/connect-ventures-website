# Launch checklist

## Client inputs

- [ ] Receive and apply Alexa's final edits.
- [ ] Confirm the final canonical domain: `www.connectventures.com` is assumed because the current apex redirects there.
- [ ] Obtain approved URLs/content for Terms & Conditions and Privacy Policy, or obtain approval to remove those links.
- [ ] Confirm whether the two obvious copy issues should be corrected:
  - Hero: “backing and amplify”
  - Nicole bio: “co-lead the Consumer team and investing”

## Ownership and accounts

- [x] Create the Connect Ventures GitHub organization.
- [x] Create the `connect-ventures-website` repository.
- [x] Confirm Alexa and Josh are organization Owners; never request or share passwords.
- [x] Install the official Claude GitHub App for the organization with write access to `connect-ventures-website`.
- [x] Prove the Claude cloud workflow can create a branch, open a pull request, merge after approval, and trigger a successful GitHub Pages deployment.
- [ ] Connect Alexa's own Claude and GitHub accounts to the repository during training; do not share Josh's authorization.
- [ ] Keep the repository public while using GitHub Pages on GitHub Free, or upgrade to GitHub Team before making it private.

## Preview and approval

- [ ] Push the initial branch and confirm the automated checks pass.
- [ ] Confirm the local preview works on desktop and mobile.
- [ ] Test portfolio links, social links, Beehiiv subscription, and the newsletter feed.
- [ ] Get written approval for the production version.

## DNS cutover

- [ ] Export/back up every existing DNS record before making changes, especially mail records.
- [ ] In GitHub Pages, set the custom domain to `www.connectventures.com` immediately before updating DNS.
- [ ] In UltraDNS, replace the existing `www` CNAME (`cdn.webflow.com`) with `connect-ventures.github.io`.
- [ ] In UltraDNS, replace the existing apex A record (`198.202.211.1`) with all four GitHub Pages A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] Leave nameservers, MX, TXT, and every other non-web DNS record unchanged.
- [ ] Wait for GitHub's DNS check and TLS certificate, then enable **Enforce HTTPS**.
- [ ] Verify apex-to-`www` redirect, HTTPS, and both hostnames after propagation.
- [ ] Keep the current Webflow site available until the new site is verified.

Current read-only DNS snapshot (August 9, 2026):

- Nameservers: `pdns97.ultradns.org`, `.biz`, `.com`, `.net`
- Apex A record: `198.202.211.1`
- `www` CNAME: `cdn.webflow.com`

## Handoff

- [x] Add `ALEXA-GUIDE.md` with the tested no-Terminal request, screenshot, approval, pull-request, merge, deployment, and rollback workflow.
- [ ] Train Alexa on prompting Claude, reviewing desktop/mobile screenshots, approving a pull request, merging, checking the live page, and rollback. Manual branch naming and Terminal usage are not required.
- [ ] Confirm Alexa can access GitHub and the domain/DNS account without shared credentials.
- [ ] Document who owns billing and renewal notifications for the domain and any future paid GitHub plan.
