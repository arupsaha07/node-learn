//const http = require("http");
//const data = require("./data");
//const fs = require('fs');
//const path = require('path');


//----------------------------------------------------------------------//
//                 Create server with responce header                   //
//----------------------------------------------------------------------//
// http.createServer((req, res)=>{
//     res.writeHead(200,{'content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000)
//----------------------------------------------------------------------//



//----------------------------------------------------------------------//
//              process.argv =  process.argument vector                 //
//----------------------------------------------------------------------//
//const input = process.argv;
//----------------------------------------------------------------------//



//----------------------------------------------------------------------//
//                             write file                               //
//----------------------------------------------------------------------//
//fs.writeFileSync(input[2], input[3])
//----------------------------------------------------------------------//



//----------------------------------------------------------------------//
//                            delete file                               //
//----------------------------------------------------------------------//
//fs.unlinkSync(input[2]); 
//----------------------------------------------------------------------//



//----------------------------------------------------------------------//
//                          create file path                            //
//----------------------------------------------------------------------//
// const dirPath = path.join(__dirname,'files'); 
// console.log(dirPath)
//----------------------------------------------------------------------//



//----------------------------------------------------------------------//
//           loop to create files inside folder name > files            //
//----------------------------------------------------------------------//
// for(i=0; i<5; i++){     
//     fs.writeFileSync(dirPath + "/hello"+i+".text", "text written inside file")
// }
//----------------------------------------------------------------------//



//----------------------------------------------------------------------//
//                          listing of files                            //
//----------------------------------------------------------------------//
// fs.readdir(dirPath,(err,files)=>{   
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })
//----------------------------------------------------------------------//



//----------------------------------------------------------------------//
//          Create new folder manually name 'crud',                     //
//          get the path of the folder 'crud'                           //
//          create apple.txt                                            //
//----------------------------------------------------------------------//
// const fs = require('fs');
// const path = require('path');
// const folderPath = path.join(__dirname, 'crud');
// const filePath = `${folderPath}/apple.txt`;

//----------------- write text inside the file (CREATE) ----------------//
//fs.writeFileSync(filePath, 'This is a text written inside apple.txt file');
//----------------------------------------------------------------------//

//----------------- read text inside the file (READ) -------------------//
// fs.readFile(filePath,'utf8', (err, item)=>{
//     console.log(item)
// })
//----------------------------------------------------------------------//

//--------------- update text inside the file (UPDATE) -----------------//
// fs.appendFile(filePath,'now text is edited', (err)=>{
//     if(!err) console.log('file is updated')
// })
//----------------------------------------------------------------------//

//---------------------- delete the file (DELETE) ----------------------//
// fs.unlinkSync(filePath);
//----------------------------------------------------------------------//


//----------------------------------------------------------------------//
//                            Async Node function                       //
//           Node js works Asynchronusly that's why the output is       //
//                10, 20. here the value of b is not updated            //
//----------------------------------------------------------------------//
// let a = 10;
// let b = 20;

// console.log(a)

// setTimeout(()=>{
//     b = 30;
// }, 3000)

// console.log(b)
//----------------------------------------------------------------------//


//----------------------------------------------------------------------//
//                         Async Node function                          //
//               Using promise to overcome the above issue              //
//----------------------------------------------------------------------//
// let a = 10;
// let b = 20;

// console.log("first function "+a)

// let waitingData = new Promise((resolve, reject)=>{
//     let b = 30
//     setTimeout(()=>{
//        resolve(b)  // pass the updated value of b inside resolve
//     }, 3000)
// })

// waitingData.then((data)=>{
//     b = data
//     console.log("final function " + b)
// })
//----------------------------------------------------------------------//


//----------------------------------------------------------------------//
//                                Express                               //
//----------------------------------------------------------------------//

// const express = require("express");
// const app = express();


// app.get("", (req, res)=>{
//     res.send("welcome home");
// })

// app.get("/about", (req, res)=>{
//     res.send("welcome about")
// })

// get data with query parameter through browser url
// http://localhost:5000/help?name=arup

// app.get("/help", (req, res)=>{
//     res.send(`${req.query.name}`)
// })

// app.listen(5000)
//----------------------------------------------------------------------//


//----------------------------------------------------------------------//
//                     Create html in node express                      //
//                      Navigate to the page like                       //
//                 home page   :     http://localhost:5000              //
//              about page  :    http://localhost:5000/about.html       //
//----------------------------------------------------------------------//

// const express = require("express");
// const app = express();
// const path = require('path');

// publicPath = path.join(__dirname, 'views')

// app.use(express.static(publicPath))

// app.listen(5000);
//----------------------------------------------------------------------//


//----------------------------------------------------------------------//
//                     Create html in node express                      //
//                      Navigate to the page like                       //
//              home page   :     http://localhost:5000                 //
//              about page  :    http://localhost:5000/about            //
//----------------------------------------------------------------------//

// const express = require("express");
// const app = express();
// const path = require('path');

// publicPath = path.join(__dirname, 'views')

// app.get('',(req, res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// })
// app.get('/about',(req, res)=>{
//     res.sendFile(`${publicPath}/about.html`);
// })

// app.get('*',(req, res)=>{
//     res.sendFile(`${publicPath}/notFound.html`);
// })

// app.listen(5000);
//----------------------------------------------------------------------//



//----------------------------------------------------------------------//
//               Dynamic data render with the help of ejs               //
//           profile page  :    http://localhost:5000/profile           //
//----------------------------------------------------------------------//

const express = require("express");
const app = express();
const path = require('path');
const data = require('./data');

publicPath = path.join(__dirname, 'views');

app.set('view engine', 'ejs');

app.get('',(req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/profile',(req, res)=>{
    res.render('profile', {data});
})

app.get('/login', (req, res)=>{
    res.render('login')
})


app.listen(5000);
//----------------------------------------------------------------------//