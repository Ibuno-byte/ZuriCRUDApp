# ZuriCRUDApp
This is a NodeJS CRUD app task given by the ZuriTraining Program.

# Project Description

It is a Create, Retrieve, Update and Delete (CRUD) NodeJS App hosted on Heroku Dev Center, that makes use of a MongoDB online data cloud.

It is an identification info app designed to (CRUD) a payload containing json string for the name, email and country of any person interacting with it.

# Folder Structure

The project is in a git repository named ZuriCRDApp which hosts another folder 'src' with subfolders "db", "controllers", "models" and "routes".

The 'db' subfolder allows connection to MongoDB Atlas making use of the prepared user security key.

The 'routes' subfolder contains the api content for the POST, GET(single & all), PUT and DELETE methods written on the script "infoRoutes.js".

The 'models' subfolder holds the data schema setup (using mongoose) for the app hosted on MongoDB Atlas written on "info.js".

The 'controllers' subfolder holds the functions (5 in number) attachable to our routes to read status and create callbacks for our API methods written on script "infoController.js".

The App is run from "server.js" on the root repository. The app listens via express module for connection on the enabled port when "server.js" is run then database connection and routes are awakened.

# App Deployment

Visit my CRUD application hosted on Herou Dev Center via th link below
https://identification-info.herokuapp.com/info
