import React from 'react';
import styled from 'react-emotion';

const StyledHeader = styled('h1')`
    font-size: 52px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    margin-top: 0;
    margin-bottom: 20px;
`;

export default function Header({children}) {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
};