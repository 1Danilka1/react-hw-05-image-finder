import React, { Component } from "react";
import css from './Modal.module.css'


export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div  className={css.overlay} onClick={this.handleBackdropClick} >
        <img src={this.props.imageLink} alt={this.props.imageAlt} className={css.modal}/>
     </div>
    );
  }
}