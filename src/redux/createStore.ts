import {applyMiddleware, compose, createStore as reduxCreateStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export function createStore(api) {
  return reduxCreateStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );
}
