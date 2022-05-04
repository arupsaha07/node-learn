const dbConnect = require("./mongodbConnect");


const updateData = async () => {
    let data = await dbConnect();

    let result = await data.updateOne(
        { name: 'note 11' },
        { $set: { name: 'note 10' } }
    )

    console.log(result);
}

updateData();