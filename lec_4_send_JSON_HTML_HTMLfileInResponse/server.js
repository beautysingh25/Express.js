import { log } from 'console';
import express from 'express'
import path from 'path'
const app = express();

const products = [
    {title:'iphone - 15', price:75000},
    {title: 'samsung', price: 25000},
    {title: 'oppo', price: 35000},
]
// send response
app.get('/', (req, res) => {
    // res.json({
    //     messege:'fetch all products',
    //     jo_chahe:'de skte h',
    //     products: products, 
    //     seccess: true,
    // });

    // res.send('<h1>this is your response</h1>')

    const dir = path.resolve()
    // console.log("my path = ", dir);

    const url = path.join(dir, './index.html')
    console.log("full path = ", url);
    
    res.sendFile(url)

    

});

const port = 1000;

app.listen(port, ()=> console.log(`server is running on port ${port}`))


