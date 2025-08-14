const express = require("express");
const {request} = require("express");
const server = express();
const port = 3000;
///////////////////////
const mongoose = require('mongoose');
//  mongodb+srv://root:root@book-rental-managementa.zgg46lw.mongodb.net/Book-Rental-ManagementApp
mongoose.connect("mongodb+srv://root:root@book-rental-managementa.zgg46lw.mongodb.net/Book-Rental-ManagementApp?retryWrites=true&w=majority&appName=Book-Rental-ManagementApp");
const bookModel = require('./Models/books');
///////////////

server.get("/",(request, response)=>
{
    response.status(200).send("Welcome screen");
})

server.get('/books',async (request ,response)=>{
    const books = await bookModel.find();
    response.json(books)
    // response.status(202).send("All Books");
})

server.get('/books/:id',(request , response)=>{
    response.status(200).send("Book details");
})

// server connect to power
server.listen(port, () => {
    console.log("Server running on port " + port);
})
