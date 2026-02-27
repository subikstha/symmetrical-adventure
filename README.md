# Next.js + Payload CMS Boilerplate

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Payload CMS](https://img.shields.io/badge/Payload_CMS-3.0-white?style=for-the-badge&logo=payload&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

A powerful, production-ready starter template combining the latest **Next.js 16** (App Router) with **Payload CMS 3.0**. Designed for scalability, performance, and developer experience.

## 🚀 Features

- **Next.js 16 (App Router)**: Leveraging the latest React Server Components and server actions.
- **Payload CMS 3.0**: The best headless CMS for TypeScript, fully integrated into the Next.js app.
- **Tailwind CSS v4**: The latest utility-first CSS framework for rapid UI development.
- **Type-Safe**: End-to-end type safety with automatically generated Payload types.
- **Dockerized Database**: PostgreSQL setup via Docker Compose for easy local development.
- **Enhanced Code Quality**:
  - **ESLint**: Configured with `perfectionist` for sorted imports and standard React/Next.js rules.
  - **Prettier**: Automatic code formatting.
  - **Absolute Imports**: Enforced rule to prevent relative parent imports (e.g., `../../`) and ensure cleaner module resolution.
- **Git Standards**:
  - **Husky**: Git hooks for pre-commit checks.
  - **Commitlint**: Enforcing conventional commit messages (e.g., `feat: add new block`).
  - **Lint-Staged**: Run linters specifically on staged files to keep the repo clean.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **CMS**: [Payload CMS 3.0](https://payloadcms.com/)
- **Database**: PostgreSQL (via Docker)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting & Formatting**: ESLint, Prettier
- **Git Hooks**: Husky, Commitlint

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or later)
- Docker Desktop (for the database)
- pnpm (recommended) or npm/yarn

### Using this Template

1. **Click the "Use this template" button** on GitHub to create a new repository from this template.
2. **Clone your new repository:**

   ```bash
   git clone <your-new-repo-url>
   cd <your-project-name>
   ```

### Manual Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd nextjs-payload-boilerplate
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Environment Setup:**
   Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

   > **Note:** The `docker-compose.yml` exposes Postgres on port **5437**.
   > Update your `.env` with the following connection string if you use the default docker setup:
   > `DATABASE_URL=postgres://postgres:password@localhost:5437/payload_nextjs_test`

4. **Start the Database:**

   ```bash
   docker-compose up -d
   ```

5. **Run the Development Server:**

   ```bash
   pnpm dev
   ```

   - Open [http://localhost:3000](http://localhost:3000) to see the site.
   - Access the CMS admin panel at [http://localhost:3000/admin](http://localhost:3000/admin).

## 📜 Scripts

| Script                    | Description                                               |
| :------------------------ | :-------------------------------------------------------- |
| `pnpm dev`                | Starts the Next.js dev server with Payload.               |
| `pnpm build`              | Builds the application for production.                    |
| `pnpm start`              | Starts the production server.                             |
| `pnpm lint`               | Runs ESLint to check for code quality issues.             |
| `pnpm generate:types`     | Generates TypeScript types from your Payload collections. |
| `pnpm generate:importmap` | Generates the Payload import map.                         |
| `pnpm prepare`            | Sets up Husky git hooks.                                  |

## 📂 Project Structure

```
├── app/                # Next.js App Router
│   ├── (payload)/      # Payload CMS admin routes
│   └── (frontend)/     # Frontend website routes
├── blocks/             # CMS Block Components & Configs
├── collections/        # Payload CMS Collection Definitions
├── components/         # Shared React Components
├── global/             # Global CMS Settings
├── hooks/              # Custom Hooks
├── lib/                # Utilities & Helpers
├── public/             # Static Assets
└── styles/             # Global CSS
```

## 🤝 Contributing

We follow **Conventional Commits** to ensure clean and semantic git history.

### Commit Message Format

```
<type>: <subject>
```

**Allowed Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries
- `revert`: Reverts a previous commit
- `ci`: Changes to our CI configuration files and scripts
- `build`: Changes that affect the build system or external dependencies

**Example:**

```bash
git commit -m "feat: add hero section block"
```

## 📄 License

This project is licensed under the MIT License.
