import {TUser, TUserData} from '../../components/types';
import {ServerConfig} from '../../consts';

function formatUser(source: TUserData): TUser {
  return {
    id: source.id,
    email: source.email,
    name: source.name,
    avatar: `${ServerConfig.URL}${source.avatar_url.substring(4)}`,
  };
}

export {formatUser};
