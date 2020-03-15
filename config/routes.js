const express=require('express')
const router=express.Router()

const usersController=require('../app/controllers/usersController')
const playersController=require('../app/controllers/playersController')

const {authentication}=require('../app/middleware/authenticate')



router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.delete('/users/logout',authentication,usersController.logout)
router.get('/users/account',authentication,usersController.account)
router.get('/users',usersController.list)

router.post('/players',authentication,playersController.create)
router.get('/players',playersController.list)
router.delete('/players/:id',authentication,playersController.destroy)


module.exports=router