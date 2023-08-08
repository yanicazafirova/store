# Product Listing App

## Overview
The Product Listing App is a web application that allows users to browse and view a list of products. It provides features such as filtering products by category, sorting products based on criteria, and dynamically loading more products as the user scrolls.

## Technologies Used
### React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
### React Router: Used for handling routing and navigation within the app.
### Material-UI: Used to create a consistent and visually appealing user interface with pre-designed components.
### Axios: Used for making HTTP requests to fetch product data from an external API.
### ES6+ JavaScript: Modern JavaScript features and syntax were used throughout the project.

## Features
1.	Product Listing: Display a grid of products, each showing relevant information about the product.
2.	Category Filtering: Users can filter products by selecting a category from a list.
3.	Sorting: Users can sort the products based on different criteria such as price and title, in ascending or descending order.
4.	Load More: Products are dynamically loaded as the user scrolls down, providing a seamless browsing experience.
5.	Responsive Design: The app is responsive and works well on various screen sizes and devices.

## Implementation
## Filtering and Sorting

### Categories and products are fetched from an external API using Axios.
### The Sort component provides a dropdown for selecting the sorting criteria and order.
### The ItemList component uses the selected criteria and order to dynamically sort and display products.

## Load More

### The ItemList component maintains a state for the number of visible products.
### When the "Load More" button is clicked, the number of visible products is increased.

## Challenges
### Implementing dynamic sorting and filtering required careful management of state and data flow.
### Achieving smooth infinite scrolling while fetching additional products presented a challenge in terms of performance optimization.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
