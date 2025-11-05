# Contributing Guidelines

This document outlines how our team works together on this project.

## Project Setup

**Clone the repository**
   ```bash
   git clone https://github.com/adoante/calorie-tracker.git
   cd calorie-tracker
   ```
   
**Create your .env file**

```bash
# Copy variables
cp .env.example .env.local
```

**Set environment variables**

Go to the [supabase project](https://supabase.com/dashboard/project/yuaoofgcxtpzhbtlameg) for the Project URL and ANON key

**Install dependencies**

```bash
npm install
```

**Run dev environment**

```bash
npm run dev
```

## Branching Strategy

We use a simple feature branch workflow:

Always deployable (stable)
- main

Active development branches
- feature/*, fix/*, docs/*, etc.

Example:

```bash
git checkout -b feature/add-login-page
```

## Commit Convention

Follow Conventional Commits:

| Type        | Use For                                        |
| ----------- | ---------------------------------------------- |
| `feat:`     | New feature                                    |
| `fix:`      | Bug fix                                        |
| `docs:`     | Documentation                                  |
| `style:`    | Formatting, missing semicolons, etc.           |
| `refactor:` | Code changes that aren’t new features or fixes |
| `test:`     | Adding or updating tests                       |
| `chore:`    | Maintenance tasks (deps, build, configs)       |

Example:

```bash
feat(auth): add JWT refresh endpoint
```

## Pull Request Workflow

Push your feature branch:

```bash
git push origin feature/awesome-feature
```

Open a PR into main.

Include:

- A clear title (feat:, fix:)
- Description of what changed
- Screenshots if UI-related
- At least one reviewer must approve before merging.
