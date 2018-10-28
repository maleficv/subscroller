import React, {Component} from 'react';
import styled from 'react-emotion';

import {parseImage, extractPreview} from '../services/parseImage';

import ImageLinks from './ImageLinks';
import Image from './Image';
import Video from './Video';

const Box = styled('div')`
  float: left;
  width: 33.33%;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  
  @media only screen and (max-width: 960px) {
    width: 50%;
  }
  
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  
  &:hover {
    & > div {
      opacity: 1;
    }
  }
`;


class Thumbnail extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }

    handleClick(e) {
        if (e.target.nodeName !== 'IMG') return;
        this.openLightbox();
    }

    openLightbox() {
        return this.props.showLightbox({
            image: parseImage(this.props.src),
            link: this.props.link
        })
    }

    render() {
        const {src, title, link, previews} = this.props;

        const image = parseImage(src);
        const preview = extractPreview(previews);

        return (
            <Box onClick={this.handleClick}>
                <ImageLinks title={title} image={image} link={link} hide={true} handleClick={this.openLightbox}/>
                {image.includes('.mp4') ? <Video src={preview}/> : <Image previews={previews}/>}
            </Box>
        )
    }
}

export default Thumbnail;