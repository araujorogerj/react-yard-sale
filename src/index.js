import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import login from './components/login';

reactDom.render(<App />, document.getElementById('app'));
reactDom.render(<login />, document.getElementById('login'));
