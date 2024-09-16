# Hacker News Stories Application

This is a [Next.js](https://nextjs.org) project that fetches and displays top stories from Hacker News. It allows users to view detailed information about each story and submit feedback through a contact form.

## Live Demo

Access the deployed application [here](https://recruitment-task-t-mobile.vercel.app/).

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Development Server](#running-the-development-server)
- [Technologies Used](#technologies-used)
- [API Connection](#api-connection)
- [Feedback Form](#feedback-form)
  - [Form Validation](#form-validation)
  - [Submission and Server-side Logging](#submission-and-server-side-logging)
- [Responsive Design and Accessibility](#responsive-design-and-accessibility)
- [Deployment](#deployment)
  - [Deploying on Vercel](#deploying-on-vercel)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Fetch Top Stories:** Connects to the Hacker News API to retrieve and display top stories on the homepage.
- **Story Details:** Implements routing to allow users to click on a story and view its detailed information on a separate page.
- **Feedback Form:** Includes a responsive and accessible feedback form that collects user information and feedback.
- **Form Validation:** Utilizes `react-hook-form` and `Zod` for robust form validation.
- **Responsive Design:** Ensures the application is fully responsive and adheres to WCAG accessibility guidelines.
- **Server-side Logging:** Logs feedback form submissions to the server-side console.
- **Deployment:** Deployed on Vercel for seamless access and scalability.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/recruitment-task-t-mobile.git
   cd recruitment-task-t-mobile
   ```

2. **Install dependencies:**

   ```Using npm:
   npm install
   ```

   Environment Variables
   Create a .env.local file in the root directory and add the following environment variables:

3. **Database connection string:**

`DATABASE_URL=postgresql://username:password@host/database?sslmode=require`

## Public application URL

NEXT_PUBLIC_APP_URL=http://localhost:3000

Note: Replace username, password, host, and database with your actual database credentials. Do not commit .env.local to version control. Ensure .env.local is added to your .gitignore file to prevent accidental commits.

### Running the Development Server

Start the development server:

    npm run dev

Builds the app for production to the `.next` folder.  
The build is optimized and minified for best performance:

    npm run build

Starts the production server after building the app.  
Make sure to run `npm run build` before using this command:

    npm run start

## Technologies Used

Next.js: React framework for building server-side rendered applications.
React Hook Form: For managing form state and validation.
Zod: TypeScript-first schema validation.
Shadcn-ui: Components collection.
Drizzle ORM: Lightweight ORM for database interactions.
Hono: A small, simple, and fast web framework.
Tailwind CSS: Utility-first CSS framework for styling.
Vercel: Deployment platform for frontend applications.
Lucide-react: Icon library for React.

## API Connection

The application connects to the Hacker News API to fetch top stories and their details. It also uses a PostgreSQL database to store feedback submissions.

Fetching Top Stories:

- Endpoint: https://hacker-news.firebaseio.com/v0/topstories.json
- Function: Retrieves a list of top story IDs.
- Details: The application fetches details for each story ID, including title, author, time, and number of comments.
- Feedback Form

## Feedback Form

The feedback form collects the following information: - Name - Email - Feedback

### Form Validation

1. Name: Minimum 2 characters.
2. Email: Must be a valid email address.
3. Feedback: Minimum 4 characters.

Validation is handled using react-hook-form and Zod. Custom error messages are provided to guide the user in case of invalid input.

### Submission and Server-side Logging

When a user submits the feedback form:

- Validation: The form data is validated on the client side using react-hook-form and Zod.
- Submission: Upon successful validation, the data is sent to the server API.
- Logging: The server logs the feedback data to the console for review.
- Feedback to User: A success message is displayed to the user, and the form is cleared.
- Note: The form does not send data to an external server; it only logs the data on the server side for demonstration purposes.

## Responsive Design and Accessibility

The application is designed to be fully responsive, ensuring a seamless experience across various devices and screen sizes. It adheres to WCAG accessibility guidelines to make the application usable for all users.

Key Accessibility Features

- Semantic HTML: Proper use of HTML elements for better accessibility.
- ARIA Attributes: Utilized where necessary to enhance screen reader support.
- Keyboard Navigation: Ensured that all interactive elements are accessible via keyboard.
- Color Contrast: Maintained sufficient color contrast for readability.

## Deployment

The application is deployed on Vercel for optimal performance and scalability. Vercel provides seamless integration with Next.js, enabling efficient deployments and automatic optimizations.

### Deploying on Vercel

To deploy your Next.js application on Vercel:

1. Sign up or log in to Vercel.
2. Import your GitHub repository containing the project.
3. Set up environment variables in the Vercel dashboard as specified in the .env.local file.
4. Deploy the application by following the prompts.

For more details, refer to the Next.js deployment documentation.

## Contact

For any questions or feedback, please reach out via email.
