import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createAPI } from './api';
import App from './components/app/app';
import { createStore } from './redux/createStore';

const store = createStore(createAPI());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById(`root`));
