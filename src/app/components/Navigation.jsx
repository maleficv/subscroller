import React, {Component} from 'react';
import styled from '@emotion/styled';
import {MdMenu, MdClose, MdHome} from 'react-icons/md';
import {Link} from "@reach/router";
import colors from '../theme';

import NavLinks from './NavLinks';
import Options from './Options';

const Nav = styled('nav')`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  z-index: 4;
  color: white;
  font-size: 16px;

  transform: translateX(${props => props.active ? '0%' : '-100%'});
  transition: transform 0.2s ease;
`;

const Toggle = styled('button')`
  position: absolute;
  top: 120px;
  right: 0;
  display: flex;
  transform: translateX(100%);
  padding: 12px;
  color: white;
  background-color: ${colors.primary};
  border: 0;
  border-left: 0px;
  font-size: 24px;
  
  &::-moz-focus-inner {
    border: 0;
  }
`;

const HomeButton = styled(Link)`
    position: absolute;
    top: 60px;
    right: 0;
    display: flex;
    transform: translateX(100%);
    padding: 12px;
    color: white;
    background-color: ${colors.primary};
    border: 0;
    border-left: 0px;
    font-size: 24px;

    &::-moz-focus-inner {
    border: 0;
    }
`;

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            grid: 3
        };

        this.toggleNavigation = this.toggleNavigation.bind(this);
        this.updateOptions = this.updateOptions.bind(this);
    }

    toggleNavigation(e) {
        if (e.target.classList.contains('navlink-delete')) return;

        this.setState(() => {
            return {
                active: !this.state.active
            }
        })
    }

    updateOptions(settings) {
        this.props.updateOptions(settings);
    }

    render() {
        return (
            <Nav className="navigation" active={this.state.active}>
                <NavLinks toggleNavigation={this.toggleNavigation}/>
                <HomeButton to="/">
                    <MdHome/>
                </HomeButton>
                <Toggle active={this.state.active} onClick={this.toggleNavigation} name="toggle">
                    {this.state.active ? <MdClose/> : <MdMenu/>}
                </Toggle>
                <Options updateOptions={this.updateOptions} />
            </Nav>
        )
    }
}

export default Navigation;