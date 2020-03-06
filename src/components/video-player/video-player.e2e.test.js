import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {PlayerState} from '../../consts';
import VideoPlayer from './video-player';

Enzyme.configure({
  adapter: new Adapter(),
});

const ID = 0;
const POSTER = `/img/the-grand-budapest-hotel-poster.jpg`;
const SRC = `/samples/sintel_trailer-480p.mp4`;

describe(`<VideoPlayer />`, () => {

  it(`component should be switched to active mode`, () => {

    const state = PlayerState.INITED;
    const handlePlay = jest.fn();

    jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(handlePlay);

    const result = mount(<VideoPlayer
      id={ID}
      state={state}
      poster={POSTER}
      src={SRC}
    />);

    result
      .setProps({
        state: PlayerState.PLAYING,
      });

    expect(handlePlay).toHaveBeenCalledTimes(1);
  });

  it(`component should be switched to inactive mode`, () => {

    const state = PlayerState.INITED;
    const handleLoad = jest.fn();

    jest.spyOn(HTMLMediaElement.prototype, `load`).mockImplementation(handleLoad);

    const result = mount(<VideoPlayer
      id={ID}
      state={state}
      poster={POSTER}
      src={SRC}
    />);

    result
      .setProps({
        state: PlayerState.ENDED,
      });

    expect(handleLoad).toHaveBeenCalledTimes(1);
  });
});
