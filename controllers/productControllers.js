const Product = require('../models/product')

module.exports = {
    createProduct: async (req, res) => {
        const newProduct = new Product(req.body);
        try {
            await newProduct.save();
            res.status(200).json("product created!")
        } catch (e) {
            res.status(500).json(e)
        }
    },

    getAllProduct: async (req, res) => {
        try {
            const product = await Product.find().sort({createdAt: -1})
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json("product find failed!")
        }
    },

    getProduct: async (req, res) => {
        const productId = req.params.id
        try {
            const product = await Product.findById(productId)
            const {__v, createdAt, ...productData} = product._doc;
            res.status(200).json(productData)
        } catch (e) {
            res.status(500).json("product get failed!")
        }
    },

    searchProduct: async (req, res) => {
        try {
            const results = await Product.aggregate([
                [
                    {
                        $search: {
                            index: "shoes",
                            text: {
                                query: req.params.key,
                                path: {
                                    wildcard: "*"
                                }
                            }
                        }
                    }
                ]
            ])
            res.status(200).json(results)
        } catch (e) {
            res.status(500).json("search product failed!")
        }
    }
}