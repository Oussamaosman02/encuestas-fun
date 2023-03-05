import mongoose, { Schema, model, models } from 'mongoose'
// mongo conf
const conUri = process.env.MONGO
export const mongoConn = async () => await mongoose.connect(conUri)

// mongo schema

const newResp = new Schema({
  respu: String
})

newResp.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})
export const Resp = models.Resp || model('Resp', newResp)
