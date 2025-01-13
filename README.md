# Project Name

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Testing with Cypress

This project includes end-to-end testing using the [Cypress](https://www.cypress.io/) framework. Below are the details of the tests implemented:

### Accordion Component Tests

- **File:** `cypress/component/Accordion.cy.jsx`
- **Description:** Tests the functionality of the `ItemsAccordion` component.
- **Key Tests:**
  - Verifies the number of accordion items.
  - Checks the visibility toggle of accordion details on click.

### Example Page Tests

- **File:** `cypress/e2e/example.cy.js`
- **Description:** Contains various example tests for navigation and API interactions.
- **Key Tests:**
  - Multi-page navigation testing.
  - API intercepts and response handling.
  - Grudge management feature testing.

### Fundamentals Page Tests

- **File:** `cypress/e2e/fundamentals.cy.js`
- **Description:** Tests the fundamental features of the application.
- **Key Tests:**
  - Verifies the header text.
  - Tests the accordion functionality for visibility toggling.

### Custom Commands

- **File:** `cypress/support/commands.js`
- **Description:** Defines custom Cypress commands for easier test writing.
- **Key Command:**
  - `getDataTest`: A custom command to select elements by `data-test` attribute.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
