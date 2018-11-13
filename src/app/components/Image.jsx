import React from "react";
import styled from "react-emotion";
import {extractPreview, parseImage} from "../services/parseImage";

const StyledImage = styled('img')`
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.3s ease;

  &.is-loaded {
    opacity: 1;
  }
`;

export default function Image({previews, alt}) {
    const src = extractPreview(previews);
    return (
        <StyledImage width="300" height="200" src={src} alt={alt}/>
    )
}