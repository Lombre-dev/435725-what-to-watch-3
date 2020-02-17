import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {MOVIES} from './mocks/movies';

ReactDOM.render(<App currentMovie={MOVIES[1]} movies={MOVIES} />, document.getElementById(`root`));
