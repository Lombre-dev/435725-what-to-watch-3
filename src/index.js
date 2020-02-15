import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CURRENT_MOVIE} from './mocks/main-data';
import {MOVIES} from './mocks/movies';

ReactDOM.render(<App currentMovie={CURRENT_MOVIE} movies={MOVIES} />, document.getElementById(`root`));
