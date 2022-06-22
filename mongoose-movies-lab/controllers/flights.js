import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

// Flight.create(req.body)
//   .then(flight => {
//     res.redirect(`/flights/${flight._id}`)
//   })

function create(req, res) {
  console.log('CREATE HIT')
  console.log("REQ.BODY:", req.body)
Flight.create(req.body)
.then(flights => {
 console.log("ADD FLIGHT:",flights)
 res.redirect(`/flights`)
})
.catch(err => {
  console.log(err)
  res.redirect('/flights')
 })
}
  
function index(req, res) {
  Flight.find({})
  .then(flights => {
   res.render("flights/index", {
       flights: flights,
       title: "All Flights", 
      })
    })
  }

  function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/flights")
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }

  function show(req, res) {
    Flight.findById(req.params.id)
    .then(flights => {
      res.render('flights/show', { 
        title: 'Flight Details', 
        flights: flights,
      })    
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }

  function edit(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
      res.render("flights/edit", {
        flight: flight,
        title: "Edit Flight"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }
  function update(req, res) {
    Flight.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(flight => {
      console.log(flight)
      res.redirect(`/flights/${flight._id}`)
    }) 
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }
  function createTicket(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
      flight.ticket.push(req.body)
      flight.save()
      .then(() => {
      res.redirect(`/flights/${flight._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }

export{
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
  edit,
  update,
  createTicket,
}