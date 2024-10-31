# WebShop Backoffice

This is a React application created using Vite, TypeScript, React Router, and React Query. The application demonstrates a basic structure with routing and data fetching capabilities.

## Introduction

WIP

## Technologies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)

## SetUp

1. Install the dependencies:

   ```sh
   npx install yarn
   yarn install
   ````
2. Run the project
   ```sh
   yarn dev
   ````

## Scripts

The following npm scripts are available in this project:

- **`yarn dev`**: Starts the Vite development server for local development.

- **`yarn lint`**: Runs ESLint on the codebase to check for linting issues, including unused disable directives. It will fail if there are any warnings.

- **`yarn build`**: Builds the project for production. This command compiles TypeScript and builds the Vite application.

- **`yarn preview`**: Serves the production build locally for preview purposes.

- **`yarn prepare`**: Sets up Husky for Git hooks.

### lint-staged Configuration

The `lint-staged` configuration ensures that linting is run on staged TypeScript files before commits:

- **`*{ts,tsx}`**: Runs `yarn lint` on all staged TypeScript files and then adds them to the commit.
