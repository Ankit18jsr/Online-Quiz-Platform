const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('./models/User');

async function resetPassword() {
  const emailToReset = 'admin@gmail.com';
  const newPlainPassword = 'admin123'; // Change this to whatever you want the password to be

  try {
    // Connect to database (uses the URI in backend/.env)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully...");

    const user = await User.findOne({ email: emailToReset });
    if (!user) {
      console.log(`User with email ${emailToReset} not found.`);
      process.exit(0);
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPlainPassword, 10);
    user.password = hashedPassword;
    await user.save();

    console.log(`Successfully reset password for ${emailToReset} to "${newPlainPassword}".`);
  } catch (err) {
    console.error("Error resetting password:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

resetPassword();
