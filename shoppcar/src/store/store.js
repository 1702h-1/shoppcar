import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        list: [{
            id: 1,
            shopItem: '电脑',
            check: true,
        }]
    },
    mutations: {
        addShop(state, payload) {
            if (payload !== '') {
                state.list.push({ id: state.list.length + 2, shopItem: payload, check: true });
            }
        },
        delShop(state) {
            state.list = state.list.filter(item => item.check === false);
        },
        changeCheck(state, payload) {
            state.list.map(item => item.id === payload ? item.check = !item.check : item);
        },
        clearList(state) {
            state.list = [];
        }
    }
})

export default store;