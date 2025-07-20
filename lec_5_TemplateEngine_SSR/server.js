import express from 'express'

const app = express();

let product = [
    {title:"iphone", price: 45000},
    {title:"oppo", price: 35000},
    {title:"redmi", price: 25000},
]

app.get('/', (req, res) => {
    let name = 'ram'
    res.render('index.ejs', {name, product})
})
const port = 1000;
app.listen(port, ()=>console.log(`server is running on port ${port}`))