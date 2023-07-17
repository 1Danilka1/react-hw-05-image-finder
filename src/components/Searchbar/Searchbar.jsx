import React, { Component } from 'react'
import c from './Searchbar.module.css'

export default class Searchbar extends Component {
    state = {
      searchImgs: '',
    }

    handleNameChange = e => {
        this.setState({ searchImgs: e.currentTarget.value.toLowerCase() });
      };

      handleSubmit = e => {
        e.preventDefault();
        if (this.state.searchImgs.trim() === '') {
          return;
        }

        this.props.onSubmit(this.state.searchImgs);
        this.setState({
          searchImgs: '',
        });

      
      }
      


  render() {
    return (
      <>
        <form className={c.form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchImgs"
            className={c.searchbar}
            value={this.state.searchImgs}
            onChange={this.handleNameChange}
          />
          <button type="submit" className={c.button}>Знайти</button>
        </form>
      </>
    )
  }
}
