import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ticketSchema = new Schema({
  seat: String,
  price: {type: Number, min: 0,},
  
}, {
  timestamps: true
})
const flightsSchema = new Schema({
  airline: String,
  flightNo: Number,
  airport: String,
  departs: Date,
  ticket: [ticketSchema],
  Meal: [{type: Schema.Types.ObjectId, ref: 'Meal'}],
}, {
  timestamps:true,
})
  const Flight = mongoose.model('Flight', flightsSchema)

  export {
    Flight,
    // Meal
  }

