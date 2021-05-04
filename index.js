const express = require('express'); //require the express module
const app = express();  //creating an express app this will be name of our app.
const sqlite3 = require('sqlite3').verbose();// module to work with sqlite
const home = require('./home');

app.use('/',home);


  

const port = 8000  ;//setting the environment variable for the port else default 3000
app.listen(port,()=>console.log(`listening on port ${port}`)); //debugging info.