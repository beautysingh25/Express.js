import express from 'express'
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
    "mongodb+srv://beautykumari159357:2Kq6gpIDw7IgBJiM@cluster0.rwejqr5.mongodb.net/", {
        dbName:"NodeJs Mastry Course"
    }
).then(()=>console.log("MongoDB Connected...!")).catch((err)=>console.log(err))

const port = 1000;
app.listen(port, ()=> console.log(`server is running on port ${port}`))