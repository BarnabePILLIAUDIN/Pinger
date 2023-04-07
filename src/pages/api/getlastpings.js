import mongoose from "mongoose"
import config from "../../../config"
import PingModel from "@/api/db/models/PingModel"

const getlastpings = async (req, res) => {
  await mongoose.connect(config.db.uri)
  try {
    const data = await PingModel.find().sort({ _id: -1 }).limit(3)
    res.status(200)
    res.send({
      status: 200,
      data,
    })
  } catch (error) {
    res.status(500)
    res.send({
      status: 500,
      error,
    })
  } finally {
    await mongoose.disconnect()
  }
}

export default getlastpings
