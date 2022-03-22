import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import "./App.css";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

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
        <ImageList />
      </div>
    );
  }
}

export default App;
