import { Effect, ImmerReducer, Subscription, history } from 'umi';

export interface LoginModelState {
  data: any[];

}
export interface LoginModelType {
  namespace: 'login';
  state: LoginModelState;
  effects: {
    [k: string]: Effect;
  };
  reducers: {
    [k: string]: ImmerReducer<LoginModelState>;
  };
  subscriptions: { setup: Subscription };
}

const LoginModel: LoginModelType = {
  namespace: 'login',

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
        if (pathname === '/login') {

        }
      });
    },
  },
};

export default LoginModel;

