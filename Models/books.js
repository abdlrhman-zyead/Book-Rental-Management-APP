const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name : String,
    author :String,
    price : Number
})


//export model
const bookModel = mongoose.model('books',bookSchema);
module.exports = bookModel;