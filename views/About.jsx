const React = require('react');

class About extends React.Component {
  render() {
    return (
        <div>
            <nav>
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs/about'>About Us</a>
                <a href='/blogs'>Home Page</a>
            </nav>
            <h1>About Us</h1>
        </div> );
  }
}

module.exports = About;