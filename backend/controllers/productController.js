const Product = require("../models/Product");

const getProducts = async (req, res) => {

    try {

        const products = await Product.find();

        res.json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const addProduct = async (req, res) => {

    try {

        const product = new Product(req.body);

        await product.save();

        res.status(201).json({
            message: "Product Added Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const deleteProduct = async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: "Product Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const updateProduct = async (req, res) => {

    try {

        await Product.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        res.json({
            message: "Product Updated Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct
};