const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/practice-db");
const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
})

const saveToDb = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({ name: "m12", price: 7700, brand: "samsung", category:"mobile" });
    const result = await data.save();
}

const updateInDb = async ()=>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.updateOne(
        {name:"m10"},
        {
            $set:{name:"m9", brand: "samsung", price:2600, category: "mobile"}
        }
    )
}

updateInDb();