import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import fetch from 'isomorphic-fetch';

global.fetch = fetch;

Enzyme.configure({adapter: new Adapter()});