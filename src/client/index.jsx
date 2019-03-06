import React from 'react';
import ReactDOM from 'react-dom';

import isProduction from '../helpers/isProduction';
import Container from './Container';

if (module.hot && isProduction()) {
    module.hot.accept();
}

ReactDOM.render(<Container/>, document.querySelector('.js-app'));