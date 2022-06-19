import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightsSchema = new Schema({
  airline: String,
  flightNo: Number,
  airport: String,
  departs: Date,
}, {
  timestamps:true,
})

  const Flight = mongoose.model('Flight', flightsSchema)

  export {
    Flight
  }

