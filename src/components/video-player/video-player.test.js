import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const ID = 0;
const IS_ACTIVE = false;
const IS_PLAYING = false;
const POSTER = ``;
const SRC = ``;

describe(`<VideoPlayer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<VideoPlayer
        id={ID}
        isActive={IS_ACTIVE}
        isPlaying={IS_PLAYING}
        poster={POSTER}
        src={SRC}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
