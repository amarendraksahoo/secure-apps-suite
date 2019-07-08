import React, { Component } from 'react';
import './Navigation.css';
import NavItem from './NavItem';

export default class Navigation extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">IOAK</div>
                <div className="navmenu">
                    <ul>
                        <NavItem pathname="home" label="Home"/>
                        <NavItem pathname="demo" label="Demo"/>
                    </ul>
                </div>
            </div>
        );
    }
}