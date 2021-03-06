import express from "express";
import cors from "cors";
//import file sysem
import mongoose from "mongoose";

const morgan = require("morgan");

require("dotenv").config();

//create express app
const app = express();

//mongoose
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

//apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(require("./routes/ROUTE_MOUNTER.js"));

// route
//moved to /routes/auth.js, we'll import file system
//we are changing to synchronously so as to make sure all routes are loaded
//so that we dont have to import each file
// readdirSync("./routes").map((r) => {
//   app.use("/api", require(`./routes/${r}`));
// });
// let routes = readdirSync("./routes");
// console.table(routes);

// app.use("/api", require("./routes/auth.js"));

//port
const port = process.env.PORT || 8000;

//listening to our server
app.listen(port, () => console.log(`Server is running on port ${port}`));
