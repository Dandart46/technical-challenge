import { listProductsService } from "../../services/Products/ListProductsService";

export const ProductsStore = {
    namespaced: true,
    state: {
        productList: [],
    },
    mutations: {
        setProductList(state, payload) {
            state.productList = payload.data;
        },
    },
    actions: {
        getProductList: async function ({ commit }) {
            const response = await listProductsService("/grocery");
            commit("setProductList", response);
        },
    },
    getters: {
        productListGetter(state) {
            return state.productList;
        },
    },
};