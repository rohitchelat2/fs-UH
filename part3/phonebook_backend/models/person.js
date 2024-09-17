const mongoose = require('mongoose')
require('dotenv').config()

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!

const url = process.env.MONGODB_URI;
console.log('connecting to', url)

mongoose.set('strictQuery',false)
mongoose.connect(url).then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: Number
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Person = mongoose.model('Person', personSchema)



module.exports = mongoose.model('Person', personSchema)