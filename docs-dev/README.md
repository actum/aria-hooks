# Docs for developers

This file serves to help you understand how aria-hooks are developed, what standarts & guidelines we follow and more.

## Getting started with local development

To get started with local development clone the repository, install dependencies and run the Storybook on local development server. You can achieve this by running following commands:

```console
git clone https://github.com/actum/aria-hooks.git
yarn
yarn storybook
```

If everything goes right, you Storybook will launch on http://localhost:6006.

## Hooks

Hooks can be found under `src/hooks` directory.

### File structure & naming

Each hook has its own folder. Folder is named same as component for which hook was designed, e.g modal, tooltip, etc.

Folder contains following files, with exceptions:

- `index.ts` - The main file of hook. Contains exporter of the hook.
- `controller.ts` - Contains code that controlls behaviour of the hook.
- `types.ts` - Contains all types and interfaces relevant to the hook.
- `data.ts` - Contains mock data for component with example implementation of hook.
- `{COMPONENT_NAME}.stories.mdx` - Contains documentation of the hook written in mdx and displayed in storybook.
- `{COMPONENT_NAME}.component.tsx` - Contains component with example implementation of hook. The component is used in storybook.
- `{COMPONENT_NAME}.styles.ts` - Contains styling for the component with example implementation of hook.
- `{COMPONENT_NAME}.test.tsx` - Contains code for testing the hook.

### Details

Convention for naming the hooks is following: `useAria${COMPONENT_NAME}`, e.g useAriaModal, useAriaTabs, etc.

When creating new hook, please follow the file structure and naming conventions to keep the code consistent

> Please note that every hook have to be exported also from `src/index.ts` file to be included in the final **NPM package**.

## Testing

For testing our hooks we use jest & react-testing-library. Tests files are located directly in particular hook folder.

<!-- TODO: Mention following lines in comment section of GH issue -->

> Please note that tests are not working properly at the time. There is a [bug report](https://github.com/actum/aria-hooks/issues/41) descibing this issue.

All hooks should be widlely tested to ensure we deliver quality product.

## Styling

Components are styled using styled-components library. Styles files are located on two places:

- Styles for particular hook components - directly in particular hook folder.

- Global styles(variables, themes, shared styles, etc.) - under `src/styles` directory.
