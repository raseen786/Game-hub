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

# Game Hub — Tic Tac Toe

Small React app containing a simple Tic Tac Toe implementation and a placeholder home page.

Quick links:
- App root: [`src/App.js`](src/App.js)
- Home page: [`HomePage`](src/pages/HomePage.js) — [src/pages/HomePage.js](src/pages/HomePage.js)
- Tic Tac Toe: [`TicTacToePage`](src/pages/TicTacToePage.js) — [src/pages/TicTacToePage.js](src/pages/TicTacToePage.js)
- Styles: [src/styles/HomePage.css](src/styles/HomePage.css), [src/styles/TicTacToe.css](src/styles/TicTacToe.css)
- Entry HTML: [public/index.html](public/index.html)
- Package definition: [package.json](package.json)

Prerequisites
- Node.js (14+ recommended)
- npm (bundled with Node.js)

Getting started

1. Install dependencies:
```sh
npm install
```

2. Run the dev server:
```sh
npm start
```
Open http://localhost:3000

Available scripts (from [package.json](package.json))
- npm start — start dev server
- npm test — run tests (see [`src/App.test.js`](src/App.test.js))
- npm run build — produce production build

How to play Tic Tac Toe
- Open the app and click the Tic Tac Toe card (on the home screen implemented in [`HomePage`](src/pages/HomePage.js)).
- Choose a board size (3x3, 4x4, 5x5, 6x6) and click "Start Game".
- Click any empty cell to place the current player's mark (X starts).
- The UI shows the current player and announces a win or draw. Use the restart button shown when the game ends to play again.
Implementation details
- Main component: [`TicTacToePage`](src/pages/TicTacToePage.js)
  - Generates win conditions dynamically for N×N boards.
  - Stores game state in component state and toggles current player.
  - Styles live in [src/styles/TicTacToe.css](src/styles/TicTacToe.css).
- Home screen is a simple selector with cards implemented in [`HomePage`](src/pages/HomePage.js) and styling in [src/styles/HomePage.css](src/styles/HomePage.css).

Project structure
- public/
  - [index.html](public/index.html)
- src/
  - [index.js](src/index.js)
  - [App.js](src/App.js)
  - pages/
    - [HomePage.js](src/pages/HomePage.js)
    - [TicTacToePage.js](src/pages/TicTacToePage.js)
  - styles/
    - [HomePage.css](src/styles/HomePage.css)
    - [TicTacToe.css](src/styles/TicTacToe.css)
  - tests and tooling
    - [App.test.js](src/App.test.js)
    - [setupTests.js](src/setupTests.js)
    - [reportWebVitals.js](src/reportWebVitals.js)

Contributing
- Small, self-contained codebase — open a PR for bug fixes or improvements.
- Follow existing patterns for components and CSS files.

License
- No license specified. Add a LICENSE file if you intend to open-source this repository.
