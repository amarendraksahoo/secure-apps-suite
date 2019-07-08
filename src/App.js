import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import Demo from './components/Demo';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="body">
          <HashRouter>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/posts" component={Posts} />
                <Route path="/addpost" component={Post} />
                <Route path="/demo" component={Demo} />
            </div>
          </HashRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
