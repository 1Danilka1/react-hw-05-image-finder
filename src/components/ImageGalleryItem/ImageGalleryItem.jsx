import React, { Component } from 'react'
import Modal from 'components/Modal/Modal'
import c from './ImageGalleryItem.module.css'

export default class ImageGalleryItem extends Component {

  state = {
    togModal: false,
  }

  togFunction = () => {
    this.setState(({togModal}) => ({togModal: !togModal}))
  }

  render() {
    return (
      <>
        <li onClick={this.togFunction} className={c.item}>
            <img src={this.props.imgDeafault} alt={this.props.imgTag} />
        </li>
        {
          this.state.togModal && <Modal imageLink={this.props.imageModal} onClose={this.togFunction} imageAlt={this.props.imgTag} />
        }
      </>
    )
  }
}
