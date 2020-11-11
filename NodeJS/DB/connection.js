const mongoose = require('mongoose'); 

const URI = "mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority";

const connectDB = async() =>{
await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true}); 
console.log('DB has been connected...')



}

module.exports = connectDB; 