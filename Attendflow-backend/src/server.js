import express from "express";
import dotenv from "dotenv";
import pool from "./config/db.js";


const app = express();
dotenv.config();



app.get("/",(req, res) => {
    res.send("AttendFlow API is running");

});
app.get("/api/health", (req, res) => {
    res.json({ ok: true});
})

app.get('/api/db-check', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ connected: true, time: result.rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ connected: false, message: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})