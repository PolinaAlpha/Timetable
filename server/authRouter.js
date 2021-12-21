const Router = require('express')
const router = new Router()

//Authorization
const authController = require('./authController')
const tableController = require('./tableController')

router.post('/login', authController.login)
//router.get('/users', roleMiddleware(["ADMIN"]), controller.users)
router.post('/createTable', tableController.createTable)
router.post('/getTable', tableController.getTable)


module.exports = router
