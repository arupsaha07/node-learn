//---------------------------------------------------------------//
//                    Middleware in node js                      //
//           middleware used for a particular route              //
//---------------------------------------------------------------//
const express = require('express');
const app = express();
const reqFilters = require('./middleware');
const route = express.Router();


//app.use(reqFilters)
route.use(reqFilters);

app.get('/', (req, res) => {
    res.send('Welcome to home page');
})

route.get('/login', (req, res) => {
    res.send('User is logged in');
})

route.get('/user', (req, res) => {
    res.send('User is logged in');
})

app.get('/contact', (req, res) => {
    res.send('Welcome to Contact page');
})

app.use('/',route)

app.listen(5000);