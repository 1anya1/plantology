const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Blog Entry</h1>
            <form action="/blogs" method="POST">
                Title: <input type="text" name="title" /><br/>
                Author: <input type="text" name="author" /><br/>
                Image: <input type="URL" name="image" /><br/>
                Content: <input type="text" name="body" /><br/>
                Date: <input type="Date" name="date" /><br/>
                <input type="submit" name="" value="Create Blog"/>
             </form>
        </div>);
  }
}

module.exports = New;
