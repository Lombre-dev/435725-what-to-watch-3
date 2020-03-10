import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAPI} from './api';
import App from './components/app/app';
import {Operations as CatalogOperations} from './redux/catalog/operations';
import {createStore} from './redux/createStore';
import {Operations as UserOperations} from './redux/user/operations';

function onUnauthorizedUserAction() {
  // redirect to authorization screen
  // document.location.href = `${AppPages.LOGIN}`;
}

const api = createAPI(onUnauthorizedUserAction);
const store = createStore(api);

Promise.all([
  store.dispatch(CatalogOperations.getCatalog()),
  store.dispatch(CatalogOperations.getPromoMovie()),
  store.dispatch(UserOperations.checkAuthorization()),
]).then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById(`root`));
});
