// ============================================
// Contact Form Routes
// ============================================

import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Save a contact form submission
 */
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, message." });
  }

  // Email format validation (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  try {
    const submission = await prisma.contact.create({
      data: { name, email, message },
    });
    res.status(201).json({
      success: true,
      data: submission,
    });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    res.status(500).json({ error: "Failed to process your request. Please try again later." });
  }
});

/**
 * @route   GET /api/contact
 * @desc    Get all contact submissions
 */
router.get("/", async (req, res) => {
  try {
    const submissions = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(submissions);
  } catch (error) {
    console.error("GET /api/contact error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
