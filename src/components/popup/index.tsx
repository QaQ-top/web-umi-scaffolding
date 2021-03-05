import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { Modal, Button } from 'antd';
import reactive from '@/utils/reactive';
import Store from './model';

type Open = (params: { item: any; callback?: () => void }) => void;

type Close = () => void;

export interface PopupRef {
  open: Open;
  close: Close;
}

const Popup = forwardRef<PopupRef, any>((props, ref) => {
  const store = reactive(Store());

  const { visible, loading, submit } = store;
  useEffect(() => {
    return () => {};
  });

  // 打开弹窗
  const open: Open = ({ item, callback }) => {
    store.visible = true;
  };
  // 关闭弹窗
  const close = () => {
    store.visible = false;
  };
  useImperativeHandle(ref, () => ({
    open,
    close,
  }));
  return (
    <Modal
      title="title"
      visible={visible}
      width={584}
      maskClosable={false}
      destroyOnClose
      onCancel={close}
      footer={[
        <Button key="2" onClick={close}>
          取消
        </Button>,
        <Button key="1" type="primary" onClick={submit} loading={loading}>
          确认
        </Button>,
      ]}
    ></Modal>
  );
});
export default Popup;
