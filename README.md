# Webpack React TypeScript Demo
This repo contains two sample apps showing how to use TypeScript to develop React applications with webpack

## Simple
This application shows an example of how to use TypeScript to develop React applications with webpack.
This application use hot module reloading

npm install -g http-server
npm install -g tsd
tsd install

## Material-ui
In this application we have added material-ui which provides real cool react components for creating user interface based on Googles material design
The components in this app is written using the Stateless components syntax which unfortunately does not play well with hot-reloading. This is why hot-reloading does not work in this app, hopefully the babel-plugin-react-transform will support this soon. See this thread for updates on the issue: https://github.com/gaearon/babel-plugin-react-transform/issues/57
