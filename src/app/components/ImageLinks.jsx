import {MdFileDownload, MdLink, MdZoomIn} from "react-icons/md";
import React from "react";
import styled from '@emotion/styled';
import colors from "../theme";

const StyledLinks = styled('div')`
  position: absolute;
  z-index: 5;
  bottom: 15px;
  right: 15px;
  font-size: 28px;
  background-color: ${colors.primary};
  border-radius: 16px;
  padding: 4px 10px;
  display: flex;
  opacity: ${props => props.hide ? 0 : 1};
  transition: opacity 0.1s ease;
`;

const Link = styled('a')`
  color: white;
  text-decoration: none;
  display: flex;
`;

const Zoom = styled('button')`
  color: white;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  font-size: inherit;
  padding: 0;
`;

export default function ImageLinks({title, image, link, hide, handleClick}) {
    return (
        <StyledLinks className="image-links" hide={hide}>
            {title && <Zoom title={title} onClick={handleClick} name="zoom">
                <MdZoomIn/>
            </Zoom>}
            <Link href={"https://reddit.com" + link} target="_blank" title={title}>
                <MdLink/>
            </Link>
            <Link href={image} target="_blank" title="Download image">
                <MdFileDownload/>
            </Link>
        </StyledLinks>
    )
}