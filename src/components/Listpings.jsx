import axios from 'axios';
import { useEffect, useState } from 'react';
import Ping from './Ping';

const Listpings = (props) => {
  const [pings, setPings] = useState([])

  const {limit} = props

useEffect(() => {
  if (limit) { 
    axios.get("/api/getlastpings").then(({ data: { data } }) => {
      const newPings = []
      data.map((element) => { newPings.push(element) })
      setPings(newPings)
    })
    return
  }
  axios.get("/api/getallpings").then(({ data: { data } }) => {
    const newPings = []
    data.map((element) => { { newPings.push(element) } })
    setPings(newPings)
  })
},[])
  

  return (
    <div className="mt-6 flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold">{limit ? "Last 3 pings" : "All your pings"} </h2>
        <div className="gap-6 flex flex-col max-w-2xl mt-5">
          {
            pings.map(({ip,packetNumber,stdout,name},key) => (
              <Ping ip={ip} packetNumber={packetNumber} stdout={stdout} key={key} name={name}></Ping>
            ))
          }
        </div>
    </div>
  );
};

export default Listpings;