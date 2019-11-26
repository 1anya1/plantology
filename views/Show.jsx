const React = require ('react');

class Show extends React.Component {
    render(){
        return (
        
        <div>
            <h1>Hello</h1>
            <h2>{this.props.blog.title}</h2>
            <h4>{this.props.blog.author}</h4>
            <img src={`${this.props.blog.image}`} />
            <p>{this.props.blog.body}</p>
        </div>
        )
    }
}


module.exports = Show; 