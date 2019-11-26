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
    
            <nav>
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs'>About Us</a>
                <a href='/blogs'>Home Page</a>
            </nav>
            <h1>Blog Page</h1>
            <ul>
                {
                    this.props.blogs.map((blog, i)=>{
                        return(
                            <li>
                            <a href={`/blogs/${blog._id}`}> <h3>{blog.title}</h3> </a> <br/> 
                               <br/> 
                               <h4>{blog.author}</h4> <br/> 
                               <h6>{blog.date}</h6>
                                <img src={blog.image} style={{width:'200px'}}></img>
                    
                                

            
                            </li>
                        )
                    })
                }
            </ul>
        </div> );
  }
}

module.exports = Index;