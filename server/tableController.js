const Timetable = require('./models/Timetable')

class tableController{
    async createTable(req, res){
        try{
            const {audNumber, createrUsername, discription, date, timetable: [{subject, faculty}]} = req.body
            const searchTimetable = await Timetable.findOne({audNumber, date})
            if(searchTimetable != null){
                const UpdateTimetable = await Timetable.findOneAndUpdate({audNumber, date}, {createrUsername, timetable: req.body.timetable}, { safe: true, upsert: true })
                return res.status(200).json( {message: 'Успешно обновлено'})
            }
            const timetable = new Timetable(req.body)
            await timetable.save()
            return res.status(200).json( {message: 'Успешно создано'})
        }catch(e){
            res.status(400).json( {message: 'Ошибка создания'})
        }
    }
    async getTable(req, res){
        try{
            const {audNumber, date} = req.body
            const timetable = await Timetable.findOne({audNumber, date})
            console.log(timetable)
            if(timetable == null){
                return res.status(400).json({message: 'Аудитории нет'})
                }
                return res.status(200).json({timetable})
        }catch(e){
            res.status(400).json( {message: 'Ошибка создания'})
        }
    }

}

module.exports = new tableController()