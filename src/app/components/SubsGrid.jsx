import {Link} from "@reach/router";
import React, {Component} from "react";
import styled from '@emotion/styled';
import {handleLoadingImages, revealImages} from "../helpers/handleLoadingImages";

import colors from '../theme';

const Grid = styled('div')`
  display: flow-root;
  margin: 0 10%;
`;

const Box = styled(Link)`
  float: left;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  padding-bottom: 18%;
  width: 33%;
  overflow: hidden;
  
  &:hover {
    .cloak {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 50%;
    padding-bottom: 36%;
  }
  
  @media only screen and (max-width: 720px) {
    width: 100%;
    padding-bottom: 72%;

    .cloak {
      opacity: 0;
    }
  }
`;

const Image = styled('img')`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 14px;
  top: 0;
  left: 0;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;

  &.is-loaded {
    opacity: 1;
  }
`;

const Cloak = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const Caption = styled('div')`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 3;
  transform: translateY(-50%);
  color: white;
  background-color: ${colors.primary};
  padding: 8px 0;
  margin: 0 30px;
  font-size: 22px;
  text-transform: capitalize;
`;

class SubsGrid extends Component {
    constructor(props) {
        super(props);

        this.container = null;
    }

    componentDidMount() {
        handleLoadingImages(this.container)
            .then(revealImages)
    }

    render() {
        const {posts} = this.props;

        return (
            <Grid ref={el => this.container = el}>
                {posts.map(post => {
                        const {image, sub} = post;
                        return (
                            <Box to={`/subreddit/${sub}`}
                                 key={sub}>
                                <Caption>{sub}</Caption>
                                <Cloak className="cloak"/>
                                <Image
                                    src={image}
                                    alt={sub}/>
                            </Box>
                        )
                    }
                )}
            </Grid>
        )
    }
}

export default SubsGrid;