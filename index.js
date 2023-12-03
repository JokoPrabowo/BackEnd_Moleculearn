const express = require("express")
const app = express()
const cors = require('cors')

require('dotenv').config()

app.use(cors())
app.use(express.json())

const userRouter = require('./routes/user.router')
const quizRouter = require('./routes/quiz.router')
const scoreRouter = require('./routes/score.router')
const compoundRouter = require('./routes/compound.router')
const atomRouter = require('./routes/atom.router')


app.use('/api/v1', userRouter)
app.use('/api/v1/question', quizRouter)
app.use('/api/v1/score', scoreRouter)
app.use('/api/v1/compound', compoundRouter)
app.use('/api/v1/atom', atomRouter)

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))