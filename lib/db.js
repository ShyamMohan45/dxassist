 

import mysql from "mysql2/promise"

export const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: "dxassist",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})
