# Instructions for Claude

This project is a creative sandbox for the user's wife to experiment with creating web pages. Use very simple, non-technical language when communicating.

## Project Structure

- **Technology**: Next.js 14 with App Router, React, and SCSS
- **Styling**: SCSS modules for component-specific styles, global SCSS for shared styles
- **Pages**: Each page lives in `src/app/[page-name]/page.tsx`
- **Deployment**: GitHub Pages with branch-based subpaths

## Creating New Pages

When the user asks for a new page or "site":

1. **Always create a new route** in `src/app/[descriptive-name]/page.tsx`
2. **Create matching SCSS** at `src/app/[descriptive-name]/page.module.scss`
3. **Use simple, descriptive path names** (lowercase, hyphens for spaces)
4. **Make it visually appealing** - use colors, nice fonts, spacing

### Page Template

```tsx
// src/app/example-page/page.tsx
import styles from './page.module.scss';

export default function ExamplePage() {
  return (
    <main className={styles.container}>
      <h1>Page Title</h1>
      {/* Page content here */}
    </main>
  );
}
```

### SCSS Template

```scss
// src/app/example-page/page.module.scss
.container {
  min-height: 100vh;
  padding: 2rem;
  // Add appealing styles
}
```

## Deployment System

- Each git branch deploys to its own subpath automatically
- Branch `claude/feature-abc-xyz123` deploys to `/feature-abc/` on the website
- The home page dynamically shows links to all deployed experiments
- A manifest.json file tracks all deployments

## Important Rules

1. **Never delete existing pages** - the user wants to keep all experiments
2. **Use simple language** when explaining things to the user
3. **Each request = new page** under a new route, even if user says "site"
4. **Commit and push** after creating pages so they appear on the website
5. **Keep it fun and colorful** - this is a creative sandbox!

## Branch Naming

Branches follow the pattern: `claude/[descriptive-name]-[sessionId]`

The deployment workflow extracts the descriptive part and uses it as the subpath.

## Communication Style

The user is not technical. When explaining:
- Avoid terms like "component", "route", "deploy", "build"
- Instead say "page", "web address", "put on the website", "make it work"
- Be encouraging and positive about their creative ideas
