import React, {Component} from 'react';
import styled from 'react-emotion';

import ImageLinks from './ImageLinks';
import Media from './Media';

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
    }

    handleClick() {
        return this.props.showLightbox({
            image: this.props.image,
            link: this.props.link
        })
    }

    render() {
        const {image, title, link} = this.props;
        const src = image.replace('gifv', 'mp4');
        return (
            <Box onClick={this.handleClick}>
                <ImageLinks title={title} image={src} link={link} hide={true} handleClick={this.handleClick}/>
                <Media src={src}/>
            </Box>
        )
    }
}

export default Thumbnail;