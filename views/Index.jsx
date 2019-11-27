const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
        <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/normalize.css"></link>
            <link rel="stylesheet" href="/app.css"></link>
            <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:700&display=swap" rel="stylesheet"></link>

        </head>
    
        <nav class="navigation">
            <a href='/blogs'>Home Page</a>
            <a href='/blogs/about'>About Us</a>
            <a href="/blogs/new">Add New Blog </a> 
        </nav>

            <h1>Welcome to Plant-ology</h1>
            <div class='index'>
            <ul class='container'> 
                {
                    this.props.blogs.map((blog, i)=>{
                        return(
                            <li>
                                <img class= "main" src={blog.image}></img>
                                <a href={`/blogs/${blog._id}`}> <h3>{blog.title}</h3></a> 
                                <h5>By: {blog.author}</h5>  
                                <h6>{blog.date}</h6>
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