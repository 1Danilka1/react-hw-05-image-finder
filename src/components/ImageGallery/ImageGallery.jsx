import React, { Component } from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import c from './ImageGallery.module.css'

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    key: '38285947-a2703721a4838be0cab093200',
    page: 1,
    per_page: 12,
    total: 0,
    loader: false,
    // status:'idle', 
  };

  fetch = () => {
    setTimeout(() => {
      fetch(
         ` https://pixabay.com/api/?q=${this.props.searchImage}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
          .then(images => {
            if (images.hits.length < 1) {
              return Promise.reject(
                new Error(`Sorry, but there are currently no images for your request
                ${this.props.searchImage}`)
              );
            }
            if(this.state.page > 1){
              return (
              this.setState({
                images:[...this.state.images,...images.hits],
              }),this.downScroll())
            }
            else {
                return this.setState({
                    loader: false,
                    images:images.hits,
                    total: images.totalHits,
                })
            }
            }
          )
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ laoder: false })) 
      },200)
  }

  downScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  }

  reset = () => {
    this.setState({
      page: 1,
      images: [],
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImage !== this.props.searchImage) {
      this.setState({loader:true,})
      this.reset()
      this.fetch(this.props.searchImage)
    }
    if (prevState.page !== this.state.page) {
      // this.setState({loader:true,})
      this.fetch(this.props.searchImage)
    }
  }
  
  addPage = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  render() {
    return (
      <>
        <ul className={c.ul_item}>
          {this.state.images.map(image => (
          <ImageGalleryItem imgDeafault={image.webformatURL} key={image.id} imgTag={image.tags} imageModal={image.largeImageURL}/>
))}
          
        </ul>
        {
          this.state.total > this.state.images.length && (<div><Button onClick={this.addPage} /></div>)
        }  
        {
          this.state.loader && <Loader />
        }
      </>
    )
  }
}
