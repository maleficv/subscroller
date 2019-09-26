import React from 'react';

const Options = ({updateOptions}) => (
    <div>
        Sort by:
        <br />
        <button onClick={() => updateOptions({sortBy: 'new'})}>New</button>
        <button onClick={() => updateOptions({sortBy: 'top'})}>Top</button>
    </div>
);

export default Options;