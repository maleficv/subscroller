import React, {Component} from 'react';
import styled from 'react-emotion';

import {parseImage, extractPreview} from '../helpers/parseImage';

import colors from '../theme';
import Box from './Box';
import ImageLinks from './ImageLinks';
import Image from './Image';
import Video from './Video';

const Cloak = styled('a')`
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



class Thumbnail extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }

    handleClick(e) {
        if (e.button === 0) {
            e.preventDefault();
            this.openLightbox();
        }
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
                <Cloak className="cloak" href={this.props.src} onClick={this.handleClick}/>
                <ImageLinks title={title} image={image} link={link} hide={true} handleClick={this.openLightbox}/>
                {image.includes('.mp4') ? <Video src={preview} alt={title}/> : <Image previews={previews} alt={title}/>}
            </Box>
        )
    }
}

export default Thumbnail;