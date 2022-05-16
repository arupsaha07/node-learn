const express = require('express');

require('./myConfig');

const Products = require('./myProduct');

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new Products(req.body);
    let result = await data.save();
    console.log(req.body)
    res.send(result);
});

app.get('/list', async(req, res)=>{
    let data = await Products.find();
    res.send(data);
})

app.delete('/delete/:_id', async(req, res)=>{
    let data = await Products.deleteOne(req.params);
    res.send(data);
})

app.put('/update/:_id', async(req, res)=>{
    let data = await Products.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    res.send(data);
})
app.listen(5000);