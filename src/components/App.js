import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./App.css";

class App extends React.Component {
  onSubmit = (serchTerm) => {
    console.log(serchTerm);
  };

  render() {
    return (
      <div className='ui container mt10px'>
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
