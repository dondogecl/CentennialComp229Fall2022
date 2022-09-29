const express = require("express");
const mongoose = require("mongoose");

const app = express();

//connect to database
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/student", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb coonected");
  } catch (error) {
    console.log("connection failesd", error);
  }
};
dbConnect();
app.use(express.json());

app.listen(7000, () => {
  console.log("Server is running");
});
