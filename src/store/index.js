import Vue from "vue";
import Vuex from "vuex";
import { ProductsStore } from "./Products/ProductsStore";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        ProductsStore,
    },
});