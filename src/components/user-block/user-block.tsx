import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppPages, AuthorizationStatus} from '../../types';
import {getUserAuthStatus, getUserAvatar, getUserName} from '../../redux/user/selectors';

type TProps = {
  status?: AuthorizationStatus;
  name?: string;
  avatar?: string;
};

function UserBlock(props: TProps) {

  const {status, avatar, name} = props;

  return (
    <div className="user-block">
      {
        status === AuthorizationStatus.AUTH &&
        <Link to={AppPages.MY_LIST}>
          <div className="user-block__avatar">
            <img src={avatar} alt={name} width="63" height="63" />
          </div>
        </Link>
      }
      {
        status === AuthorizationStatus.NO_AUTH &&
        <Link className="user-block__link" to={AppPages.LOGIN}>Sign in</Link>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    status: getUserAuthStatus(state),
    name: getUserName(state),
    avatar: getUserAvatar(state),
  };
}

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
