const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require("cors");

require('dotenv').config()

//  middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))


// routes
const bookRoutes = require('./src/books/book.route')
app.use("/api/books", bookRoutes)




// mongoose username and password 
//  rohith57878
//  nPkBRlYZE37CtaTk
const mongoose = require('mongoose')

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get('/', (req, res) => {
        res.send('hello world !')
    })
}

main().then(() => console.log("mongodb connected succesfully !")).catch(err => console.log(err))

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})