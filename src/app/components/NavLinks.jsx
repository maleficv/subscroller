import React, {Component} from "react";
import styled from "react-emotion"
import {MdAdd, MdClear} from 'react-icons/md';
import {Link} from "@reach/router";
import colors from "../theme";

import addSubToStorage from '../services/addSubToStorage';
import getSubsToStorage from '../services/getSubsFromStorage';
import deleteSubFromStorage from '../services/deleteSubFromStorage';

const StyledLinks = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Navlink = styled(Link)`
  display: flex;
  justify-content: space-between;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding: 14px 12px 14px 12px;
  margin-bottom: 12px;

  &[aria-current="page"],
  &:hover {
    background-color: ${colors.primary};

    .navlink-delete {
      opacity: 1;
    }
  }

  outline: none;
  &::-moz-focus-inner {
    border: 0;
  }
`;

const CustomLink = styled('form')`
  display: flex;
  padding: 5px 12px;
  background-color: #304FFE;
`;

const CustomSubLink = styled('input')`
  border: 3px solid ${colors.primary};
  background-color: ${colors.primary};
  color: white;
  padding: 6px;

  &:focus {
    background-color: black;
  }
`;

const CustomSubButton = styled('button')`
  display: flex;
  align-items: center;
  align-items: center;
  padding: 4px 12px;
  background-color: ${colors.primary};
  color: white;
  border: 0;
  font-size: 24px;
`;

const DeleteCustomSubreddit = styled('button')`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  color: white;
  background-color: transparent;
  border: 0;
  opacity: 0;
  font-size: 24px;
`;

class NavLinks extends Component {
    constructor(props) {
        super(props);

        const subreddits = getSubsToStorage();

        this.state = {
            subreddits
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const input = e.target.getElementsByTagName('input')[0];
        const {value} = input;

        if (value === '') return;

        addSubToStorage(value);
        this.setState({subreddits: getSubsToStorage()});
        input.value = '';
    }

    onDelete(e, subreddit) {
        e.preventDefault();
        deleteSubFromStorage(subreddit);

        this.setState({subreddits: getSubsToStorage()});
    }

    render() {
        const {toggleNavigation, nsfw} = this.props;
        return (
            <StyledLinks>
                <Navlink to="/" onClick={toggleNavigation}>Home</Navlink>
                <Navlink to="/subreddit/wallpaper" onClick={toggleNavigation}>Wallpaper</Navlink>
                <Navlink to="/subreddit/wallpapers" onClick={toggleNavigation}>Wallpapers</Navlink>
                <Navlink to="/subreddit/unixporn" onClick={toggleNavigation}>Unixporn</Navlink>
                <Navlink to="/subreddit/gif" onClick={toggleNavigation}>Gif</Navlink>
                {nsfw && <Navlink to="/subreddit/all" onClick={toggleNavigation}>All (NSFW)</Navlink>}
                {nsfw && <Navlink to="/subreddit/nsfw" onClick={toggleNavigation}>NSFW</Navlink>}
                {this.state.subreddits.map(subreddit =>
                    <Navlink to={"/subreddit/" + subreddit}
                             onClick={toggleNavigation}>{subreddit}
                        <DeleteCustomSubreddit className="navlink-delete" onClick={(e) => this.onDelete(e, subreddit)}>
                            <MdClear/>
                        </DeleteCustomSubreddit>
                    </Navlink>)}
                <CustomLink onSubmit={this.onSubmit}>
                    <CustomSubLink placeholder="Add Custom Sub"/>
                    <CustomSubButton type="submit"><MdAdd/></CustomSubButton>
                </CustomLink>
            </StyledLinks>
        )
    }
}

export default NavLinks;