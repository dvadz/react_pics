import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./App.css";

class App extends React.Component {
  onSubmit = async (searchTerm) => {
    console.log("Searching");
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchTerm,
      },
      headers: {
        Authorization: "Client-ID O873uH52NtovKnuhPKeGCkDV2Z4C2CsGP8IBMV6-3l4",
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
