import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectRC, ListModelState, Dispatch, Loading } from 'umi';
import reactive from '@/utils/reactive';
import { Tabs, Button } from 'antd';
import Popup, { PopupRef } from '@components/popup';
import { Tips } from '@components/tips';
import Tables from './components/tabels';

interface Props {
  list: ListModelState;
  dispatch: Dispatch;
  loading: Loading;
}

const List: ConnectRC<Props> = ({ list, dispatch }) => {
  const { active } = list;
  const store = reactive({
    cuont: 101,
    add() {
      this.cuont++;
    },
  });
  const onChange = (value: string) => {
    dispatch({
      type: 'list/setActive',
      value,
    });
  };

  return (
    <Tabs type="card" activeKey={active} onChange={onChange}>
      <Tabs.TabPane key="1" tab="标签一">
        <Tables />
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab="标签二">
        <Tables />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default connect(
  ({ list, loading }: { list: ListModelState; loading: Loading }) => {
    return { list, loading };
  },
)(List);
