const React = require('react');

class Edit extends React.Component {
  render() {
    return (
        <div>
       <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/normalize.css"></link>
            <link rel="stylesheet" href="/skeleton.css"></link>
            <link rel="stylesheet" href="/app.css"></link>
        </head>
        <nav class="navigation">
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs/about'>About Us</a>
                <a href='/blogs'>Home Page</a>
            </nav>
            <h1>New Blog Entry</h1>
            <form action={`/blogs/${this.props.blog._id}?_method=PUT`}method="POST">
                Title: <input type="text" name="title" defaultValue={this.props.blog.title}/><br/>
                Author: <input type="text" name="author" defaultValue={this.props.blog.author}/><br/>
                Image: <input type="URL" name="image" defaultValue={this.props.blog.image}/><br/>
                Date: <input type="text" name="date" defaultValue={this.props.blog.date}/><br/>
                Content: <textarea class= 'Blog'type="text" name="body" defaultValue={this.props.blog.content} /><br/>
                
                <input type="submit" name="" value="Create Blog"/>
             </form>
        </div>);
  }
}

module.exports = Edit;
