const express = require("express");

const router = express.Router();

const {
    placeOrder,
    getUserOrders,
    getAllOrders
} = require("../controllers/orderController");
router.post("/", placeOrder);

// Get all orders (Admin)
router.get("/", getAllOrders);

// Get orders for one user
router.get("/:userId", getUserOrders);

module.exports = router;