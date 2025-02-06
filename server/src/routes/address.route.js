import {Router} from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { createAddress , getAddress } from '../controllers/address.controller.js'

const addressRoute = Router()

addressRoute.post('/add',auth,createAddress)
addressRoute.get('/get',auth,getAddress)

export default addressRoute;