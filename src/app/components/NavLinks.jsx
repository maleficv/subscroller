import React from "react";
import styled from "react-emotion";
import {Link} from "@reach/router";
import colors from "../theme";

const StyledLinks = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Navlink = styled(Link)`
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding: 14px 140px 14px 12px;
  margin-bottom: 12px;
  
  &[aria-current="page"],
  &:hover {
    background-color: ${colors.primary}
  }
  
  outline: none;
  &::-moz-focus-inner {
    border: 0;
  }
`;

export default function NavLinks({toggleNavigation, nsfw}) {
    return (
        <StyledLinks>
            <Navlink to="/" onClick={toggleNavigation}>Home</Navlink>
            <Navlink to="/subreddit/wallpaper" onClick={toggleNavigation}>Wallpaper</Navlink>
            <Navlink to="/subreddit/wallpapers" onClick={toggleNavigation}>Wallpapers</Navlink>
            <Navlink to="/subreddit/unixporn" onClick={toggleNavigation}>Unixporn</Navlink>
            <Navlink to="/subreddit/gif" onClick={toggleNavigation}>Gif</Navlink>
            {nsfw && <Navlink to="/subreddit/all" onClick={toggleNavigation}>All (NSFW)</Navlink>}
            {nsfw && <Navlink to="/subreddit/nsfw" onClick={toggleNavigation}>NSFW</Navlink>}
            {nsfw && <Navlink to="/subreddit/holdthemoan" onClick={toggleNavigation}>Hold The Moan</Navlink>}
        </StyledLinks>
    )
}