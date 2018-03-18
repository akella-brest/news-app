import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import News from '../News/News';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import Select from '../Select/Select';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            term: '',
            value: 'bbc-sport'
        };
    }

    updateData(config) {
        this.setState({
            data: config.data,
            term: config.term
        });
    }

    updateSources(value) {
        this.setState({
            value: value
        }, this.getData);
    }

    getData() {
        console.log('EEE');
        const apiKey = 'a5054fbdd2084b37899f9cd07958f378';
        const sources = this.state.value;
        const url = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`;
        var req = new Request(url);

        fetch(req)
            .then(response => response.json())
            .then(dataJson => {
                this.initialData = dataJson.articles;
                this.setState({
                    data: this.initialData
                })
            });
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
        <div className="App">
            <Header />
            <Select
                value={this.state.value}
                updateSources={this.updateSources.bind(this)}
            />
            <Search
                data={this.initialData}
                term={this.state.term}
                updateData={this.updateData.bind(this)}
            />
            <News
                titles={this.state.data.map((arr) => arr.title)}
                descriptions={this.state.data.map((arr) => arr.description)}
                images={this.state.data.map((arr) => arr.urlToImage)}
                url={this.state.data.map((arr) => arr.url)}
                date={this.state.data.map((arr) => arr.publishedAt)}
                value={this.state.value}
            />
            <Footer />
        </div>
        );
    }
}

export default App;
