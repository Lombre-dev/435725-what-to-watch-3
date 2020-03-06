import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAPI} from './api';
import App from './components/app/app';
import {Operations as CatalogOperations} from './redux/catalog/operations';
import {createStore} from './redux/createStore';

function onUnauthorizedUserAction() {
  // redirect to authorization screen
}

const api = createAPI(onUnauthorizedUserAction);
const store = createStore(api);

// store.dispatch(CatalogOperations.getCatalog());
store.dispatch(CatalogOperations.getPromoMovie());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
