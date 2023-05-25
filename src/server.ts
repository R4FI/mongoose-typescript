import mongoose from "mongoose";
import app from "./app";

const port: number = 5500;

//database connection
async function server() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/books");
    console.log(`DB connect success`);

    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

server();
