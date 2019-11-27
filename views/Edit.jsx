const React = require('react');

class Edit extends React.Component {
  render() {
    return (
        <div>
       <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/normalize.css"></link>
            <link rel="stylesheet" href="/app.css"></link>
            <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:700&display=swap" rel="stylesheet"></link>
        </head>
        <nav class="navigation">
                <a href='/blogs'>Home Page</a>
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs/about'>About Us</a>
                      
        </nav>
            
            <div class="form">
            <h1>Edit Blog</h1>
            <form action={`/blogs/${this.props.blog._id}?_method=PUT`}method="POST">
            <div class="row">
                  <div class="col">
                    <input type="text" name="title" class="form-control"  placeholder={this.props.blog.title}/><br/>
                  </div>
                <div class="col">  
                    <input type="text" name="author" class="form-control" placeholder={this.props.blog.author}/><br/>
                  </div>
                </div>
              <div class="row">
                    <div class="col">
                      <input type="URL" name="image" class="form-control" placeholder={this.props.blog.image}/><br/>
                    </div>
                  <div class="col">  
                    <input type="text" name="date" class="form-control" placeholder={this.props.blog.date}/><br/>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-light text-center" name="" >UpdateBlog</button>
                </div>
             </form>
            </div>
        </div>);
  }
}

module.exports = Edit;
