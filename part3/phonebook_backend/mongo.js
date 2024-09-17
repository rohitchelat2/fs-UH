const mongoose = require('mongoose')

if (process.argv.length<3) {
 
  process.exit(1)
}



const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://rohitchelat:${password}@fullstackopen.nzaxhtk.mongodb.net/PhoneBook?retryWrites=true&w=majority&appName=fullstackopen`

mongoose.set('strictQuery',false)

mongoose.connect(url)



const personSchema = new mongoose.Schema({
  name: String,
  phonenumber: Number
})

const Person = mongoose.model('Person', personSchema)
if (process.argv.length==3)
    {
        Person.find({}).then(result => {
            result.forEach(person => {
              console.log(person)
            })
            mongoose.connection.close()
          })
    }
    else{
const person = new Person({
  name: name,
  phonenumber: number
})

person.save().then(result => {
  console.log('added '+name+ ' number ' +number+' to phonebook')
  mongoose.connection.close()
})}