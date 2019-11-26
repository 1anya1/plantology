const React = require('react');

class New extends React.Component {
  render() {
    return (
    <div>
        <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/app.css"></link>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
         </head>
    
            <nav class="navigation">
                <a href='/blogs'>Home Page</a>
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs'>About Us</a>
            </nav>

            <h1>New Blog Entry</h1>
            
            <form action="/blogs" method="POST">
                <div class="form-group">
                
                <label for="formGroupExampleInput">Title</label>
                <input type="text" name="title" class="form-control" id="formGroupExampleInput" placeholder="Title of Blog Post"/><br/>     
                
                <label for="formGroupExampleInput">Author</label>
                <input type="text" name="author" class="form-control" id="formGroupExampleInput" placeholder="Your Name"/><br/>

                <label for="formGroupExampleInput">Date</label>
                <input type="text" name="date" class="form-control" id="formGroupExampleInput" placeholder=" ex: 11.12.2012"/><br/>

                <label for="formGroupExampleInput">Image URL</label>
                <input type="URL" name="image" class="form-control" id="formGroupExampleInput" placeholder="Image Link"/><br/>

                <div class="form-group">

                <label for="exampleFormControlTextarea1">Blog Post</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" type="text" name="body" /><br/>
                </div>

                <input type="submit" name="" value="Create Blog"/>
                </div>
             </form>
                
     </div>);
  }
}

module.exports = New;
