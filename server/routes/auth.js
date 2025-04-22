import express from "express";
import User from "../models/user.models.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = new User({ name, email, password }); // You should hash the password in real apps
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check for missing fields
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 3. Verify password (you should hash it in production!)
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // 4. Respond with success
    res.status(200).json({ message: "Login successful", user });

  } catch (error) {
    console.error(error); // fixed: error instead of err
    res.status(500).json({ message: "Server error" });
  }
});



export default router;
