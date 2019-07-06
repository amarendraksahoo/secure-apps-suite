import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({items: data}));
    }
    render() {
        const listview = this.state.items.map(item => (
            <div key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>List</h1>
                {listview}
            </div>
        )
    }
}

export default Posts;