# Angular Main Demo App

## Architecture Overview

This repository is structured as a modular Angular application with clear separation between core framework concerns, feature domains, shared utilities, and a reusable UI library.

- Layout and responsive structure backbone: Bootstrap 5
- Enterprise UI component engine: PrimeNG 21
- UI abstraction layer: `src/app/@ui-kit` reusable Angular UI library (built on top of PrimeNG)
- Backend integration target: PHP services
- Local API development option: `proxy-mock-server`

The key architectural goal is to keep feature modules independent from direct PrimeNG coupling by consuming `@ui-kit` components wherever possible.

## Directory Architecture

```text
src/
	app/
		@core/               # Singleton services, guards, interceptors, app-wide providers
		@features/           # Business/domain feature modules (dashboard, leave, project, user, ...)
		@shared/             # Shared components, directives, pipes, utility services
		@state/              # Application state entry points and state wiring
		@ui-kit/             # Reusable UI component library wrapping PrimeNG
		@utils/              # Common models, enums, constants, helper utilities
		error-page*/         # Error handling pages (unauthorized, not-found, generic)
	assets/                # Static assets, i18n files, app configuration files
	environments/          # Environment configurations
	styles/                # Global/demo/layout styles

proxy-mock-server/       # Local mock/proxy server for API development and testing
tests/                   # End-to-end tests
tests-examples/          # Example Playwright test scenarios
```

## UI Strategy: Bootstrap + PrimeNG + UI-Kit

### Bootstrap 5 as Foundation

Bootstrap 5 provides the base grid, spacing, responsive behavior, and utility-first structure for consistent layout composition.

### PrimeNG 21 for Rich Components

PrimeNG 21 is used for advanced enterprise UI patterns and widgets.

### `@ui-kit` as Reusable UI Library

The `src/app/@ui-kit` layer wraps PrimeNG usage behind project-owned Angular components (button, input, select, table, modal, pagination, etc.).

This approach enables:

- Consistent design language across all feature modules
- Reduced UI duplication and easier maintenance
- A design-system-independent architecture where PrimeNG can be replaced or evolved with lower impact on feature code

Feature modules should consume `@ui-kit` components first, instead of using PrimeNG components directly.

## Backend Integration (PHP)

The frontend is designed to integrate with PHP backend services through typed service layers inside feature/core modules.

To keep frontend architecture backend-agnostic:

- Encapsulate API calls in service/adapters
- Keep view components focused on UI/state binding
- Avoid leaking backend-specific response handling into reusable UI components

## Local Development with proxy-mock-server

For local development and API simulation, `proxy-mock-server` can be used to mock backend responses without depending on live PHP environments.

Typical flow:

1. Start Angular app from repository root
2. Start `proxy-mock-server` from its own directory
3. Point frontend API calls to mock/proxy endpoints as needed for feature development and testing

## Common Commands

From repository root:

```bash
npm install
npm start
npm test
npm run test:ui-kit
```

From `proxy-mock-server`:

```bash
npm install
npm start
```
