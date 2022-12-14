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

------------------------------------

Known Bugs:
  <!-- Performance is rubbish - especially when near a zone
  - Probably have to change to Canvas to fix this
  - Made some improvements to this by optimising where certain things run.  It's totally usable but I suspect Canvas would improve it further as the frame-drop appears to be from the number of divs being rendered. -->
  - May still be preferable to use Canvas, but the build optimisations fix this dramatically

  <!-- Character animations are occasionally glitchy
  - This seems to be only when changing from one animation from another
  - I suspect it has something to do with how the css animation translates from one animation to the next, possibly if it's midway between to frames.
  - possible solution: is there a reset/stop/clear animation option? -->
  - solved with different step animation properties and keyframes.

  Sprite sheet is not perfect
  - Trees at top all have hard painted shadows, rather than the 50% opacity shadows that the larger trees and stumps and all other objects have.

  <!-- If two adjoining screens both have monsters the positions will be copied from the previous screen -->
  - solved by giving them keys

  <!-- I broke the page turner
  - I don't have time to look at it, but I'm pretty sure it's because there's no tile off the edge of the page, so detectColliders picks it up as being a collider. -->

  <!-- Dropped items rerender every frame
  - This is because player position is being passed as a prop which updates every frame.  I need this to allow player to pickup the item if they run over it.  So this would need a significant change to fix.  It works and doesn't seem to cause performance issues though, so, you know. -->