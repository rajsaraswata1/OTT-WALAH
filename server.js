require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve STATIC files (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname)));

// ------------------- MONGODB CONNECT -------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ------------------- ORDER MODEL -------------------
const OrderSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  product: String,
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", OrderSchema);

// ------------------- PLACE ORDER API -------------------
app.post("/place-order", async (req, res) => {
  try {
    const { name, mobile, email, product } = req.body;

    if (!name || !mobile || !product) {
      return res.json({ success: false, message: "Missing fields" });
    }

    const order = await Order.create({ name, mobile, email, product });

    return res.json({
      success: true,
      message: "Order placed successfully! We will contact you soon.",
      orderId: order._id,
    });
  } catch (error) {
    console.log("Order Error:", error);
    return res.json({ success: false, message: "Server error" });
  }
});

// ------------------- ADMIN PANEL -------------------
app.get("/admin", async (req, res) => {
  const pass = req.query.pass;

  if (pass !== "admin123") {
    return res.send("❌ Unauthorized Access");
  }

  const orders = await Order.find().sort({ date: -1 });

  res.send(`
    <h2>📝 All Orders</h2>
    <pre>${JSON.stringify(orders, null, 2)}</pre>
  `);
});

// ------------------- START SERVER -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
