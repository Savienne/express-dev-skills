import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

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
  // function show(req, res) {
  //   Flight.findById(req.params.id)
  //   .then(flights => {
  //     res.render('flights/show', { 
  //       title: 'Flight Details', 
  //       flights: flights,
  //     })    
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     res.redirect("/")
  //   })
  // }
export{
  newFlight as new,
  create,
  index,
}