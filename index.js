//---------------------------------------------------------------//
//                    Middleware in node js                      //
//     application level middleware. works for all routes        //
//---------------------------------------------------------------//
const express = require('express');
const app = express();

const reqFilters = (req, res, next) => {
    if (!req.query.age) {
        res.send("plz provide age")
    }else if(req.query.age <18){
        res.send("age must be 18+")
    }else {
        next();
    }
}

app.use(reqFilters)

app.get('/', (req, res) => {
    res.send('Welcome to home page');
})

app.get('/user', (req, res) => {
    res.send('Welcome to User page');
})



app.listen(5000);