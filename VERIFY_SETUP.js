
const fs = require('fs');
const path = require('path');

console.log('🔍 DxAssist OTP & Database Verification Script\n');


console.log('1️⃣ Checking .env.local...');
const envPath = path.join(__dirname, '../../.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const hasEmailUser = envContent.includes('EMAIL_USER');
  const hasEmailPass = envContent.includes('EMAIL_PASS');
  const hasDb = envContent.includes('DATABASE_HOST');
  
  if (hasEmailUser && hasEmailPass && hasDb) {
    console.log('✅ .env.local found with email and database config\n');
  } else {
    console.log('❌ .env.local missing required variables');
    console.log('   Missing:', !hasEmailUser ? 'EMAIL_USER' : '', !hasEmailPass ? 'EMAIL_PASS' : '', !hasDb ? 'DATABASE_HOST' : '', '\n');
  }
} else {
  console.log('❌ .env.local not found\n');
}


console.log('2️⃣ Checking required API routes...');
const filesToCheck = [
  'app/api/auth/send-email-otp/route.js',
  'app/api/auth/verify-email-otp/route.js',
  'lib/db.js',
];

filesToCheck.forEach(file => {
  const filePath = path.join(__dirname, '../../', file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} NOT FOUND`);
  }
});

console.log('\n3️⃣ Recommended Next Steps:');
console.log('   1. Run DATABASE_SETUP.sql to create tables');
console.log('   2. Verify Gmail app password at myaccount.google.com/apppasswords');
console.log('   3. Restart Next.js: npm run dev');
console.log('   4. Test OTP send on http://localhost:3000/login-email-otp');
console.log('   5. Check terminal for [OTP] debug logs\n');

console.log('📖 Full guide: OTP_AND_USER_STORAGE_ANALYSIS.md');
