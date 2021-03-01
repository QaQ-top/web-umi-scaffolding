import { Effect, ImmerReducer, Subscription, history } from 'umi';

export interface MapModelState {
  data: any[];
}

export interface MapModelType {
  namespace: 'map';
  state: MapModelState;
  effects: {
    [k: string]: Effect;
  };
  reducers: {
    [k: string]: ImmerReducer<MapModelState>;
  };
  subscriptions: { setup: Subscription };
}

const MapModel: MapModelType = {
  namespace: 'map',

  state: {
    data: [],
  },

  effects: {
    *getServerData({}, { call, put }) {},
  },

  reducers: {
    setState(state, { payload }) {},
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(async ({ pathname }) => {
        if (pathname === '/map') {
        }
      });
    },
  },
};

export default MapModel;
