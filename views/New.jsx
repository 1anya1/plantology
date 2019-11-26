const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
   <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/normalize.css"></link>
            <link rel="stylesheet" href="/skeleton.css"></link>
        </head>
    
            <nav>
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs'>About Us</a>
                <a href='/blogs'>Home Page</a>
            </nav>
            <h1>New Blog Entry</h1>
            <form action="/blogs" method="POST">
                Title: <input type="text" name="title"/><br/>
                Author: <input type="text" name="author"/><br/>
                Date: <input type="text" name="date"/><br/>
                Image: <input type="URL" name="image"/><br/>
                Content: <textarea class= 'Blog'type="text" name="body"/><br/>
                
                <input type="submit" name="" value="Create Blog"/>
             </form>
        </div>);
  }
}

module.exports = New;
