-- ✅ RUN THIS SCRIPT IN YOUR MYSQL DATABASE
-- This will create the email_otps table if it doesn't exist

USE dxassist;

-- Check if table exists, if not create it
CREATE TABLE IF NOT EXISTS email_otps (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  otp VARCHAR(6) NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_expires (expires_at)
);

-- Test users table
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Test medical_analyses table (for user-wise storage)
CREATE TABLE IF NOT EXISTS medical_analyses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  summary LONGTEXT,
  conditions JSON,
  evidence JSON,
  file_path VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id (user_id)
);

-- Verify tables
SHOW TABLES;

-- Check email_otps structure
DESCRIBE email_otps;

-- Check users structure
DESCRIBE users;

-- Check medical_analyses structure
DESCRIBE medical_analyses;

-- ✅ If needed, insert a test admin user for testing:
INSERT INTO users (name, email, password, role) 
VALUES ('Admin', 'arunisharwal@gmail.com', 'test123', 'admin')
ON DUPLICATE KEY UPDATE password='test123', role='admin';

-- ✅ Verify data
SELECT * FROM users;
SELECT * FROM email_otps;
