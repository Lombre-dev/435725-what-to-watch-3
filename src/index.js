import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {CURRENT_MOVIE, MOVIE_LIST} from './mocks/main-data.js';

ReactDOM.render(<App currentMovie={CURRENT_MOVIE} movieList={MOVIE_LIST} />, document.getElementById(`root`));
