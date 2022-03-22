import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import "./App.css";

class App extends React.Component {
  onSubmit = async (searchTerm) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: searchTerm,
      },
    });
    this.setState({ images: response.data.results });
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
