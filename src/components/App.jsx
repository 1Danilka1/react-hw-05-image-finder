import React, { Component } from 'react'
import SearchBar from './Searchbar/Searchbar.jsx'
import ImageGallery from './ImageGallery/ImageGallery.jsx'

export class App extends Component {
  state = {
    searchImgs: '',
    q: '',
  }

  


  handleSearchFormSubmit = searchInput => {
    console.log(this.state);
    this.setState({
      q: searchInput,
      // searchInput: []
    })
  }

  render() {
    return (
      <div className="main-container">
        <div className="searchbar">
          <SearchBar onSubmit={this.handleSearchFormSubmit}/>
        </div>
          <ImageGallery searchImage={this.state.q}/>

      </div>
    )
  }
}

