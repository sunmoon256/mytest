import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    _defaultView: '123456', //系统默认地图view
};

const getters = {
    _getDefauleView() {
        return state._defaultView;
    },
};

const mutations = {
    _setDefauleView(state, value) {
        state._defaultView = value;
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    // ES6解构赋值，此处的属性名与属性值是一样的，可以只写属性名（属性值）
});

export default store;
