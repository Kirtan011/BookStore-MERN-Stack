import express from "express"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import bodyParser from 'body-parser';
import cors from "cors";
import 'dotenv/config';        

const app = express();
const PORT = process.env.PORT;
const mongoDBURI=process.env.MONGODBURI;

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware to handling cors policy
//option 1: Allow All origins with Default of cors(*)
// app.use(cors());
//option 2: Allow Custom Origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
})); 

app.get("/", (req,res)=>{
    console.log(req);
    res.send("Hy");
})



app.use("/books",booksRoute);

mongoose.connect(mongoDBURI)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, ()=>{
        console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Connection failed:', err);
  });



app.listen(`https://localhost:${PORT}`, () => {
  console.log(`server running on ${PORT}`)
})
