import { Effect, ImmerReducer, Subscription, history } from 'umi';

export interface TablesModelState {
  query: {
    username: string;
    status: number | string;
  };

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
}

const TablesModel: TablesModelType = {
  namespace: 'tables',
  state: {
    query: {
      username: '',
      status: '',
    },
    pagination: {
      current: 1,
      total: 100,
      pageSize: 10,
    },
    dataList: [],
  },

  effects: {
    *getDataList({}, { call, put, select }) {
      const { query, pagination }: TablesModelState = yield select(
        (state: any) => state.tables,
      );
      try {
        console.log(query, pagination);
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
    setQuery(state, { query }) {
      state.query = {
        ...state.query,
        ...query,
      };
    },
  },
};

export default TablesModel;
