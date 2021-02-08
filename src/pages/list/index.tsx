import React from 'react';
import { connect, ConnectRC, ListModelState, Dispatch, Loading} from 'umi';

interface Props {
  list: ListModelState;
  dispatch: Dispatch;
  loading: Loading;
};

const List: ConnectRC<Props> = ({ list, dispatch }) => {
  const { } = list;

  return (
    <div>
      List
    </div>
  );
}

export default connect(({ list, loading }: { list: ListModelState, loading: Loading}) => {
  return { list, loading, }
})(List);