const React = require('react');

class New extends React.Component {
  render() {
    return (
    <div>
        <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/app.css"></link>
         </head>
    
            <nav class="navigation">
                <a href='/blogs'>Home Page</a>
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs/about'>About Us</a>
                
            </nav>
            <div class="form">
            <h1>New Blog Entry</h1>
            <form action="/blogs" method="POST">
                <div class="row">
                  <div class="col">
                    <input type="text" name="title" class="form-control" placeholder="BlogPost Title"/><br/>
                  </div>
                  <div class="col">  
                    <input type="text" name="author" class="form-control"  placeholder="Your Name"/><br/>
                  </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <input type="text" name="date" class="form-control" placeholder=" Date (i.e 11.12.2012)"/><br/>
                    </div>
                    <div class="col">  
                      <input type="URL" name="image" class="form-control" placeholder="Image URL"/><br/>
                    </div>
                  </div>
                  <div class="form-group">
                
                <textarea class="form-control" placeholder="Your thought go here ...." rows="3" type="text" name="body" /><br/>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary" name="" >Create Blog</button>
                </div>
                
             </form>
            </div>;
              
     </div>);
  }
}

module.exports = New;
