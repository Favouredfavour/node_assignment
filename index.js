const express = require('express')
const app = express()
const connectDB = require('./config/db')
const dotenv = require('dotenv')





dotenv.config({path: './config/.env'})
connectDB()

app.get('/', (req, res) => {
    res.json({message: 'ok'})
})

app.get('/post', (req,res) => {
    // const {text} = req.body
    // console.log(text)

    const data = {
        id: "1",
        text: "Postman is an API platform for developers to design, build, test and iterate their APIs. As of April 2022,"
    }

    function transpose(word){

        if (word.split(" ").length > 1) {
            res = word.split(" ").reverse().join(" ")
        }
        else{
            res = word.split("").reverse().join("")
        }
        
        return res
        
    }


    const result = req.body
    res.json({trans: transpose(data.text)})
})


const PORT=process.env.PORT || 3000

app.listen(PORT, () => console.log('server is running on port 3000'))