import Product from "../../services/Products/Product";

export const ProductsStore = {
    namespaced: true,
    state: {
        product_list: [],
        cart_list: {
            list: [],
            total_price: 0
        },
    },
    mutations: {
        SET_ALL_LIST_PRODUCT(state, payload) {
            state.product_list = payload.data;
        },
        SET_CART_PRODUCT(state, payload) {
            state.cart_list.list.push(payload);
        },
        SET_CART_PRODUCT_PRICE(state, payload) {
            state.cart_list.total_price += payload;
        },
        REMOVE_CART_PRODUCT_PRICE(state, payload) {
            state.cart_list.total_price -= payload;
        },
        REMOVE_CART_PRODUCT(state, payload) {
            state.cart_list.list.splice(payload, 1);
        }
    },
    actions: {
        fetchProducts: async function ({ commit }) {
            const response = await Product.listProductsService("/grocery");
            commit("SET_ALL_LIST_PRODUCT", response);
        },
        addCartProduct: async function ({ commit }, product) {
            await Product.listProductsService("/grocery/" + product.id, product.stock--);
            commit("SET_CART_PRODUCT", product);
            commit("SET_CART_PRODUCT_PRICE", product.price);
        },
        removeCartProduct: async function ({ commit, state }, product) {
            await Product.listProductsService("/grocery/" + product.id, product.stock++);
            const index = state.cart_list.list.map(item => item.id).indexOf(product.id);
            commit("REMOVE_CART_PRODUCT", index);
            commit("REMOVE_CART_PRODUCT_PRICE", product.price);
        },
    },
    getters: {
        getProductList(state) {
            return state.product_list;
        },
        getProductCart(state) {
            return state.cart_list.list;
        },
        getTotalPriceCart(state) {
            return state.cart_list.total_price;
        },
    },
};