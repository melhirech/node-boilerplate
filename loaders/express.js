const express = require('express')
const cors = require('cors')
const apiRoutes = require('../api')
const config = require('../config')

// import { OpticMiddleware } from '@useoptic/express-middleware';

const expressLoaders = ({ app }) => {
  // Health check
  app.get('/status', (req, res) => {
    res.status(200).end()
  })
  app.head('/status', (req, res) => {
    res.status(200).end()
  })

  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy')

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors())

  // Transforms the raw string of req.body into json
  app.use(express.json())

  // Load API routes
  app.use(config.api.prefix, apiRoutes)

  // API Documentation
  //   app.use(OpticMiddleware({
  //       enabled: process.env.NODE_ENV !== 'production',
  //   }));

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  /// error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end()
    }
    return next(err)
  })
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message
      }
    })
  })
}

module.exports = expressLoaders
