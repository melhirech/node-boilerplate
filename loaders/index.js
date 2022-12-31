
const expressLoader = require('./express')
const mongooseLoader = require('./mongoose')
const Logger = require('./logger')

const loaders = async ({ expressApp }) => {
  await mongooseLoader()
  Logger.info('✌️ DB loaded and connected!')

  await expressLoader({ app: expressApp })
  Logger.info('✌️ Express loaded')
}

module.exports = loaders
