const User = require('./models/User')

class authController{
    async login(req, res){
        try{
            const {username, password} = req.body
            const user = await User.findOne({username})
                if(user == null){
                    return res.status(400).json({message:"Пользователь не найден"})
                }
                if(user.password == password) {
                    return res.status(200).json({authed: true})
                }
            return res.status(400).json({message:"Неверный пароль"})
        }catch(e){
            res.status(400).json( {message: 'Ошибка авторизации'})
        }
    }
}

module.exports = new authController()
