import React, {Component} from 'react';
import styled from 'react-emotion';
import {MdMenu, MdClose} from 'react-icons/md';
import colors from '../theme';

import NavLinks from './NavLinks';

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
  z-index: 3;
  color: white;
  font-size: 16px;

  transform: translateX(${props => props.active ? '0%' : '-100%'});
  transition: transform 0.2s ease;
`;

const Toggle = styled('button')`
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  transform: translateX(100%);
  padding: 12px;
  background-color: ${colors.primary};
  border: 0;
  border-left: 0px;
  font-size: 24px;
  
  &::-moz-focus-inner {
    border: 0;
  }
`;

const Divider = styled('span')`
  width: 100%;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
`;

const Config = styled('div')`
  color: white;
`;

const Option = styled('div')`
  display: flex;
  justify-content: space-between;
`;

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            nsfw: localStorage.getItem('nsfw') === 'true',
            grid: 3
        };

        this.toggleNavigation = this.toggleNavigation.bind(this);
        this.toggleNSFW = this.toggleNSFW.bind(this);
    }

    toggleNavigation() {
        this.setState(() => {
            return {
                active: !this.state.active
            }
        })
    }

    toggleNSFW(event) {
        event.persist();
        this.setState(() => {
            return {
                nsfw: event.target.checked
            }
        }, () => {
            localStorage.setItem('nsfw', event.target.checked.toString());
        })
    }

    render() {
        return (
            <Nav className="navigation" active={this.state.active}>
                <NavLinks toggleNavigation={this.toggleNavigation} nsfw={this.state.nsfw}/>
                <Config>
                    <Divider/>
                    <Option>Show NSFW content
                        <input type="checkbox"
                               checked={this.state.nsfw}
                               onChange={this.toggleNSFW}/>
                    </Option>
                </Config>

                <Toggle active={this.state.active} onClick={this.toggleNavigation}>
                    {this.state.active ? <MdClose/> : <MdMenu/>}
                </Toggle>
            </Nav>
        )
    }
}

export default Navigation;