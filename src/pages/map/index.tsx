import React from 'react';
import { connect, ConnectRC, MapModelState, Dispatch, Loading } from 'umi';
import Maps from '@components/chartmap';

interface Props {
  map: MapModelState;
  dispatch: Dispatch;
  loading: Loading;
}

const Map: ConnectRC<Props> = ({ map, dispatch }) => {
  const {} = map;

  return (
    <div>
      <Maps width={1000} height={700} />
    </div>
  );
};

export default connect(
  ({ map, loading }: { map: MapModelState; loading: Loading }) => {
    return { map, loading };
  },
)(Map);
