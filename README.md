# rishabchhetri.in

Personal site for Rishab Chhetri. Next.js (App Router), Tailwind, MDX content,
statically generated, deployed on Vercel.

## Develop

```bash
pnpm install
pnpm dev
```

## Content

- **Deployments**: `content/deployments/*.mdx`. Frontmatter drives the card and
  header (`title`, `client`, `period`, `status`, `constraint`, `outcome`,
  `stack`, `links`, `featured`, `order`); the MDX body carries the deep sections
  (constraint / what I built / what broke / outcome / what I'd redesign).
- **Writing**: `content/writing/*.mdx`. Frontmatter: `title`, `date`,
  `updated` (optional), `stream` (`engineering` | `field-notes` | `research`),
  `summary`, `draft`. Set `draft: true` to keep a post out of the production
  build, sitemap, and RSS.

Add a post = add an `.mdx` file and commit. No rebuild of the site itself.

## Generated

`/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/llms.txt`, and per-post OG images
are all generated from the content at build time.

## Outstanding

Search the repo for `TODO(rishab)`; those mark copy that needs real
architecture detail, numbers, or a decision (analytics provider, whether to
re-host the Zobique blog posts, NCS framing sign-off).
