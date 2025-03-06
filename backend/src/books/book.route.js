const express = require('express')
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook } = require('./book.controller');
const router = express.Router();

// frontend -> request -> api -> backend -> contreoller -> database -> backend -> frontend
// Post a book
// post = when submit something frontend to db
// get = when get something frontend from db
// put/patch = when edit or update something

// post a book
router.post('/create-book', postABook)


// get all books
router.get("/", getAllBooks)

// single book endpoint
router.get("/:id", getSingleBook)



module.exports = router;
