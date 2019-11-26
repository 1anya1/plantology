const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blogs.js');
const methodOverride = require('method-override');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));



//Index Route
app.get('/blogs', (req, res)=>{
        // res.render('Index');
    Blog.find({}, (err, allBlogs)=>{
        res.render('Index', {
            blogs: allBlogs
        });
    });
    
// Render View 
app.get('/blogs/new', (req, res)=>{
    res.render('New');
    
});

// Show route
app.get('/blogs/:id', (req, res)=>{
    Blog.findById(req.params.id, (err, foundBlogs)=>{
        res.render('Show', {blog : foundBlogs});
        console.log(foundBlogs);
    });
});
   
});

//
// Create Blog Route --> redirect index
app.post('/blogs/', (req, res)=>{
    Blog.create(req.body, (err, createBlog)=>{
        res.redirect('/blogs');
    });  
});

app.delete('/blogs/:id', (req, res)=>{
    Blog.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/blogs'); 
    });
});

//Mongoose connection
mongoose.connect('mongodb://localhost:27017/blogging', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {console.log('connected to mongo');
});

 // Port Listen   
app.listen(3000, ()=>{
    console.log('listening')
}); 