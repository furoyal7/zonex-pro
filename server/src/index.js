// ============================================
// Altex Backend — Main Entry
// ============================================

import express from "express";
import cors from "cors";
import "dotenv/config";

// Import Routes
import userRoutes from "./routes/users.js";
import contactRoutes from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging (optional but helpful)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Mounted Routes
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "An unexpected error occurred on the server." });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Altex Server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});
