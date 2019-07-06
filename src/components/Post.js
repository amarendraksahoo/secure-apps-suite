import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    save(e) {

        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                heading: this.state.heading,
                content: this.state.content
            })
        })
        .then(res => res.json())
        .then(data => console.log(data));
        
    }

    render() {
        return (
            <div>
                <h1>Add Item</h1>
                <form onSubmit={this.save}>
                    <div>
                        <label>Heading</label> <br />
                        <input type="text" name="heading" onChange={this.handleChange} value={this.state.heading} />
                    </div>
                    <div>
                        <label>Content</label> <br />
                        <textarea name="content" onChange={this.handleChange} value={this.state.content} />
                    </div>
                    <br />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default Post;