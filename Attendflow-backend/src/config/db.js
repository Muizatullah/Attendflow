import dotenv from "dotenv";
dotenv.config();
import pg from "Pg";
const { Pool } = pg;
const pool = new Pool({
connectionString: process.env.DATABASE_URL
});
export default pool;