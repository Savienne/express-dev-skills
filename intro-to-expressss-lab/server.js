// import modules

import express from 'express'

import {students} from './data/students-data.js'
// we could also do:
// import * as todoData from './data/todo-data.js'
// // but not both! (well, you can, but please don't)


// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')
// Configure the app (app.set)

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
    res.send('<h1>hello, friends</h1>')

})

app.get('/home', function(req, res) {
    res.render('home')
  })
  app.get('/students', function(req, res) {
    res.render('students/index', {
      students: students
    })
  })

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})