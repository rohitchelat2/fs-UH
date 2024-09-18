const mongoose = require('mongoose')
require('dotenv').config()

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.set('strictQuery',false)
mongoose.connect(url).then(() => {
  console.log('connected to MongoDB')
})
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

function validator (val) {
  let regex = /\D/g
  return val.length>8&&val.match(regex).length<2&&val.indexOf('-')>1&&val.indexOf('-')<4
}

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    required: true
  },
  number: {
    type: String,
    validate: {
      validator: validator ,  message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

//const Person = mongoose.model('Person', personSchema)



module.exports = mongoose.model('Person', personSchema)