var express = require("express");
var app = express();    
var port = 9090;
var mongoose = require("mongoose");    
var uri ="mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority";  //URI 
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true});   
var db = mongoose.connection;             
mongoose.Promise = global.Promise;
db.on("error",(err)=>console.log("Error..."+err))

var itemInfo=[{pid:" ",pname:" ",price:''}]

app.get("/items",(req,res)=> {
            res.json(itemInfo);  
})

app.get("/fashion",(req,res)=> {

            
            var itemSchema = mongoose.Schema({
                _id:String,
                name:String,
                price:Number
            });
           
            var item = mongoose.model("item",productSchema);

            item.find({},(err,result)=>{
    
                if(err){
                    console.log("Error "+err);
                }else {
                  res.json(result);
                }
                db.close();         
            })
})



app.listen(port,()=>console.log(`The server is running on port ${port}`));



