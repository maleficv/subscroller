import React from "react";
import styled from '@emotion/styled';

const StyledVideo = styled('video')`
  width: 100%;
  height: auto;
`;

export default function Video({src, alt}) {
    return (
            <StyledVideo autoPlay loop>
                <source src={src} type='video/mp4' alt={alt}/>
            </StyledVideo>
    )
}