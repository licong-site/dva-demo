const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default {
  namespace: 'products', // 全局 state 上的 key
  state: [], // 初始值
  reducers: { // 接收action，同步更新state
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id === id);
    }
  },
  effects: {
    *deleteAfter1Second({ payload }, { call, put }) {
      yield call(delay, 5000);
      yield put({ type: 'delete', payload })
    }
  }
};
