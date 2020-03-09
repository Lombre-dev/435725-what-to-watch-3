import {SERVER_URL} from '../../consts';

function formatUser(source) {
  return Object.assign({}, source, {
    avatar: `${SERVER_URL}${source.avatar_url.substring(4)}`,
  });
}

export {formatUser};
