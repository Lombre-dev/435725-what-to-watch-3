import {TUser, TUserData} from '../../types';
import {ServerConfig} from '../../consts';

function formatUser(userData: TUserData): TUser {
  return {
    id: userData.id,
    email: userData.email,
    name: userData.name,
    avatar: `${ServerConfig.URL}${userData.avatar_url.substring(4)}`,
  };
}

export {formatUser};
