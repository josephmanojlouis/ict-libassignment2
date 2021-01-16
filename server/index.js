const express = require('express');
const BookData =require('./models/Bookdata')

const bodyParser = require('body-parser');
const cors=require('cors')
// const api = require('./routes/api');
const port = 3001;

const app = new express();
app.use(cors());

app.use(bodyParser.json()); 
// app.use('/api', api);
// app.get('/', (req, res) => {
//     res.render('api')
// })


    
app.get('/books', (req,res) => {
    res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,ORIGIN")
      BookData.find()
                  .then(function(bookdatas){
                      res.send(bookdatas);
                      
                  });
  })
  app.get('/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,ORIGIN")
    const id =req.params.id
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('book')
        });

    })
    app.post('/insert', (req, res) => {
        res.header("Access-Control-Allow-Origin","*")
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,ORIGIN")
        let bookData = req.body
        let book= new BookData(bookData)
        book.save((err, newBook) => {
          if (err) {
            console.log(err)      
          } else {
            
            res.status(200).send(newBook)
          }
        })
      })
      app.put('/update',(req,res)=>{
        res.header("Access-Control-Allow-Origin","*")
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,ORIGIN")
        console.log(req.body)
       const id = req.body._id;
       const title = req.body.title;
       const author = req.body.author;
       const genre = req.body.genre;
       const imageUrl=req.body.imageUrl;
       BookData.findByIdAndUpdate({"_id":id},{$set:{"title":title,"author":author,"genre":genre,"imageUrl":imageUrl}})
       .then(function(){
           res.send();
       })
     })
     
     app.delete('/remove/:id',(req,res)=>{
        res.header("Access-Control-Allow-Origin","*")
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,ORIGIN")
       console.log('deletion')
       id = req.params.id;
       console.log(id)
       BookData.findByIdAndDelete({"_id":id})
       .then(()=>{
           console.log('success')
           res.send();
       })
     })
   

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});