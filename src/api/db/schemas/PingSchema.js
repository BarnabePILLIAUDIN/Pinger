import mongoose from "mongoose"

const PingSchema = mongoose.Schema(
  {
    ip: { type: String, required: true },
    packetNumber: { type: Number, required: true },
    stdout: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamp: true,
  }
)

export default PingSchema
