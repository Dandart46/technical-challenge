import { listProductsService } from "../../services/Products/ListProductsService";

export const ProductsStore = {
    namespaced: true,
    state: {
        product_list: [],
        cart_list: [],
    },
    mutations: {
        SET_ALL_LIST_PRODUCT(state, payload) {
            state.product_list = payload.data;
        },
        SET_CART_PRODUCT(state, payload) {
            state.cart_list.push(payload);
        },
        REMOVE_CART_PRODUCT(state, payload) {
            state.cart_list.splice(payload, 1);
        }
    },
    actions: {
        fetchProducts: async function ({ commit }) {
            const response = await listProductsService("/grocery");
            commit("SET_ALL_LIST_PRODUCT", response);
        },
        addCartProduct: async function ({ commit }, product) {
            commit("SET_CART_PRODUCT", product);
        },
        removeCartProduct: async function ({ commit, state }, product_id) {
            const index = state.cart_list.map(item => item.id).indexOf(product_id);
            commit("REMOVE_CART_PRODUCT", index);
        },
    },
    getters: {
        getProductList(state) {
            return state.product_list;
        },
        getProductCart(state) {
            return state.cart_list;
        },
    },
};