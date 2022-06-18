import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new mongoose.Schema({
    flight: {
        type: String,
        required: true
      },
      departureDate: { 
        type: Date, 
        default: function () {
          return new Date().getFullYear()
        },
        min: 600
      },
      Airport: {
        type: String,
        enum: ["1A", "2B", "3C", "4D"]
      },
      cast: [String],
      nowBoarding: { type: Boolean, default: false },
    }, {
      timestamps: true,
    })
    
    
  const Flight = mongoose.model('Flight', flightSchema)

  export {
    Flight
  }

