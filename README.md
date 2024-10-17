# Vehicle Filter Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Filter by Vehicle Make**: Users can select a vehicle make from a dropdown list of car brands.
- **Filter by Model Year**: Users can select a model year (2015 to the current year).
- **View Available Models**: The app fetches and displays available models based on the selected make and year.
- **Responsive Design**: The app is designed to work well on both desktop and mobile devices.
- **Error Handling**: Handles errors gracefully if the API request fails or if no models are available.

## Architecture Overview

- **src/app**: Contains the pages and layout of the application.
  - **page.js**: The home page where users can filter by make and model year.
  - **result/[makeId]/[year]/page.js**: Displays vehicle models based on the selected make and year.
- **src/services**: Contains the API service to fetch data.
  - **vehicleService.js**: Handles requests to the NHTSA Vehicle API.
- **src/components**: Contains reusable components like dropdowns and buttons.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Installation and Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

## Format the Code

To format the code with Prettier:

```bash
npm run format
```

### Run ESLint

To lint the code for errors:

```bash
npm run lint
```
