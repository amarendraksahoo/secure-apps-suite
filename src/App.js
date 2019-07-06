import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import Demo from './components/Demo';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <HashRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/posts" component={Posts} />
              <Route path="/addpost" component={Post} />
              <Route path="/demo" component={Demo} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
