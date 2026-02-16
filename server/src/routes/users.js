// ============================================
// User Routes
// ============================================

import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all users
 */
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(users);
  } catch (error) {
    console.error("GET /api/users error:", error);
    res.status(500).json({ error: "Internal server error while fetching users." });
  }
});

/**
 * @route   POST /api/users
 * @desc    Create a new user
 */
router.post("/", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    // Unique constraint violation (Prisma P2002)
    if (error.code === "P2002") {
      return res.status(409).json({ error: "A user with this email already exists." });
    }
    console.error("POST /api/users error:", error);
    res.status(500).json({ error: "Internal server error while creating user." });
  }
});

/**
 * @route   GET /api/users/:id
 * @desc    Get a user by ID
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.json(user);
  } catch (error) {
    console.error(`GET /api/users/${id} error:`, error);
    res.status(500).json({ error: "Internal server error." });
  }
});

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    // Record not found
    if (error.code === "P2025") {
      return res.status(404).json({ error: "User not found." });
    }
    console.error(`DELETE /api/users/${id} error:`, error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
