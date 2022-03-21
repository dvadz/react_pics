import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui  form'>
          <input
            type='text'
            placeholder='Search images'
            value={this.state.searchTerm}
            onChange={(e) => {
              this.setState({ searchTerm: e.target.value.toUpperCase() });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
