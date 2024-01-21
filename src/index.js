//require('dotenv').config({path: '/.env'});
import  dbConnect  from "./db/db.js";

dbConnect();

//
// import express from "express";
// const app = express();
//
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
//     app.on('error', (err) => {
//         console.error('Error", error')
//         throw err;
//     })
//     app.listen(process.env.PORT,() => {
//         console.log(`Your app is listeningon ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// })();
