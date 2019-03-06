import React from 'react';
import styled from '@emotion/styled';

const StyledSubheader = styled('h2')`
    font-size: 28px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    margin-bottom: 10px;
`;

export default function Subheader({children}) {
    return (
        <StyledSubheader>
            {children}
        </StyledSubheader>
    )
};