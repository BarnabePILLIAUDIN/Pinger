import mongoose from "mongoose"
import config from "../../../../config"
import PingModel from "@/api/db/models/PingModel"

const getPingById = async (req, res) => {
  const { id } = req.query
  await mongoose.connect(config.db.uri)
  const ping = []
  try {
    ping.push(await PingModel.findById(id))
  } finally {
    await mongoose.disconnect()
  }

  res.status(200).send({
    status: 200,
    data: ping[0],
  })
}

export default getPingById
