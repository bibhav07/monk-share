const mongoose  = require("mongoose");

async function connectDB(){
 
        //database connetion
        mongoose.connect(process.env.MONGO_CONNECTION_URL);
       

        mongoose.connection
        .once('open', function () {
          console.log('MongoDB  connected');
        })
        .on('error', function (err) {
          console.log(err);
        });




}


module.exports  = connectDB;