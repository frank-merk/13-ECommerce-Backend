# 13-ECommerce-Backend
ECommerce Backend built using express, node, and sequeliz and tested in Insomnia
* [Video Demo](https://drive.google.com/file/d/1HTJ0Mnm1HaJWUUJ5eIjfvqcTq4OFFoUh/view)

## Overview

This application uses express, node, and sequelize to build out the backend functionality of an ecommerce platform.

## Installation

To install, first make sure you have the dependencies (in this case express, sequelize, mysql and dotenv for authentication):

`npm install`

You will also need to populate the database in SQL Workbench using the schema and seeds in the 'db' directory. Create the database tables by executing the schema file in the project, then seed it from the command line:

`node seeds`

To run the application from the terminal, you will enter:

`npm start`

Routes can be tested in Insomia or Postman at localhost:3001/api/[ROUTE]

## Strategy

First I built my models using guidance from the assignement ReadME. Using the mini project from a previous class was incredibly useful in troubleshooting any issues on that end. After that, I built my routes using that same mini project as a starting point. While there was a good amount of starter code in a few of the files, I found this was a good way to practice using async and await functions. Once I debugged syntax errors to the point where the application ran on command, I could drill down to make sure each route was functioning as intended using Insomia.

## Challenges

I had a few challenges getting that pre-written starter code in the routes to work, specifically the put route, but was able to dissect what it was doing on further review. It was also a fun challenge to get all the relevant data the assignement wanted by pulling in multiple models and using async/await functions.

## License

[Apache 2.0](https://opensource.org/licenses/Apache2.0)

## Questions

For further questions, contact here:
* Email Address: jlimhb@gmail.com
* GitHub: [frank-merk](https://github.com/frank-merk)
