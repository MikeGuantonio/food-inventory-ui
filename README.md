# Food Inventory UI

## Intent

This application is used to track my food inventory in my home. It should 
* Keep track of the food  I have onhand
* Generate a grocery list for things that have reached a threshold value
* Allow me to create meals based on the contents of my inventory
* Offer suggestions for meals based on what I have on hand 
* Link to common recipies that I have enjoyed in the past 

## Built With

* NPM
* Vue.js
* Tailwind.css

## Installation

This is an npm based project. When running in production it will use a basic Nginx based web server that will serve the contents to the client. When working locally you can start the project with: 
```node
// Pull Dependencies
npm install

// start application
npm run start
``` 

## Running with containers

This project leverages docker-compose to run the full stack as well as local development should you want to do both. This project is self hosted. You should be able to create a stack with docker-compose up -d to stat the server and run everything in the background. 