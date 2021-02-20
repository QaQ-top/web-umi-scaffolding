import { Effect, ImmerReducer, Subscription, history } from 'umi';

export interface ListModelState {
}

export interface ListModelType {
  namespace: 'list';
  state: ListModelState;
  effects: {
    [k: string]: Effect;
  };
  reducers: {
    [k: string]: ImmerReducer<ListModelState>;
  };
  subscriptions: { setup: Subscription };
}

const ListModel: ListModelType = {
  namespace: 'list',

  state: {
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
        if (pathname === '/list') {
        }
      });
    },
  },
};

export default ListModel;