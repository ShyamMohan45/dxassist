import { createTables } from "../lib/dbUtils.js";

(async () => {
  try {
    await createTables();
    console.log("✅ Database initialized successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ DB init failed:", err);
    process.exit(1);
  }
})();
