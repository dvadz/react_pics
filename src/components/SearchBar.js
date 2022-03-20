import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <form className='ui  form'>
          <input className='field' type='text' placeholder='Search images' />
        </form>
      </div>
    );
  }
}

export default SearchBar;
