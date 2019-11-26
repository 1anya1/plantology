const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema ({
    title: String,
    author: String,
    image: String, 
    body: String, 
    date: Date
});
console.log(blogSchema);
const Blog = mongoose.model('Blog', blogSchema );
module.exports = Blog; 
