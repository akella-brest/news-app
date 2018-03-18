import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    dataSearch(e, data, term, updateData) {
        const value = e.target.value;

        const filter = data.filter((arr) => {
            return arr.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });

        updateData({
            data: filter,
            term: value
        });
    }

    render() {
        const { data, term, updateData } = this.props;

        return (
            <div className='search'>
                <label>
                    Search: <br />
                    <input
                        value={term}
                        type='search'
                        className='form-control"'
                        placeholder='Search news...'
                        onChange={(e) => this.dataSearch(e, data, term, updateData)}
                    />
                </label>
            </div>
        );
    }
}

export default Search;
