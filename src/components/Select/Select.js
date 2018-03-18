import React, { Component } from 'react';
import './Select.css';

class Select extends Component {

    handleChange(event, updateSources) {
        updateSources(event.target.value);
    }

    render() {
        const { value, updateSources } = this.props;

        return (
            <div className='select'>
                <select value={value} onChange={(e) => this.handleChange(e, updateSources)}>
                    <option value='bbc-sport'>BBC Sport</option>
                    <option value='abc-news'>ABC News</option>
                    <option value='bloomberg'>Bloomberg</option>
                    <option value='talksport'>Talk sport</option>
                    <option value='the-sport-bible'>The sport bible</option>
                </select>
            </div>
        );
    }
}

export default Select;
