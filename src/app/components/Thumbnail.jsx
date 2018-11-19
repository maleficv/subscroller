import React, {Component} from 'react';
import styled from 'react-emotion';

import {parseImage, extractPreview} from '../helpers/parseImage';

import colors from '../theme';
import ImageLinks from './ImageLinks';
import Image from './Image';
import Video from './Video';

const Cloak = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: ${colors.primary};
  opacity: 0;
  transition: opacity 0.1s ease;
`;

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
    .image-links {
      opacity: 1;
    }
    
    .cloak {
      opacity: 0.3;
    }
  }
`;

class Thumbnail extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }

    handleClick() {
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
            <Box>
                <Cloak className="cloak" onClick={this.handleClick}/>
                <ImageLinks title={title} image={image} link={link} hide={true} handleClick={this.openLightbox}/>
                {image.includes('.mp4') ? <Video src={preview} alt={title}/> : <Image previews={previews} alt={title}/>}
            </Box>
        )
    }
}

export default Thumbnail;