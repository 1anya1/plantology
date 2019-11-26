const React = require('react');

class About extends React.Component {
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
                <a href='/blogs/about'>About Us</a>
                <a href='/blogs'>Home Page</a>
            </nav>
            <h1>About Us</h1>
        </div>
    );
  }
}

module.exports = About;