# deg-nextjs-starter

## Introduction

This is the starter kit for DEG's [Next.js](https://nextjs.org/) projects, which can be installed using [create-next-app](https://nextjs.org/docs/api-reference/create-next-app). It contains project configurations and tooling that follow the DEG UI team's recommended processes and best practices.

## Node Prerequisites

1. The minimum recommended Node version for this starter is 14.16.1.
2. We recommend using [NVM](https://github.com/nvm-sh/nvm) for Node version management. Once installed, you can run `nvm install 14.16.1` to install the recommended version, and `nvm use 14.16.1` to use it.
3. But wait, there's more! You can automate setting up Node every time you start your project. This starter contains a `.node-version` file, which (if you're using an automated version switcher such as [AVN](https://www.npmjs.com/package/avn)) will automatically change your Node version to the correct version whenever you `cd` into your project's directory. After installing NVM, just run `npm install -g avn avn-nvm avn-n` and `avn setup` to automate it.

## Installation

1. This starter uses create-next-app, which uses [npx](https://www.npmjs.com/package/npx) for installation. If you don't already have it installed, type: `npm install -g npx`.
2. New create-next-app projects are bootstrapped into a new directory. As such, navigate in your terminal to the parent directory of where you want your project to live.
3. Install the project: `npx create-next-app [PROJECT NAME] -e https://github.com/degdigital/deg-nextjs-starter`.
4. After installation completes, change into your new project's directory: `cd [PROJECT NAME]`.
5. That's it! Your Next.js project is ready.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Scaffolding New Components

This starter kit uses [Plop](https://plopjs.com/) to scaffold new React components after completing installation:

1. The best way to run Plop is to install it globally: `npm install -g plop`. However, if you'd prefer, Plop can also be run from the project's NPM scripts, by typing either `npm run plop` or `npm run scaffold`.
2. To scaffold a new component, type `plop`. You'll be guided through a series of prompts.
3. At the first prompt, give your component a name (i.e., "Accordion").
4. At the next prompt, choose whether you want a CSS Modules file created alongside your component (Next.js has built-in [CSS Modules support](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)).
5. At the final prompt, choose the Storybook story file created alongside your component. You can choose [Component Story Format (CSF)](https://storybook.js.org/docs/react/api/csf), [Markdown with JSX (MDX)](https://storybook.js.org/docs/react/api/mdx), or no story at all (_note_: DEG's best practice is to create a story whenever possible).
6. Your component and its corresponding files should be created in the `components` directory, and are ready for use.
7. Please note that Next.js supports import aliases, and components that are scaffolded via Plop are automatically configured to be imported in a single statement:

```
import { ComponentA, ComponentB } from '@components/index';
```

## Storybook

DEG uses [Storybook](http://storybook.js.org/) for developing, testing and demoing its UI components. To run Storybook:

1. From the project directory, type `npm run storybook`.
2. See `Scaffolding New Components` above for instructions on creating a component and accomponying Storybook story file.
3. Visit [http://localhost:6006/](http://localhost:6006/) to view your stories in Storybook.
