import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import VideoPlayer from './video-player';

Enzyme.configure({
  adapter: new Adapter(),
});

const ID = 0;
const POSTER = require(`path`).resolve(`img/the-grand-budapest-hotel-poster.jpg`);
const SRC = require(`path`).resolve(`samples/sintel_trailer-480p.mp4`);

describe(`<VideoPlayer />`, () => {

  it(`component should be active`, () => {

    const isActive = false;
    const handleEvent = jest.fn();
    const handlePlay = jest.fn();

    jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(handlePlay);

    const result = mount(<VideoPlayer
      id={ID}
      isActive={isActive}
      poster={POSTER}
      onPlay={handleEvent}
      onEnd={handleEvent}
      src={SRC}
    />);

    result
      .setProps({
        isActive: true,
      });

    expect(handlePlay).toHaveBeenCalledTimes(1);
  });

  it(`component should be inactive`, () => {

    const isActive = true;
    const handleEvent = jest.fn();
    const handleLoad = jest.fn();

    jest.spyOn(HTMLMediaElement.prototype, `load`).mockImplementation(handleLoad);

    const result = mount(<VideoPlayer
      id={ID}
      isActive={isActive}
      poster={POSTER}
      onPlay={handleEvent}
      onEnd={handleEvent}
      src={SRC}
    />);

    result
      .setProps({
        isActive: false,
      });

    expect(handleLoad).toHaveBeenCalledTimes(1);
  });
});
