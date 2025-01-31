# Next.js 15 Data Fetching Issue

This repository demonstrates a data fetching issue in Next.js 15 where data is only fetched once, not on every render cycle. This can lead to errors when refreshing certain pages, particularly those that rely on dynamic data.

## Problem

The `about.js` page demonstrates this issue.  The `console.log` statement shows that the data is only fetched when the page is initially loaded.  If you refresh the page, the `console.log` statement will not execute, indicating that the data is not re-fetched.

## Solution

The solution involves using appropriate data fetching methods that ensure data is fetched on every render cycle.  This can be achieved using methods like `getServerSideProps` or `getStaticProps` for static data, or `useSWR` or similar hooks for dynamic data.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the directory:
   ```bash
   cd nextjs-data-fetching-issue
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```