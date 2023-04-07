import mongoose, { mongo } from "mongoose"
import config from "../../../../config"
import PingModel from "@/api/db/models/PingModel"

const getPingsBySearch = async (req, res) => {
  const { search } = req.query

  await mongoose.connect(config.db.uri)
  const intersetingData = []
  try {
    const data = await PingModel.find({})
    data.forEach((element) => {
      if (element.name.includes(search)) {
        intersetingData.push(element)
      }
    })
    console.log(intersetingData)
  } finally {
    mongoose.disconnect()
  }

  res.status(200).send({ status: 200, data: intersetingData })
}

export default getPingsBySearch
