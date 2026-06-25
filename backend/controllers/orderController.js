const Order = require("../models/Order");

const placeOrder = async (req, res) => {

    try {

        console.log("========== ORDER RECEIVED ==========");
        console.log(req.body);

        const order = new Order(req.body);

        await order.save();

        console.log("Order Saved Successfully");

        res.status(201).json({
            message: "Order Placed Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};

const getUserOrders = async (req, res) => {

    try {

        const { userId } = req.params;

        const orders = await Order.find({ userId });

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const getAllOrders = async (req, res) => {

    try {

        const orders = await Order.find();

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    placeOrder,
    getUserOrders,
    getAllOrders
};
