import { Effect, ImmerReducer, Subscription, history } from 'umi';

export interface HomeModelState {
  data: any[];
}

export interface HomeModelType {
  namespace: 'home';
  state: HomeModelState;
  effects: {
    [k: string]: Effect;
  };
  reducers: {
    [k: string]: ImmerReducer<HomeModelState>;
  };
  subscriptions: { setup: Subscription };
}

const HomeModel: HomeModelType = {
  namespace: 'home',

  state: {
    data: []
  },

  effects: {
    *getServerData({ }, { call, put }) {
    },
  },

  reducers: {
    setState(state, { payload }) {
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(async ({ pathname }) => {
        if (pathname === '/home') {
        }
      });
    },
  },
};

export default HomeModel;