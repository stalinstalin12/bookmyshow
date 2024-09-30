const express = require('express');
const app = express();
const dotenv = require ('dotenv');
dotenv.config();
const path=requuire('path');

const mongoConnect = require('./db/connect');

const router = require('./routes/movieroutes');
app.use(router);


app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use(express.json());
app.use(express.urlencoded({extended : true}))

// database connection
mongoConnect();

app.use(express.json({ limit: '100mb' })); 
app.use(express.urlencoded({ extended: true, limit: '100mb' }));




app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`)
})