import React from "react";
import styled from '@emotion/styled';
import {extractPreview} from "../helpers/parseImage";

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