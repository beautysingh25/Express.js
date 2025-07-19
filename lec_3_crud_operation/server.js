import express from 'express'

const app = express();

//c-create, Create => POST(method)
//  r-read, Read => GET(method)
// u-update, Update => PUT(method)
// d-delete, Delete => DELETE(method)

// for read, used get
app.get('/mahi', (req, res) => {
    res.end("this is responding");
})

// for create used, post
app.post('/mahi', (req, res) => {
    res.end("this is responding");
})

// for update used, put
app.put('/mahi', (req, res) => {
    res.end("this is responding");
})

//for delete used, delete
app.delete('/mahi', (req, res) => {
    res.end("this is responding");
})

const port = 2000;

app.listen(port, () => console.log(`server is running on port ${port}`))