import React from 'react';
import { Avatar, Popover } from 'antd';
import Styles from './style.less';

interface Props {}

const UserInfo: React.FC<Props> = ({ children }) => {
  const {} = Avatar;

  return (
    <Popover
      placement="bottomRight"
      content={children}
      title={'UserName'}
      overlayClassName={Styles.popover}
    >
      <div className={Styles.user_info}>
        <Avatar
          style={{
            background: 'linear-gradient(135deg, #1890ff 0%, #add3f3 100%)',
            color: '#fff',
          }}
        >
          {'UserName'.slice(0, 1)}
        </Avatar>
        <div className={Styles.username}>UserName</div>
      </div>
    </Popover>
  );
};

export default UserInfo;
