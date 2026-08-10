# Launch checklist

## Client inputs

- [ ] Receive and apply Alexa's final edits.
- [ ] Confirm the final canonical domain: `www.connectventures.com` is assumed because the current apex redirects there.
- [ ] Obtain approved URLs/content for Terms & Conditions and Privacy Policy, or obtain approval to remove those links.
- [ ] Confirm whether the two obvious copy issues should be corrected:
  - Hero: “backing and amplify”
  - Nicole bio: “co-lead the Consumer team and investing”

## Ownership and accounts

- [ ] Create the Connect Ventures GitHub organization.
- [ ] Create a private `connect-ventures-website` repository.
- [ ] Invite Alexa as an organization Owner; never request or share her password.
- [ ] Create or confirm a client-owned Netlify account/site.
- [ ] Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` as GitHub Actions repository secrets.
- [ ] Set the GitHub Actions repository variable `NETLIFY_DEPLOY_ENABLED` to `true` only after the Netlify secrets are configured.

## Preview and approval

- [ ] Push the initial branch and confirm the automated checks pass.
- [ ] Confirm the pull-request preview works on desktop and mobile.
- [ ] Test portfolio links, social links, Beehiiv subscription, and the newsletter feed.
- [ ] Get written approval for the production version.

## DNS cutover

- [ ] Export/back up every existing DNS record before making changes, especially mail records.
- [ ] Add both `connectventures.com` and `www.connectventures.com` to the Netlify site.
- [ ] Confirm SSL is provisioned before changing the primary URL.
- [ ] Update only the required web records in UltraDNS.
- [ ] Verify apex-to-`www` redirect, HTTPS, and both hostnames after propagation.
- [ ] Keep the current Webflow site available until the new site is verified.

Current read-only DNS snapshot (August 9, 2026):

- Nameservers: `pdns97.ultradns.org`, `.biz`, `.com`, `.net`
- Apex A record: `198.202.211.1`
- `www` CNAME: `cdn.webflow.com`

## Handoff

- [ ] Train Alexa on branching, prompting Claude, previewing, approving, merging, and rollback.
- [ ] Confirm Alexa can access GitHub, Netlify, and the domain/DNS account without shared credentials.
- [ ] Document who owns billing and renewal notifications for hosting and the domain.
