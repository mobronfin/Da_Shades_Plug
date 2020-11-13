var mongoose = require("mongoose");     
var uri ="mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority";  //URI 
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
      
        var item = mongoose.model("item", itemSchema);

       item.updateOne({_id:''},{$set:{price:' '}},(err,result)=> {
            if(err){
                console.log("Error..."+err);
            }else {
                
                    if(result.nModified==0){
                         console.log("Record didn't update")   
                    }else {
                        console.log("Record updated")  
                    }
            }
            db.close();
        })
        
});