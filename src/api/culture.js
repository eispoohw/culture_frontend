class CultureAPI {
    constructor(instance) {
        this.API = instance
    }

    createCart = async () => {
        return this.API({
            method: 'POST',
            url: `/cart`
        })
    }

    getCart = async (uuid) => {
        return this.API({
            url: `/cart/${uuid}`
        })
    }

    addProductToCart = async (uuid, id) => {
        return this.API({
            url: `/cart/${uuid}/add/${id}`
        })
    }
    removeProductFromCart = async (uuid, id) => {
        return this.API({
            url: `/cart/${uuid}/remove/${id}`
        })
    }
    getCategories = async (params) => {
        return this.API({
            url: `/categories?${params}`,
        })
    }

    getColors = async () => {
        return this.API({
            url: '/colors'
        })
    }

    getMaterials = async () => {
        return this.API({
            url: '/materials'
        })
    }

    getProducts = async (params) => {
        return this.API({
            url: `/products?${params}`,
        })
    }

    getProduct = async (slug) => {
        return this.API({
            url: `/products/${slug}`
        })
    }

    createOrder = async (name, phone, email, cart) => {
        return this.API({
            method: 'POST',
            url: `/order`,
            data: {
                name: name,
                phone: phone,
                email: email,
                cart: cart
            }
        })
    }

}

export default CultureAPI