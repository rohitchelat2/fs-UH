const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')
app.use(cors())
app.use(express.static('dist'))

let persons = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]



app.get('/info', (request, response) => {
  const timestamp = new Date();
  console.log(Date())
  response.send('Phone has info for '+persons.length+'people<br></br>'+timestamp)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})


app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)
  if(!person)
  {
    return(response.send('Wrong ID number'))
  }
  response.json(person)
})


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



app.post('/api/persons', (request, response) => {
  const newId = Math.floor(Math.random() * 10000) + 4;

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
})



app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
  
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})