# SvelteKit Typescript Skeleton

If creating a new app, try to update this repo first and verify things are working. This avoids the need to figure out what to delete and keep when copying an existing project.

## Getting Started

`.env.local` Update this with the new app name

## Sign-In

Simple cookie-based auth with no password protection. Just hit `/sign-in/<username>` and you'll be logged in

Server endpoints will check for that cookie to get the username, such as:

```typescript
const username = cookies.get('username')

if (!username) {
    return {
      error: 'You need to hit /sign-in/<username> first to set your username',
  }
}
```

## Intellij - Imports not showing up as errors if file not found

In these two files:
`node_modules/.pnpm/svelte@5.0.0-next.94/node_modules/svelte/types/index.d.ts`
`node_modules/.pnpm/svelte@5.0.0-next.94/node_modules/svelte/src/ambient.d.ts`

Comment out this module declaration:

```typescript
declare module '*.svelte' {
  export { SvelteComponent as default } from 'svelte'
}
```

I'm not sure what the right solution or cause of this issue is, but that works for my purposes right now.

## Svelte Ignore Template

Check Obsidian note `Svelte.md` for ignore comments
