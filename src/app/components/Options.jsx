import React from 'react';
import styled from '@emotion/styled';
import colors from '../theme';

const Button = styled('button')`
    padding: 12px;
    color: white;
    background-color: ${colors.primary};
    border: 0;
    border-left: 0px;
    margin-right: 4px;

    &::-moz-focus-inner {
    border: 0;
    }
`;

const Options = ({updateOptions}) => (
    <div>
        Sort by:
        <br />
        <Button onClick={() => updateOptions({sortBy: 'new'})}>New</Button>
        <Button onClick={() => updateOptions({sortBy: 'top'})}>Top</Button>
    </div>
);

export default Options;