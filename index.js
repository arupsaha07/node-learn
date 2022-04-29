//---------------------------------------------------------------//
//                    Middleware in node js                      //
//           middleware used for a particular route              //
//---------------------------------------------------------------//
const express = require('express');
const app = express();
const reqFilters = require('./middleware');


//app.use(reqFilters)

app.get('/', (req, res) => {
    res.send('Welcome to home page');
})

app.get('/user',reqFilters, (req, res) => {
    res.send('Welcome to User page');
})



app.listen(5000);