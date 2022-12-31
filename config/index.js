const dotenv = require('dotenv')

dotenv.config()

const config = {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URI,
  api: {
    prefix: '/api'
  },
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  }
}

module.exports = config
