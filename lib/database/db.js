import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "job_seekers",
  password: "password",
  port: 5432, // Default PostgreSQL port
});

export const query = (text, params) => pool.query(text, params);
