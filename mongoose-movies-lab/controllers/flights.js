import { Flight } from '../models/flight.js'

function index(req, res) {
    Flight.find({})
    .then(flights =>{

        res.render("flights", {
            title: "Add Flights", 
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
        title: "Add Flights",
      })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    console.log(flight)
    res.redirect(`/flights/new`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })

}

export{
    newFlight as new,
    create,
    index,
}