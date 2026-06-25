const Cart = require("../models/Cart");

// Add Item
const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity = 1 } = req.body;
        if (!userId || !productId) {
            return res.status(400).json({ message: "userId and productId are required" });
        }
        // Check if the item already exists in the user's cart
        const existingItem = await Cart.findOne({ userId, productId });
        if (existingItem) {
            existingItem.quantity += Number(quantity);
            await existingItem.save();
            return res.status(200).json({ message: "Cart updated", item: existingItem });
        }
        // Create a new cart entry
        const cartItem = new Cart({ userId, productId, quantity });
        await cartItem.save();
        res.status(201).json({ message: "Product added to cart", item: cartItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCart = async (req, res) => {

    try {

        const { userId } = req.params;

        const cart = await Cart.find({ userId });

        res.json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    addToCart,
    getCart
};