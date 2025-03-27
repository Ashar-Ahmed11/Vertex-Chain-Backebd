const mongoose = require('mongoose')
// const mongoURI = "mongodb+srv://asharahmed:ILOVEcars123@cluster0.qolymsk.mongodb.net/cloudbook"
// const mongoURI = "mongodb://localhost:27017"
const mongoURI = "mongodb+srv://asharahmd11:YBgFe2EpC3b6XtrT@cluster0.poeic.mongodb.net/vertexchain"


const connectToMongo = () => {

    mongoose.connect(mongoURI, () => {
        console.log("CONNECTED TO MONGO SUCCESSFULLY")
    })
}

module.exports = connectToMongo