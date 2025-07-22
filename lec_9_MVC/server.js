import express from 'express'
import mongoose from 'mongoose'
// import {User} from './Models/User.js'
import { userRegister } from './controllers/user.js';

const app = express();
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://beautykumari159357:2Kq6gpIDw7IgBJiM@cluster0.rwejqr5.mongodb.net/",
    {dbName: "Learning_NodeJs_course",}
).then(()=>console.log("MongoDB connected..!")).catch((err)=>console.log(err))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.post('/form-submit', userRegister)

const port = 2000;

app.listen(port, ()=>console.log(`server is running on port ${port}`))
