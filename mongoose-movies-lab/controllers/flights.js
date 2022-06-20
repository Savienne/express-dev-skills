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

  // function editFlight(req, res){
  //   Flight.findById(req.params.id, function(err, flights){
  //     res.render("/flights/edit", {
  //       flights,
  //       err,
  //       title: "Edit Flight"
  //     })
  //   })
  // }


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
export{
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
}