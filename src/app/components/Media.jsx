import React from "react";
import styled from "react-emotion";

const Image = styled('img')`
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.3s ease;

  &.is-loaded {
    opacity: 1;
  }
`;

const Video = styled('video')`
  width: 100%;
  height: auto;
`;

export default function Media({src}) {
    return (
        src.includes('.mp4')
            ? <Video autoPlay loop>
                <source src={src} type='video/mp4'/>
            </Video>
            : <Image width="300" height="200" src={src}/>
    )
}