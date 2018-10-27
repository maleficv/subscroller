import React from 'react';
import styled from 'react-emotion';

const StyledHeader = styled('h1')`
    font-size: 72px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    margin-top: 100px;
    margin-bottom: 100px;
`;

export default function Header({children}) {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
};