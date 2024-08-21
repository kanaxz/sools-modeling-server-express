const exp = require('express')
const setup = require('./setup')

module.exports = {
  dependencies: [
    require('sools-core-server'),
    require('sools-express'),
    require('sools-modeling-server'),
  ],
  async construct({ core, express, modeling }) {
    const router = new exp.Router()
    express.use('/api/collections', router)
    core.on('ready', () => setup({ modeling, router }))
  }
}