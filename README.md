# Nuxt Boilerplate

A modern Nuxt.js boilerplate with TypeScript, Vue Query, Form Validation, and Internationalization support.

## Tech Stack

### Core Dependencies

- [Nuxt 3](https://nuxt.com/) - The Vue.js Framework
- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vue Router](https://router.vuejs.org/) - Official Router for Vue.js

### Additional Features

- [@tanstack/vue-query](https://tanstack.com/query/latest) - Data Fetching and State Management
- [@vee-validate/nuxt](https://vee-validate.logaretm.com/v4/) - Form Validation
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/) - Internationalization
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [SASS](https://sass-lang.com/) - CSS Preprocessor

## Project Structure

```
nuxt-boilerplate/
├── .github/              # GitHub workflows and configurations
├── .husky/              # Git hooks configuration
├── .nuxt/               # Nuxt build output (generated)
├── .output/             # Production build output
├── .vscode/             # VS Code settings
├── public/              # Static files
├── src/                 # Source code
│   ├── apis/           # API services and endpoints
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── components/     # Vue components
│   ├── layouts/        # Layout components
│   ├── middleware/     # Route middleware
│   ├── pages/          # Application pages
│   ├── plugins/        # Nuxt plugins
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   └── app.vue         # Root component
├── .env                 # Environment variables
├── .gitignore          # Git ignore rules
├── .prettierrc         # Prettier configuration
├── .prettierignore     # Prettier ignore rules
├── commitlint.config.js # Commit message linting rules
├── eslint.config.mjs   # ESLint configuration
├── i18n.d.ts           # i18n type definitions
├── nuxt.config.ts      # Nuxt configuration
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

### Key Directories Explained

- **src/apis/**: Contains API service definitions and endpoints
- **src/assets/**: Static assets like images, fonts, and global styles
- **src/components/**: Reusable Vue components
- **src/layouts/**: Page layout components
- **src/middleware/**: Route middleware for authentication and other purposes
- **src/pages/**: Application pages (auto-routed by Nuxt)
- **src/plugins/**: Nuxt plugins for extending functionality
- **src/types/**: TypeScript type definitions
- **src/utils/**: Utility functions and helpers

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Code Quality

### Linting

This project uses ESLint and Prettier for code quality:

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### Commit Guidelines

This project uses conventional commits with the following commit types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit
- `translation`: Translation related changes
- `security`: Security related changes
- `changeset`: Changeset related updates

Commit message format:

```
type(scope): subject

[optional body]

[optional footer]
```

Example:

```
feat(auth): add login functionality

- Add login form component
- Implement authentication service
- Add error handling

Closes #123
```

## Deployment

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information about deploying your application.
