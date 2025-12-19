import "dotenv/config";
import mysql from "mysql2/promise";

let pool;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      waitForConnections: true,
      connectionLimit: 10,
    });
  }
  return pool;
}
