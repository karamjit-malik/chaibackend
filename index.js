require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000

app.get('/' , (req,res)=>
{
    res.send('Hello Bancho! Welcome to the Express server.');
})

app.get('/youtube', (req,res)=>
{
    res.send('Welcome to the YouTube route!');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port : ${port}`);
});
