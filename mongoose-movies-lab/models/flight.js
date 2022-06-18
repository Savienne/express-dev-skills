import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new mongoose.Schema({
    Airline: String,
    flightNo: {type: Number, default: 2022},
    Airport: String,
    nowBoarding: {type: Boolean, default: false}
  }, {
    timestamps: true
  })
    
  const Flight = mongoose.model('Flight', flightSchema)

  export {
    Flight
  }



    //   cast: [String],
    //   nowShowing: Boolean,
