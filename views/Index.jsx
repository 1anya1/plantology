const React = require('react');

class Index extends React.Component {
  render() {
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
            </nav>
            <h1>Blog Page</h1>
            <div class='index'>
            <ul class='container'> 
                {
                    this.props.blogs.map((blog, i)=>{
                        return(
                            <li>
                            <a href={`/blogs/${blog._id}`}> <h4>{blog.title}</h4></a> 
                               
                               <h6>Published By: {blog.author}</h6>  
                               <h6>{blog.date}</h6>
                                <img src={blog.image} style={{width:'250px'}}></img>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        </div> );
  }
}

module.exports = Index;