import express from 'express'

//creating server and port
const app = express();

// routing- single or multiple
app.get('/', (req, res) => {
    res.send("you are requested for home router")
})

app.get('/srk', (req, res) => {
    res.send("you are welcome.")
})

const port = 4000;
app.listen(port, ()=> console.log(`server is running on port ${port}`));
