import { Effect, ImmerReducer, Subscription, history } from 'umi';

export interface PopupModelState {
  data: any[];
}

export interface PopupModelType {
  namespace: 'popup';
  state: PopupModelState;
  effects: {
    [k: string]: Effect;
  };
  reducers: {
    [k: string]: ImmerReducer<PopupModelState>;
  };
  subscriptions: { setup: Subscription };
}

const PopupModel: PopupModelType = {
  namespace: 'popup',

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
      return history.listen(async ({ pathname }) => {});
    },
  },
};

export default PopupModel;
