import { Effect, ImmerReducer, Subscription, history } from 'umi';

export interface ListModelState {
  active: "1" | "2";
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
    active: "1"
  },

  effects: {
    *getServerData({ }, { call, put }) {
    },
  },

  reducers: {
    setState(state, { payload }) {
      
    },
    setActive(state, { value }) {
      state.active = value;
    }
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