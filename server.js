require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const path = require("path");
const cors = require('cors');


const app = express();

//template - engine
app.set("views",  path.join(__dirname, "/views"));
app.set("view engine", "ejs");


const PORT  = process.env.PORT || 8080

connectDB();


//cors
const corsOpriotns = {
    origin : process.env.ALLOWED_CLIENTS.split(",")
};
app.use(cors(corsOpriotns));



app.use(express.static('public'));
app.use(express.json());

//routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show") );
app.use("/files/download", require("./routes/download") );




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});


//TIME - 1.40min