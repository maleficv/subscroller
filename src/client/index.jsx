import React from 'react';
import ReactDOM from 'react-dom';

import Container from './Container';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Container/>, document.querySelector('.js-app'));