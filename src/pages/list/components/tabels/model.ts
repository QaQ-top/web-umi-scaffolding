import { Effect, ImmerReducer, Subscription, history } from 'umi';

export interface TablesModelState {
  pagination: {
    current: number;
    total: number;
    pageSize: number;
  };
  dataList: any[];
}

export interface TablesModelType {
  namespace: 'tables';
  state: TablesModelState;
  effects: {
    [k: string]: Effect;
  };
  reducers: {
    [k: string]: ImmerReducer<TablesModelState>;
  };
  subscriptions: { setup: Subscription };
}

const TablesModel: TablesModelType = {
  namespace: 'tables',

  state: {
    pagination: {
      current: 1,
      total: 100,
      pageSize: 10,
    },
    dataList: [],
  },

  effects: {
    *getDataList({}, { call, put }) {
      try {
        const res = yield call(() => Promise.resolve());
        yield put({
          type: 'setDataList',
          value: res?.body?.list || [{}],
        });
      } catch (e) {
      } finally {
      }
    },
  },

  reducers: {
    setState(state, { payload }) {},
    setDataList(state, { value }) {
      state.dataList = value;
    },
    setPagination(state, { pagination }) {
      state.pagination = {
        ...state.pagination,
        ...pagination,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(async ({ pathname }) => {});
    },
  },
};

export default TablesModel;
