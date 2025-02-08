# **Country Info App**

This project is a web application that provides information about different countries. You can select a country from the main page, and the app will display detailed information about it, including its neighboring countries (borders).

## **Features**

- View detailed information about any selected country.
- See which countries share borders with the selected country.
- Interactive and easy-to-use interface.

## **Technologies Used**

This project was built using the following technologies:

- **Next.js** for server-side rendering and building the frontend.
- **React** for building user interfaces.
- **TypeScript** for type safety and development efficiency.
- **Node.js** for the backend runtime environment.
- **Nest.js** for building a scalable and efficient API.
- **REST API** to fetch country data.
- **Fetch API** to handle HTTP requests.
- **Webpack** for bundling the frontend assets.

## **Installation**

To run this project locally, you will need to install dependencies for both the frontend and backend. Follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/LarySampaio/country-app.git
   cd country-app
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   npm run build
   ```

4. Running the project:
   ```bash
   cd ..  # Go to the root of the project
   npm install
   npm run start
   ```

> **Note:** The application may take a few seconds to load the country data. If it does not load at first, please refresh the page.

> **Note²:** The application runs both the frontend and backend simultaneously at [http://localhost:3000/](http://localhost:3000/).

## **Usage**

Simply open the application in your browser at [http://localhost:3000/](http://localhost:3000/). On the main page, you can select a country to view detailed information about it, including its bordering countries.
