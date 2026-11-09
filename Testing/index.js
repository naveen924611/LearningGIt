// const express = require("express");
// const app1 = express();
// const app2 = express();
// console.log(app1);


// app1.get('/',(req,res)=>{
//     res.json({testing:"Hello app1"});
// })
// app2.get('/',(req,res)=>{
//     res.json({testing:"Hello app2"});
// })


// app1.listen(3000,()=>{
//     console.log("3000 app1");
// })
// app2.listen(3001,()=>{
//     console.log("3001 app2");
// })

// const fs = require("fs");\
const express =  require("express");
const app =express();
const crypto = require("crypto");

app.use(express.json());

app.get('/test',(req,res)=>{
   
    try{
        console.log("testing working")
        const {data }= req.body;
        const buff =Buffer.from(JSON.stringify(data));
        const base64 = buff.toString('base64');
        const hex = buff.toString('hex');
        const laten = buff.toString('Latin1');
        const utf = buff.toString('utf8');
        const hash = crypto.createHash('sha256');
        console.log("hash",hash);
        const hased = hash.update("Helleo").digest('hex');
        // const unhash = hash.toString('hex')
        // const hased1 = hash.update("Helleo").digest('hex');
        res.json({d2:{base64,hex,laten,utf,hased}});
        // res.json({d2:{data}})
    }catch(error){
        console.error("Error in /test route:",error);
        res.json({error:error})
    }

})

app.listen(3000,()=>{
    console.log("server");
});
