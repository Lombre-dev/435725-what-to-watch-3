import React from 'react';
import {User} from '../types';

function UserBlock({user}) {
  return (
    <div className="user-block">
      {
        user && <div className="user-block__avatar">
          <img src={user.avatar} alt={user.name} width="63" height="63" />
        </div>
      }
      {
        !user && <a className="user-block__link" href="/sign-in">Sign in</a>
      }
    </div>
  );
}

UserBlock.propTypes = {
  user: User,
};

export default UserBlock;
