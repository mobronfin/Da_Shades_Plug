var mongoose = require("mongoose");     
var uri ="mongodb://localhost:27017/mydb";  
mongoose.connect(uri,{useNewUrlParser:true});   
var db = mongoose.connection;             
mongoose.Promise = global.Promise;
db.on("error",(err)=>console.log("Error..."+err))
db.once("open",function() {
        console.log("Connected...");
        
        var itemSchema = mongoose.Schema({
            _id:Number,
            name:String,
            price:Number
        });
        
        var item = mongoose.model("item",itemSchema);
        
        var p1 = new item({_id:' ',pname:" ",price:' '});
        
        p1.save((err,result)=> {
                if(err){
                    console.log("Error...")
                }else {
                    console.log("Record inserted successfully...")
                }
                db.close();
        })
});