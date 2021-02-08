import React, { useImperativeHandle, forwardRef, useEffect } from 'react';
import { connect, ConnectRC, PopupModelState, Dispatch, Loading } from 'umi';

interface Props {
  popup: PopupModelState;
  dispatch: Dispatch;
  loading: Loading;
};


type Open = (params: {
  item: any;
  callback?: () => void;
}) => void;

type Close = () => void;

export interface PopupRef {
  open: Open;
  close: Close;
}

const Popup = forwardRef<PopupRef, Props>(({ popup, dispatch }, ref) => {
  const {  } = popup;
  dispatch({
    type: 'popup/setUser',
    
  })
  useEffect(() => {
    return () => {
    }
  });
  // 打开弹窗
  const open: Open = ({ item,  callback}) => {
  };
  // 关闭弹窗
  const close = () => {
  }
  useImperativeHandle(ref, () => ({
    open,
    close,
  }))
  return <div></div>
})
export default connect(({ popup, loading }: { popup: PopupModelState, loading: Loading}) => {
  return { popup, loading, }
}, null, null, {forwardRef: true})(Popup);