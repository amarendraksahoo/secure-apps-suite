import React, { Component } from 'react';
import './Navigation.css';

export default class NavItem extends Component {
    render() {
        return (
            <li>
                {window.location.pathname === this.props.pathname && <a className="selected" href={'#' + this.props.pathname}>{this.props.label}</a>}
                {window.location.pathname !== this.props.pathname && <a href={'#' + this.props.pathname}>{this.props.label}</a>}
            </li>
        );
    }
}