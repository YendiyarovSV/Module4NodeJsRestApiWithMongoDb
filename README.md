# Module4NodeJsRestApiWithMongoDb
My third lab using Node.js working with MongoDb

Answers about your project:
------------------------------------------------------------------------------
# Question №1:
Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?

# Answer to the question №1:

My project consists of several files folders:
- routes - modules in this folder describe routing for app;
- validation - modules in this folder describe validation rules for every user request.

Starting point is **'server.js'** file.
- This file can be used to run a server and make requests.
------------------------------------------------------------------------------
# Question №2:
How did you test your project to verify that it works?

# Answer to the question №2:
1) Install packages **npm i**;
2) Start **mongodb** database;
3) Run the program **node server.js**;
4) Try to make requests GET, POST, PUT, DELETE to the url:
http://localhost:3000/accounts

4) Run mongo terminal or mongoui to check existence of the following MongoDb objects:
- database with a name **RestApiAccountsDb**;
- collection **Account**.
------------------------------------------------------------------------------
# Question №3:

Let us know if anything doesn't work as intended so your reviewer will know ahead of time

# Answer to the question №3:

Nope everything seems to work just fine! :)
