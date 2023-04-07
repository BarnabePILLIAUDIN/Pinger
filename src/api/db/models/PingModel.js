import mongoose from "mongoose"
import PingSchema from "../schemas/PingSchema"

const PingModel = mongoose.modelNames().includes("ping")
  ? mongoose.model("ping")
  : mongoose.model("ping", PingSchema)

export default PingModel
