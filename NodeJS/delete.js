var mongoose = require("mongoose");     
var uri ="mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority"; 
mongoose.connect(uri,{useNewUrlParser:true});  
var db = mongoose.connection;              
mongoose.Promise = global.Promise;
db.on("error",(err)=>console.log("Error..."+err))

db.once("open",function() {
        console.log("Connected...");
        var itemSchema = mongoose.Schema({
            _id:String,
            name:String,
            price:Number
        });
        var item = mongoose.model("item", itemSchema);

        
        item.deleteOne({price:''},(err,result)=>{
            if(err) throw err;

                    if(result.deletedCount>0){
                        console.log("Record deleted successfully...")
                    }else {
                        console.log("Record is not present");
                    }
            db.close();
        })
        
});