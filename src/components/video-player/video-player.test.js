import * as React from 'react';
import renderer from 'react-test-renderer';
import { PlayerState } from '../../consts';
import VideoPlayer from './video-player';

const ID = 0;
const STATE = PlayerState.INITED;
const POSTER = ``;
const SRC = ``;

describe(`<VideoPlayer />`, () => {

  it(`render should be match markup`, () => {

    jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(() => {});

    const result = renderer
      .create(<VideoPlayer
        id={ID}
        state={STATE}
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
