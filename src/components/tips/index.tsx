import React, { FC } from 'react';
import { Modal } from 'antd';

import Styles from './style.less';
import close from '@/.assets/images/control/close.svg';
import info from '@/.assets/images/control/info.png';
import error from '@/.assets/images/control/error.png';
import warn from '@/.assets/images/control/warn.png';
import success from '@/.assets/images/control/success.png';
import warn_hollow from '@/.assets/images/control/warn_hollow.png';

const Icon: { [k: string]: any } = { info, error, warn, success, warn_hollow };

interface Options {
  title?: string | React.ReactNode;
  className?: string;
  type?: 'info' | 'error' | 'warn' | 'success';
  width?: number;
  content: string | React.ReactNode;
  btnText?: string[];
  onOk?: () => void;
  onCancel?: () => void;
}

export function Popup({
  title,
  className,
  type,
  width,
  content,
  btnText,
  onOk,
  onCancel,
}: Options) {
  const modal: { value: { destroy: () => void } } = {
    value: {
      destroy() {},
    },
  };
  modal.value = Modal.confirm({
    className: `
      ${Styles.popup}
      ${Styles.popupOneBtn}
      ${className ?? ''}
      ${btnText ? '' : Styles.notBtn}
      ${btnText?.length == 1 ? Styles.ok : ''}
      ${btnText?.length == 2 && (!btnText[0] ? Styles.cancel : '')}
    `,
    title: (
      <div className={Styles.title}>
        <div>{title}</div>
        <img
          src={close}
          onClick={() => {
            modal.value.destroy();
          }}
        />
      </div>
    ),
    icon: null,
    width,
    content: (
      <div className={Styles.popup_content}>
        {type ? <img src={Icon[type]} alt="" /> : null}
        <div>{content}</div>
      </div>
    ),
    okText: btnText?.[0],
    cancelText: btnText?.[1],
    onOk,
    onCancel,
  });

  return modal;
}

export function Tips({
  title,
  className,
  type,
  width,
  content,
  btnText,
  onOk,
  onCancel,
}: Options) {
  const length = btnText?.length;
  const cancel = btnText?.[0];
  const ok = btnText?.[1];
  const modal: { value: { destroy: () => void } } = {
    value: {
      destroy() {},
    },
  };
  modal.value = Modal.confirm({
    className: `
      ${Styles.popup}
      ${Styles.popup_tips}
      ${className ?? ''}
      ${btnText ? '' : Styles.notBtn}
      ${length == 1 || (length == 2 && !cancel) ? Styles.ok : ''}
      ${length == 2 && (cancel && !ok ? Styles.cancel : '')}
    `,
    icon: null,
    width,
    content: (
      <div>
        <div className={Styles.tips_title}>
          {type ? (
            <img src={Icon[`${type}_hollow`] || Icon[type]} alt="" />
          ) : null}
          <span>{title}</span>
        </div>
        <div className={Styles.popup_tips_content}>{content}</div>
      </div>
    ),
    okText: ok ? ok : length == 1 ? cancel : '',
    cancelText: cancel,
    onOk,
    onCancel,
  });

  return modal;
}
