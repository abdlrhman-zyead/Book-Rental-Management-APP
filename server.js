const express = require("express");
const {request} = require("express");
const server = express();
const port = 3000;

server.get("/",(request, response)=>
{
    // base url welcome screen
})

server.get('/books',(request ,response)=>{
    response.status(202).send("All Books");
})

server.get('/books/:id',(request , response)=>{
    response.status(200).send("Book details");
})

// server connect to power
server.listen(port, () => {
    console.log("Server running on port " + port);
})