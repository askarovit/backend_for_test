const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

require('./database');

let app = express();

app.listen(process.env.PORT, () => {
    console.log('Server listen port :', process.env.PORT)
});
