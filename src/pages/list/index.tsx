import React from 'react';
import { connect, ConnectRC, ListModelState, Dispatch, Loading} from 'umi';
import { Tabs } from 'antd';
import Popup from '@components/popup';

interface Props {
  list: ListModelState;
  dispatch: Dispatch;
  loading: Loading;
};

const List: ConnectRC<Props> = ({ list, dispatch }) => {

  return <div>list</div>;
}

export default connect(({ list, loading }: { list: ListModelState, loading: Loading}) => {
  return { list, loading, }
})(List);