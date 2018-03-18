import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }

    render() {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC'
        };

        return (
            <header className="header">
                <h1 className="title">News App</h1>
                <p>{this.state.date.toLocaleString('en', options)}</p>
            </header>
        );
    }
}

export default Header;
