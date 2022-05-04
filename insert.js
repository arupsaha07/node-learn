const dbConnect = require("./mongodbConnect");


const insert = async()=>{
    const db =await dbConnect()
    const result = await db.insertOne({
        name: "note 11",
        brand:"redmi",
        price:1400,
        category: "mobile"
    })

    console.log(result)
}

insert();