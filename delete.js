const dbConnect = require("./mongodbConnect");


const deleteData=async()=>{
    let data = await dbConnect();
    let result = await data.deleteOne({
        name: 'note 10'
    })
    console.log(result)
}


deleteData();