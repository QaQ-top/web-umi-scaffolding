import React, { ReactElement } from 'react';
import Style from './style.less';
// import AuthImg from '~/.assets/images/notAuth.png';

interface IProps {
  isAllow: boolean;
  children: ReactElement;
  className?: string;
}

const NoAuth = ({ children, isAllow, className }: IProps) => {
  const hasNoAuth = (
    <div className={`${Style.loadingBox} ${className ?? ''}`}>
      {/* <img src={AuthImg} alt="" /> */}
      <p className={Style.smalltip}>抱歉，您当前没有访问权限，请联系管理员</p>
    </div>
  );

  return isAllow ? children : hasNoAuth;
};

export default NoAuth;
