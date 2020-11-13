var mongoose = require("mongoose");     
var uri ="mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority";  //URI 
mongoose.connect(uri,{useNewUrlParser:true});   
var db = mongoose.connection;              
mongoose.Promise = global.Promise;
db.on("error",(err)=>console.log("Error..."+err))

db.once("open",function() {
        console.log("Connected...");
        
        var items = mongoose.Schema({
            _id:Number,
            name:String,
            price:Number
        });
        
        var Product = mongoose.model("item", itemSchema);

        
        Product.find({},(err,result)=>{

            if(err){
                console.log("Error "+err);
            }else {
               result.forEach(rec=>{
                   console.log("id is "+rec._id);
               })
            }
            db.close();         
        })
    
});