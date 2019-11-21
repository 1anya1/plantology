const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blogs.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}));

//Mongoose connection
mongoose.connect('mongodb://localhost:27017/blogging', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {console.log('connected to mongo');
});

//Index Route
app.get('/blogs', (req, res)=>{
        // res.render('Index');
    Blog.find({ }, (err, allBlogs)=>{
        res.render('Index', {
            blogs: allBlogs
        });
    });
  
    
   
});
// Render View 
app.get('/blogs/new', (req, res)=>{
    res.render('New');
    
});
// Create Blog Route --> redirect index
app.post('/blogs/', (req, res)=>{
    Blog.create(req.body, (err, createBlog)=>{
        res.redirect('/blogs');
    });  
});


 // Port Listen   
app.listen(3000, ()=>{
    console.log('listening')
}); 