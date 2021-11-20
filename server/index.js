const express = require('express')
const mongoose = require('mongoose')
const router = require("express")
const app = express()

const authRouter = require("./authRouter")

app.use(express.json())
app.use(express.urlencoded())
app.use("/auth", authRouter)

//Включение сервера
const port = process.env.port || 3001

//Для фронта
const path = __dirname + '/dist/'
const webport = 3002

const start = async () => {
    try{
        await mongoose.connect('mongodb://node:nindzya.13@cluster0-shard-00-00.fral0.mongodb.net:27017,cluster0-shard-00-01.fral0.mongodb.net:27017,cluster0-shard-00-02.fral0.mongodb.net:27017/bdTimetableApp?ssl=true&replicaSet=atlas-1zb0kr-shard-0&authSource=admin&retryWrites=true&w=majority')
        app.listen(port, () => console.log(`Приложение запустилось и слушает порт ${port}!`))
    } catch(e){
        console.log(e)
    }
}

start()