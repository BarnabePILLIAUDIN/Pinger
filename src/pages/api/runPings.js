import { exec } from "child_process"
import mongoose from "mongoose"
import config from "../../../config"
import PingModel from "@/api/db/models/PingModel"

const runPing = async (req, res) => {
  const { ip, packetNumber, name } = req.body
  console.log(name)
  if (!ip || !name) {
    res.status
    res.send({
      status: 400,
      error: "Bad request",
    })
    return
  }

  const cmd = `ping -ac ${packetNumber || 4} ${ip}`

  exec(cmd, async (err, stdout, sterr) => {
    if (err || sterr) {
      console.error(err)
      res.status(500)
      res.send({
        status: 500,
        error: `${err} ${sterr}`,
      })

      return
    }
    console.log(stdout)

    await mongoose.connect(config.db.uri)
    try {
      console.log(name)
      await PingModel.create({
        ip,
        packetNumber: packetNumber || 4,
        stdout,
        name,
      })
    } finally {
      await mongoose.disconnect()
    }
    res.redirect("/")
  })
}

export default runPing
