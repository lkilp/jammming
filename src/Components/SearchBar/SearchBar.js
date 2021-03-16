import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term:props.prefill || ''};
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search(e) {
        e.preventDefault();
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.search} className="SearchBar">
                <input value={this.state.term} placeholder="Enter A Song, Album, or Artist"
                        onChange={this.handleTermChange} />
                <button className="SearchButton">SEARCH</button>
            </form>
        )
    }
}

export default SearchBar;