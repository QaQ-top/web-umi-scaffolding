import React from 'react';
import { Tooltip, Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface Props {
  isPermissions: boolean;
  buttonAttr: ButtonProps;
  disabled?: boolean;
  title?: string | React.ReactNode;
}

const NotAuthTips: React.FC<Props> = ({
  isPermissions,
  buttonAttr,
  disabled,
  title,
  children,
}) => {
  return (
    <Tooltip title={isPermissions ? title || undefined : '暂无操作权限'}>
      <Button {...buttonAttr} {...{ disabled: !isPermissions || disabled }}>
        {children}
      </Button>
    </Tooltip>
  );
};
export default NotAuthTips;
