# Udacity Front End Web Developer Nanodegree Program. Project 4.
## Evaluate a news article with Natural Language Processing.

The goal for this project is to learn how to build a web tool that allows users to run Natural Language Processing on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral. 
In this project the NLP functionality is provided by the [Meaning Cloud API](https://www.meaningcloud.com/products/sentiment-analysis).

### This project showcases the following front-end dev skills:
 - Use of **Express** as a back-end framework.
 - Use of **Fetch API** for web requests.
 - Use of **Webpack** module bundler as a build tool, in concert with the following plugins:
   - **Babel**, to translate ES6 JavaScript into vanilla JS compatible with any browser.
   - **Loaders**, to translate **Sass** stylesheets into vanilla CSS.
   - **Minimizers**, to reduce file sizes of built assets for browser optimization.
   - **Webpack Dev Server**, to view live updates during development.
   - **dotenv**, to keep private information (like API keys) hidden from client view in production.

## Dependencies
- @babel/runtime
- body-parser
- cors
- dotenv
- express
- form-data
- node-fetch

## Developer Dependencies
- @babel/core
- @babel/plugin-transform-runtime
- @babel/preset-env
- babel-loader
- css-loader
- css-minimizer-webpack-plugin
- html-webpack-plugin
- jest
- mini-css-extract-plugin
- node-sass
- sass-loader
- style-loader
- terser-webpack-plugin
- webpack
- webpack-cli
- webpack-dev-server
- workbox-webpack-plugin

## Installation instructions
1. Clone the repository in Project 4 at https://github.com/NimheAdler.
2. Install the dependencies
	- Open a terminal or command prompt
	- Navigate to the project root folder
	- Run `npm install`

3. Sign up for an API key at [MeaningCloud.com](https://www.meaningcloud.com/developer/create-account).

4. Configure environment variables using the dotenv package
	- Create a new `.env` file in the root folder of your project
	- Store the API key in the `.env` file like this:
	```
	API_KEY=**************************
	```
5. Build project
	- Open a terminal or command prompt
	- Navigate to the project root folder
	- Run the command `npm run build`

6. Start the server
	- Run the command `npm run start`
7. Open the browser at http://localhost:8081/
