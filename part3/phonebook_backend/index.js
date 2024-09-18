const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
app.use(cors())
app.use(express.static('dist'))
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))
app.use(express.json())



//For error handling
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

//Checking the connection with DB
app.get('/info', (request, response) => {
  const timestamp = new Date();
  Person.find({}).then(persons => response.send('Phone has info for '+persons.length+' people<br></br>'+timestamp))
  
})


//For getting all the contacts from DB. For th home page
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    return response.json(persons)
  })
})



//Finding person by id
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
})






//For adding new contact
app.post('/api/persons', (request, response, next) => {
  /*
  
  const newPerson = request.body
  newPerson.id = String(newId + 1)
  const names= persons.map(person=>person.name)
  const numbers= persons.map(person=>person.number)
  
  const emptyField = () => {

    return response.status(400).json({ 
      error: 'Name or number cannot empty' 
    })

  }

  const alreadyExist = () => {
    return response.status(400).json({ 
      error: 'Name or Number already exist' 
    })

  }

  const addNew = () => {
  persons = persons.concat(newPerson)
  response.json(newPerson)}
  !newPerson.name || !newPerson.number?emptyField() : names.includes(newPerson.name)?alreadyExist () : numbers.includes(newPerson.number)? alreadyExist (): addNew (newPerson.name, newPerson.number)
}*/
    const body = request.body
    const person = new Person({
    name: body.name, number: body.number})
    person.save().then(savedPerson => {
    response.json(savedPerson)
  }).catch(error => next(error))
})


//for deleting contact
app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndDelete(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
  
})



//For updating contact
app.put('/api/persons/:id', (request, response, next) => {
  const person = {
    name: request.body.name,
    number: request.body.number,
  }
  Person.findByIdAndUpdate(request.params.id, person , { new: true, runValidators: true, context: 'query' } )
  .then(updatedPerson => {response.json(updatedPerson)}).catch(error => next(error))
})

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})