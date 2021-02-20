import React from 'react';
import { connect, ConnectRC, HomeModelState, Dispatch, Loading} from 'umi';
import Styles from './style.less';

interface Props {
  home: HomeModelState;
  dispatch: Dispatch;
  loading: Loading;
};

const Home: ConnectRC<Props> = ({ home, dispatch }) => {
  const { } = home;

  return (
    <div>
      首页
    </div>
  );
}

export default connect(({ home, loading }: { home: HomeModelState, loading: Loading}) => {
  return { home, loading, }
})(Home);