import React from 'react';
import { sentenceCase } from "sentence-case";
import { Form, FormInput } from "shards-react";

class SearchBar extends React.Component {

  handleChange = (e) => {
    let userInput = sentenceCase(e.target.value)
    this.props.changeSearchTerm(userInput)
  }

  render() {
    return (
      <>
        <Form>
          <FormInput type="text" 
            className="searchTerm" 
            placeholder="Which Pokemon"
            value={this.props.searchTerm} 
            onChange={this.handleChange} 
            />
        </Form>
      </>
    );
  }

}

export default SearchBar;
