import {defineStore} from 'pinia'
import {cultureAPI} from '@/api'


const useCultureStore = defineStore('culture', {
    state: () => ({
        products: [],
        materials: [],
        colors: [],
        categories: [],

        product: {},
        cart: {},

        params: {}
    }),

    actions: {
        async createCart() {
            const response = await cultureAPI.createCart()
            this.cart = response.data
            return response
        },

        async getCart(uuid) {
            const response = await cultureAPI.getCart(uuid)
            this.cart = response.data
            return response
        },

        async addProductToCart(uuid, id) {
            const response = await cultureAPI.addProductToCart(uuid, id)
            this.cart = response.data
            return response
        },

        async removeProductFromCart(uuid, id) {
            const response = await cultureAPI.removeProductFromCart(uuid, id)
            this.cart = response.data
            return response
        },

        async getCategories(params) {
            const response = await cultureAPI.getCategories(params)
            this.categories = response.data
            return response
        },

        async getColors() {
            const response = await cultureAPI.getColors()
            this.colors = response.data
            return response
        },

        async getMaterials() {
            const response = await cultureAPI.getMaterials()
            this.materials = response.data
            return response
        },

        async getProducts(params) {
            const response = await cultureAPI.getProducts(params)
            this.products = response.data
            return response
        },

        async getProduct(slug) {
            const response = await cultureAPI.getProduct(slug)
            this.product = response.data
            return response
        },

        async createOrder(name, phone, email, cart) {
            return await cultureAPI.createOrder(name, phone, email, cart)

        },

        async getQuery() {
            const params = URLSearchParams(window.location.search)
            this.params = params
            return params
        }
    }
})


export default useCultureStore