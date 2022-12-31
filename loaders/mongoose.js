
const mongoose = require('mongoose')
const config = require('../config')
const Logger = require('./logger')

const mongooseLoader = async () => {
  mongoose.set('strictQuery', false)

  try {
    const connection = await mongoose.connect(config.databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    return connection.connection.db
  } catch (error) {
    Logger.error(error.message)
    process.exit(1)
  }
}

module.exports = mongooseLoader
