# Next.js Minimal CV Site

## Live preview: [DanEdwardsDeveloper.com](https://danedwardsdeveloper.com/)

Super simple looking static web developer CV site. All site copy is imported from `app/_library/copy.ts` - this keeps concerns separated and makes it super easy to update the CV - something I do very regularly to reflect the projects I've build and technologies I've learned.

## Technology

-  Next.js
-  Tailwind CSS
-  Written in TypeScript
-  Deployed with [Fly.io](Fly.io)

## Installation

This project uses [pnpm](https://pnpm.io/) as the package manager. If you haven't installed pnpm yet, you can do so by following the [official installation guide](https://pnpm.io/installation).

To set up this project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:

   ```
   pnpm install
   ```

3. Remove `.example` from `app/_library/copy.example.ts` and update with your CV content, adding items as needed

4. Update the links in `app/_components/SimpleAnalyticsBadge.tsx`

   -  Visit [Simple Analytics](https://simpleanalytics.com/) to get yours

5. Run the development server:

   ```
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

-  `pnpm dev`: Runs the app in development mode.
-  `pnpm build`: Builds the app for production.
-  `pnpm start`: Runs the built app in production mode.
-  `pnpm lint`: Runs the linter.
-  `pnpm deploy`: Runs the build script & deploys to [Fly.io](Fly.io) (additional configuration needed)

## License Notice

Copyright (c) [2024] Dan Edwards

The code in this project is free to use, modify, and distribute for any purpose, commercial or non-commercial, without attribution.

However, all textual content, documentation, and other non-code assets (collectively referred to as "copy") are the exclusive property of Dan Edwards and may not be used, reproduced, or distributed without explicit written permission.
