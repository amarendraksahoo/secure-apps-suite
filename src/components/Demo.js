import React from 'react';
import Post from './Post';
import Posts from './Posts';

export default class Demo extends React.Component {
  render() {
    return (
        <div>
            <Post />
            <Posts />
        </div>
    );
  }
}