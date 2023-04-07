import Navbar from "@/components/Navbar"
import Page from "@/components/Page"
import Ping from "@/components/Ping"
import axios from "axios"
import { useEffect, useState } from "react"

export function getServerSideProps({ params }) {
  return {
    props: params,
  }
}

const listPing = (props) => {
  const { pingId } = props
  
  const [name, setName] = useState("")
  const [stdout, setstdOut] = useState("")
  const [packetNumber, setPacketNumber] = useState(0)
  const [id,setId] = useState("")
  
  const [ip, setIp] = useState("")
  useEffect(() => {
    axios.get(`/api/getPingById/${pingId}`).then(({ data: { data: { name, ip, packetNumber, stdout,_id } } }) => {
      console.log(name,ip,packetNumber,stdout)
      setIp(ip)
      setName(name)
      setPacketNumber(packetNumber)
      setstdOut(stdout)
      setId(_id)
    })
  },[])
  return <Page title={name}>
    <Navbar></Navbar>
    <div className="max-w-2xl mx-auto mt-16 bg-slate-400 py-5 rounded-lg">
      <Ping ip={ip} stdout={stdout} packetNumber={packetNumber} name={name} id={id} link={false}></Ping>
    </div>
  </Page>
}

export default listPing
