import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
    constructor() {
        super();

        this.state = {
            liked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }

    componentWillReceiveProps() {
        this.setState({
            liked: false
        });
    }

    render() {
        const label = this.state.liked ? 'Unlike' : 'Like';

        return (
        <div class='like-button'>
            <button className='btn-secondary like-review' onClick={this.handleClick}>
                <i className='fa fa-heart' aria-hidden="true"></i> {label}
            </button>
        </div>
        );
    }
}

export default LikeButton;
