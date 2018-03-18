import React, { Component } from 'react';
import './News.css';
import LikeButton from '../LikeButton/LikeButton';

class News extends Component {
    render() {
        const { descriptions, titles, images, url } = this.props;

        return (
            <div className='news'>
                {titles.map((title, index) => (
                    <div className='news-content' key={index}>
                        <h1>{title}</h1>
                        <p>{descriptions[index]}</p>
                        <img src={images[index]} alt='' />
                        <a href={url[index]} target='_blank'><button>Read more</button></a>
                        <p className='news-date'>{this.props.date[index].substr(11, 5)}</p>
                        <LikeButton
                            value={this.props.value}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default News;
