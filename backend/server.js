require('dotenv').config()

const express = require('express');

const cors = require('cors');

const app = express();


// INCLUDE ROUTE FILES

const userRoute = require('./routes/userRoute');



// USE

app.use(cors());

app.use(express.json());

app.use('/pke', userRoute);


app.get('/', (req, res) => {

    res.send('<h1>Hello, Express.js Server!</h1>');

});





const port = process.env.PORT || 3000;

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);

});