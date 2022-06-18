import { Flight } from '../models/flight.js'

function newFlight(req, res) {
    res.render("flights/new", {
        title: "Add Flight"
      })
}

function create(req, res) {
  console.log("REQ.BODY:", req.body)
  req.body.nowBoarding = !!req.body.nowBoarding
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(",")
  }
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  
  Flight.create(req.body)
  .then(flights => {
    console.log("ADDED FLIGHT:", flight)
    res.redirect(`flight`)
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