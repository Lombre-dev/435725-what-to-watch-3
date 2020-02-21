import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import VideoPlayer from './video-player';

Enzyme.configure({
  adapter: new Adapter(),
});

const POSTER = `img/the-grand-budapest-hotel-poster.jpg`;
const SRC = `samples/sintel_trailer-480p.mp4`;

describe(`<VideoPlayer />`, () => {

  it(`component should be active`, () => {

    const isActive = true;
    const object = {
      isActive: true,
    };

    // Тут подобная проблема с проигрыванием видио
    // что-то нагуглил https://stackoverflow.com/questions/51829319/how-to-mock-video-pause-function-using-jest
    const stub = jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(() => {});

    const result = mount(<VideoPlayer
      isActive={isActive}
      poster={POSTER}
      src={SRC}
    />);

    result.instance().componentDidUpdate();

    expect(result.state()).toMatchObject(object);

    stub.mockRestore();
  });

  it(`component should be inactive`, () => {

    const isActive = false;
    const object = {
      isActive: false,
    };

    const stub = jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(() => {});

    const result = mount(<VideoPlayer
      isActive={isActive}
      poster={POSTER}
      src={SRC}
    />);

    result.instance().componentDidUpdate();

    expect(result.state()).toMatchObject(object);

    stub.mockRestore();
  });
});
