import * as jsonServer  from 'json-server'
import {Express} from 'express'

import * as fs from 'fs'
import * as https from 'https'

import {handleAuthentication} from './auth'
import {handleAuthorization} from './authz'

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(jsonServer.bodyParser)

// middleware parz login
server.post('/login', handleAuthentication)
server.use('/orders',handleAuthorization)
// Add custom routes before JSON Server router

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('../keys/cert.pem'),
  key: fs.readFileSync('../keys/key.pem')
}

https.createServer(options, server).listen(3001, () => {
    console.log('JSON Server is running on https://localhost:3001')
})
