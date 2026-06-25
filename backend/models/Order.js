const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },

    items: [
        {
            productId: String,
            name: String,
            quantity: Number,
            price: Number,
            size: String
        }
    ],

    total: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "Pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Order", OrderSchema);