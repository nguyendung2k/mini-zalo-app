import { createStore } from 'zmp-core/lite'

import productsData from './services/products.json'
import categoriesData from './services/category.json'
const store = createStore({
    state: {
        products: productsData,
        categories: categoriesData,
        loadingProducts: true,
        loadingOrders: true,
        showModalOrder: false,
        orders: [],
        cart: [],
        addresses: [],
        note: '',
    },
    getters: {
        products({ state }) {
            return state.products
        },
        categories({ state }) {
            return state.categories
        },
        showModalOrder({ state }) {
            return state.showModalOrder
        },
    },
    actions: {
        getProductByCategory({ state }, { payload }) {
            // const idCategory = payload.category
            // console.log('payload', payload)
            state.products = payload
        },
        showModalOrder({ state }, { payload }) {
            state.showModalOrder = payload
        },
        hideModalOrder({ state }, { payload }) {
            state.showModalOrder = payload
        },
    },
})

export default store
