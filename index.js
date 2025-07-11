const connectToMongo = require('./db')
connectToMongo()
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000



app.use(cors())

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// ROUTES::
app.use('/api/auth', require('./routes/auth'))
app.use('/api/utility', require('./routes/utility'))
app.use('/api/email', require('./routes/email'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})