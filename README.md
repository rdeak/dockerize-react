# Dockerize React app

This project is proof of concept how to Dockerize React app and enable a convenient development environment.

Main goal is to avoid managing different Node.js version on local (host) computer. 

Alternative approach will be usage of [nvm](https://github.com/creationix/nvm).

## Stack

* React
* Webpack 4
* Babel 7
* Typescript

## Prerequisite 

* Docker
* Docker-compose

## How to run

To start a container run
```bash
docker-compose up --build -d
```

To stop a container run
```bash
docker-compose down
```

To add dependency
```bash
docker exec -it <container id> npm i -S express
```

## Webpack configuration (webpack.config.js)

* entry - defines directories that contains source files (default ./src). those directories webpack uses as bundling path

* resolve.extensions - enables users to leave off the extension when importing [read more](https://webpack.js.org/configuration/resolve/#resolveextensions)

* module.babel-loader - enables transpiling JavaScript files using Babel for a given file extensions [documentation](https://github.com/babel/babel-loader)

* plugins.HtmlWebPackPlugin - create HTML file(s) from defined templates to serve webpack bundle(s).  Hash bundles to avoid browser caching. [read more](https://webpack.js.org/plugins/html-webpack-plugin/)

Webpack configuration options can be found [here](https://webpack.js.org/configuration#options).

Webpack-dev-server configuration options can be found [here](https://webpack.js.org/configuration/dev-server/).

Complete list of all loaders can be found [here](https://webpack.js.org/loaders/).

## Babel configuration (.babelrc)

* presets.@babel/preset-env - enables latest JavaScript syntax

* presets.@babel/preset-react - enables transpiling JSX to React.createElement

* presets.@babel/preset-typescript - enables transpiling Typescript to Javascript

* plugins.@babel/proposal-class-properties - expected by @babel/preset-typescript

* plugins.@babel/proposal-object-rest-spread - expected by @babel/preset-typescript

## Typescript configuration (tsconfig.json)

* jsx - enables JSX transformation to JavaScript [read more](https://www.typescriptlang.org/docs/handbook/jsx.html)

* allowJs - enables Typescript within JS files

* noEmit - don't creates js files when compiled with tsc, let Babel transpile all TS source

* moduleResolution - search under node_modules for non-relative imports [read more](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

* esModuleInterop - required for webpack integration. [read more](https://webpack.js.org/configuration/configuration-languages/#typescript) 
 
* isolatedModules - Babel 7 has problems with certain Typescrpt constructs. [read more](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/)  
 
Complete list of options can be found [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html).