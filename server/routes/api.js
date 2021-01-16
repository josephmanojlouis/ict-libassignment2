// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const BookData = require('../models/Bookdata');
// const db = "mongodb://localhost:27017/library";
// // mongoose.Promise = global.Promise;

// mongoose.connect(db, function(err){
//     if(err){
//         console.error('Error! ' + err)
//     } else {
//       console.log('Connected to mongodb')      
//     }
// });



// router.get('/books', (req,res) => {
//   res.header("Access-Control-Allow-Origin","*")
//     res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,ORIGIN")
//     BookData.find()
//                 .then(function(books){
//                     res.send(books);
//                 });
// })

// router.get('/:id',  (req, res) => {
//   console.log('inside server')
//   const id = req.params.id;
//   console.log(id)
//     BookData.findOne({"_id":id})
//     .then((book)=>{
//         res.send(book);
//     });
// })

// router.post('/insert', (req, res) => {
//   let bookData = req.body
//   let book= new BookData(bookData)
//   book.save((err, newBook) => {
//     if (err) {
//       console.log(err)      
//     } else {
      
//       res.status(200).send(newBook)
//     }
//   })
// })

//  router.put('/update',(req,res)=>{
//    console.log(req.body)
//   const id = req.body._id;
//   const title = req.body.title;
//   const author = req.body.author;
//   const genre = req.body.genre;
//   const imageUrl=req.body.imageUrl;
//   BookData.findByIdAndUpdate({"_id":id},{$set:{"title":title,"author":author,"genre":genre,"imageUrl":imageUrl}})
//   .then(function(){
//       res.send();
//   })
// })

// router.delete('/remove/:id',(req,res)=>{
//   console.log('deletion')
//   id = req.params.id;
//   console.log(id)
//   BookData.findByIdAndDelete({"_id":id})
//   .then(()=>{
//       console.log('success')
//       res.send();
//   })
// })


// module.exports = router;