# TerraHaven

A modern monorepo project for TerraHaven, featuring a customer mobile app, marketing website, and admin dashboard.

## Structure

```
.
terrahaven/
├── apps/
│   ├── mobile/          # React Native Expo customer app
│   ├── marketing/       # Astro marketing landing page
│   └── admin/           # Next.js admin dashboard
├── packages/            # Shared packages
└── package.json
```

## Apps

### Customer App (`apps/mobile`)
**Stack:** React Native, Expo, Tailwind (NativeWind)

The customer-facing mobile application built with Expo for iOS and Android.

**Key Features:**
- Cross-platform mobile app (iOS & Android)
- Styled with NativeWind (Tailwind for React Native)
- Expo Router for navigation


### Marketing Site (`apps/marketing`)
**Stack:** Astro

High-performance marketing landing page with static site generation.

**Key Features:**
- Fast, optimized static pages
- SEO-friendly
- Component-based architecture
- Styled with Tailwind for React Native


### Admin Dashboard (`apps/admin`)
**Stack:** Next.js, Tailwind

Internal admin dashboard for managing the platform.

**Key Features:**
- Server-side rendering
- API routes
- Role-based access control

### Backend(`packages/supabase`)

Tech Stack: Supabase
Centralized backend infrastructure providing authentication, database, storage, and edge functions.

**Services:**

Authentication: User management and auth flows
PostgresDB: Real-time database
Storage: File and media storage
Edge Functions: Serverless API endpoints

## Shared Packages

The `packages/shared` directory contains code shared across apps:

- **Types:** TypeScript interfaces and types
- **Utils:** Common utility functions
- **Config:** Shared configuration files
- **Constants:** Shared constants and enums

## Technology Stack

- **Monorepo Management:** pnpm workspaces, turborepo
- **Mobile:** React Native, Expo
- **Styling:** NativeWind CSS, Tailwind CSS
- **Marketing:** Astro.js
- **Admin:** Next.js
- **Language:** TypeScript
