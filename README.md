# ErgoScript Blockly Sample App

## Please Note
You can use [Ergo Script Playground](https://escript.online) to compile generated code in your webbrowser.

## Purpose

This app illustrates how to use Blockly together with common programming tools like node/npm, webpack, typescript, eslint, and others to generate ErgoScript multisigs.

## Quick Start

1. [Install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) npm if you haven't before.
2. Run [`npx @blockly/create-package app <application-name>`](https://www.npmjs.com/package/@blockly/create-package) to clone this application to your own machine.
3. Run `npm install` to install the required dependencies.
4. Run `npm run start` to run the development server and see the app in action.
5. If you make any changes to the source code, just refresh the browser while the server is running to see them.

## Tooling

The application uses many of the same tools that the Blockly team uses to develop Blockly itself. Following is a brief overview, and you can read more about them on our [developer site](https://developers.google.com/blockly/guides/contribute/get-started/development_tools).

- Structure: The application is built as an npm package. You can use npm to manage the dependencies of the application.
- Modules: ES6 modules to handle imports to/exports from other files.
- Building/bundling: Webpack to build the source code and bundle it into one file for serving.
- Development server: webpack-dev-server to run locally while in development.
- Testing: Mocha to run unit tests.
- Linting: Eslint to lint the code and ensure it conforms with a standard style.
- UI Framework: Does not use a framework. For more complex applications, you may wish to integrate a UI framework like React or Angular.

You can disable, reconfigure, or replace any of these tools at any time, but they are preconfigured to get you started developing your Blockly application quickly.

## Structure

- `package.json` contains basic information about the app. This is where the scripts to run, build, etc. are listed.
- `package-lock.json` is used by npm to manage dependencies
- `webpack.config.js` is the configuration for webpack. This handles bundling the application and running our development server.
- `src/` contains the rest of the source code.
- `dist/` contains the packaged output (that you could host on a server, for example). This is ignored by git and will only appear after you run `npm run build` or `npm run start`.

### Source Code

- `index.html` contains the skeleton HTML for the page. This file is modified during the build to import the bundled source code output by webpack.
- `index.js` is the entry point of the app. It configures Blockly and sets up the page to show the blocks, the generated code.
- `ergoscript.js` has custom ergo blocks and a simple serializer to ergoscript.

## Serving

To run your app locally, run `npm run start` to run the development server. This mode generates source maps and ingests the source maps created by Blockly, so that you can debug using unminified code.

To deploy your app so that others can use it, run `npm run build` to run a production build. This will bundle your code and minify it to reduce its size. You can then host the contents of the `dist` directory on a web server of your choosing. If you're just getting started, try using [GitHub Pages](https://pages.github.com/).
