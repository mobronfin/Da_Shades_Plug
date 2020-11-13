var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority";


MongoClient.connect(uri,(err,db)=> {
    if(err) {
        console.log("Couldn't Connect...")
    }else {
        console.log("Connection Successful...")
    }

    db.close();     
});




