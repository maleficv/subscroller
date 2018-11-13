import React from "react";
import styled from "react-emotion";

const StyledVideo = styled('video')`
  width: 100%;
  height: auto;
`;

export default function Video({src}) {
    return (
            <StyledVideo autoPlay loop>
                <source src={src} type='video/mp4'/>
            </StyledVideo>
    )
}