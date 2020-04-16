import React from 'react';
import { sentenceCase } from "sentence-case";

class SearchBar extends React.Component {

  handleChange = (e) => {
    let userInput = sentenceCase(e.target.value)
    this.props.changeSearchTerm(userInput)
  }

  render() {
    return (
      <div className = 'gloglobalCss'>
      <div className="search">
       <input type="text"
         className="searchTerm"
         placeholder="Which Pokemon"
         value={this.props.searchTerm}
         onChange={this.handleChange}
      />
      </div>
      </div>
    );
  }

}

export default SearchBar;
