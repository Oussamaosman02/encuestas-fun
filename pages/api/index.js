import mongoose from 'mongoose'
import { Resp, mongoConn } from '../../utils/mongo.js'

export async function handler (req, res) {
  console.log('Connecting for adding resp')
  mongoConn()
  console.log('Connected, you can add an resp')
  const respu = req.body
  const resp = await Resp.create({ respu })
  mongoose.connection.close()
  console.log('Closed connection, added resp')
  res.json({ resp })
}
