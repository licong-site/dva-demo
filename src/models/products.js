export default {
    namespace: 'products', // 全局 state 上的 key
    state: [], // 初始值
    reducers: { // 接收action，同步更新state
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id === id);
        }
    },
};
