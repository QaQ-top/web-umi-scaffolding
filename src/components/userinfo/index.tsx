import React from 'react';
import { Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAccess } from 'umi';
import Styles from './style.less';

interface Props {}

const UserInfo: React.FC<Props> = ({ children }) => {
  const { canReadFoo } = useAccess();

  const AvatarData = (
    <Avatar
      style={{
        background: !canReadFoo
          ? 'linear-gradient(135deg, #1890ff 0%, #add3f3 100%)'
          : '',
        color: '#fff',
      }}
    >
      {!canReadFoo ? 'UserName'.slice(0, 1) : <UserOutlined />}
    </Avatar>
  );

  return (
    <Popover
      placement="bottomRight"
      content={children}
      trigger="click"
      title={
        <div className={Styles.title}>
          {AvatarData}
          <div className={Styles.username}>UserName</div>
        </div>
      }
      overlayClassName={Styles.popover}
    >
      <div className={Styles.user_info}>
        {AvatarData}
        {/* <div className={Styles.username}>UserName</div> */}
      </div>
    </Popover>
  );
};

export default UserInfo;
