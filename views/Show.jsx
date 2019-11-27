const React = require ('react');

class Show extends React.Component {
    render(){
        return (
        
        <div>
            <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/normalize.css"></link>
            <link rel="stylesheet" href="/app.css"></link>
            
        </head>
        <nav class="navigation">
                <a href='/blogs'>Home Page</a>
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs/about'>About Us</a>
                <a href={`/blogs/${this.props.blog._id}/edit`}>EDIT POST</a> 
            </nav>
            <img  class ="pageID" src={`${this.props.blog.image}`} />
            <h2>{this.props.blog.title}</h2>
            <h4 class='createdBy'>Created By: {this.props.blog.author}</h4>
            <h4 class ='date'>{this.props.blog.date}</h4>
            
            <p>{this.props.blog.body}</p>
            <form action={`/blogs/${this.props.blog._id}?_method=DELETE`} method='POST'>
            {/* <input type='submit' value="DELETE"/> */}
            <div class="text-center">
            <button type="submit" class="btn btn-light  btn-center" name="" >Delete Blog</button>
            </div>
            </form>
                         
        </div>
        )
    }
}


module.exports = Show; 