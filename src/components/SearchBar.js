import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <input
            type='text'
            placeholder='Search images'
            value={this.state.searchTerm}
            onChange={(e) => {
              this.setState({ searchTerm: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
