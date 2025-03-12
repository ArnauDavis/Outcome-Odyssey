require('dotenv').config()
const mongoose = require('mongoose')

// Async function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from the environment variable
    const conn = await mongoose.connect(process.env.DB_STRING, {
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    // If there's an error connecting to the database, log the error and exit the process
    console.error('Error connecting to MongoDB:', err)
    process.exit(1)
  }
}

module.exports = connectDB
