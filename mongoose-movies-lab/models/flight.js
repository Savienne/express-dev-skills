import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const flightSchema = new Schema({
  Airline: String,
  flightNo: Number,
  Airport: String,
}, {
    timestamps: true
  })
  const Flight = mongoose.model('Flight', flightSchema)

  export {
    Flight
  }



    //   cast: [String],
    //   nowShowing: Boolean,
