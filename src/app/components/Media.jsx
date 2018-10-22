import React from "react";
import styled from "react-emotion";

const Image = styled('img')`
  width: 100%;
  height: auto;
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
            : <Image src={src}/>
    )
}