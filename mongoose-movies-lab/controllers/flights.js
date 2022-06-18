import { Flight } from '../models/flight.js'

function index(req, res) {
    Flight.find({})
    .then(flights =>{

        res.render("flights", {
            title: "All Flights", 
            flights: flights
          })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/flights/new')
      })
      
}


function newFlight(req, res) {
    res.render("flights/new", {
        title: "Add Flight"
      })
}

// function create(req, res) {
//   Flight.create(req.body)
//   .then(flight => {
//     console.log(flights)
//     res.redirect(`/flights/new`)
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/flights/new')
//   })

// }

function create(req, res) {
    Flight.create(req.body)
    .then(flights => {
      res.redirect(`/flights`)
    })
    .catch(err => {
      res.redirect('/flights')
    })
  }

export{
    index,
    newFlight as new,
    create
}