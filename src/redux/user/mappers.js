import {SERVER_URL} from '../../consts';

function formatUser(source) {

  // console.log(source.avatar_url);

  return Object.assign({}, source, {
    avatar: `${SERVER_URL}${source.avatar_url.substring(4)}`,
  });
}

export {formatUser};
