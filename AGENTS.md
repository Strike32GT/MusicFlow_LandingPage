## Project memory and context

Before making any change, read these files completely:

1. `MEMORY.md` — persistent rules, verified project facts, release workflow, and details that must not be forgotten.
2. `CONTEXT.md` — product purpose, audience, information architecture, design direction, and current functional scope.

Treat both files as living project documentation. Update them in the same task whenever a change makes any stored instruction, URL, feature, limitation, workflow, or product fact outdated.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Required completion workflow

For every implementation task:

1. Inspect the current worktree and preserve unrelated user changes.
2. Implement the requested change following Astro best practices.
3. Run the relevant checks and a production build.
4. Regenerate `dist/` so the local production artifact matches the source, even though `dist/` is currently ignored by Git.
5. Do not create a commit while any known build, validation, or relevant runtime error remains unresolved.
6. After all checks pass, create a scoped Git commit for the completed task. Do not push; the user will run `git push` from the terminal.

Never hide, ignore, or work around a failing validation merely to produce a commit. Resolve all errors that are reasonably within the task scope first, and report any external blocker instead of committing an incomplete result.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
