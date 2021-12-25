import Product from "../../services/Products/Product";

export const ProductsStore = {
    namespaced: true,
    state: {
        product_list: [],
        fav_list: [],
        cart_list: {
            list: [],
            total_price: 0
        },
    },
    mutations: {
        SET_ALL_LIST_PRODUCT(state, payload) {
            state.product_list = payload.data;
        },
        SET_FAV_LIST_PRODUCT(state, payload) {
            state.fav_list = payload.data;
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
        fetchProducts: async function ({ commit }, limit) {
            const response = await Product.listProductsService("/grocery?_limit=" + limit);
            commit("SET_ALL_LIST_PRODUCT", response);
        },
        fetchFavProducts: async function ({ commit }) {
            const response = await Product.listProductsService("/grocery?favorite=1");
            commit("SET_FAV_LIST_PRODUCT", response);
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
        changeFavProduct: async function (product, fav) {
            console.log(product);
            console.log(fav);
            await Product.changeProductFavService("/grocery/" + fav.product.id, fav.fav);
        },
    },
    getters: {
        getProductList(state) {
            return state.product_list;
        },
        getProductFav(state) {
            return state.fav_list;
        },
        getProductCart(state) {
            return state.cart_list.list;
        },
        getTotalPriceCart(state) {
            return state.cart_list.total_price;
        },
    },
};