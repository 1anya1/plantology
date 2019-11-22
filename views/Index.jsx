const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
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
                                The {blog.author} wrote {blog.title} 
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