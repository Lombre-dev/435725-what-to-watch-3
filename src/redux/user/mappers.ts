import {ServerConfig} from '../../consts';

function formatUser(source) {
  return Object.assign({}, source, {
    avatar: `${ServerConfig.URL}${source.avatar_url.substring(4)}`,
  });
}

export {formatUser};
