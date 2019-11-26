const React = require ('react');

class Show extends React.Component {
    render(){
        return (
        
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
                <a href='/blogs'>About Us</a>
                <a href='/blogs'>Home Page</a>
                <a href={`/blogs/${this.props.blog._id}/edit`}>EDIT POST</a> 
            </nav>
            
            <h2>{this.props.blog.title}</h2>
            <h4>{this.props.blog.author}</h4>
            <h6>{this.props.blog.date}</h6>
            <img src={`${this.props.blog.image}`} />
            <p>{this.props.blog.body}</p>
            <form action={`/blogs/${this.props.blog._id}?_method=DELETE`} method='POST'>
            <input type='submit' value="DELETE"/>
            </form>
                         
        </div>
        )
    }
}


module.exports = Show; 