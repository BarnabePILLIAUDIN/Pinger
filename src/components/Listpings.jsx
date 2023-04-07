import axios from 'axios';
import { useEffect, useState } from 'react';
import Ping from './Ping';

const Listpings = (props) => {
  const [pings, setPings] = useState([])
  const [search, setSearch] = useState("")

  const {limit} = props

useEffect(() => {
  if (limit) { 
    axios.get("/api/getLastPings").then(({ data: { data } }) => {
      const newPings = []
      data.map((element) => { newPings.push(element) })
      setPings(newPings)
    })
    return
  }
  axios.get("/api/getAllPings").then(({ data: { data } }) => {
    const newPings = []
    data.map((element) => { { newPings.push(element) } })
    setPings(newPings)
  })
},[])
  
  useEffect(() => {
    console.log("search",search)
    if (search.length > 0) {
      axios.get((`/api/getPingsBySearch/${search}`)).then(({ data:{data} }) => {
        setPings(data)
      })  
  }    
},[search])

  return (
    <div className="mt-6 flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold">{limit ? "Last 3 pings" : "All your pings"} </h2>
      {limit ? <></> : <input type="text" placeholder="Search a ping by name" onChange={(e) => { setSearch(e.target.value) }} />}
      <h3>{ pings.length} results</h3>
        <div className="gap-6 flex flex-col max-w-2xl mt-5">
          {
            pings.map(({ip,packetNumber,stdout,name,_id},key) => (
              <Ping ip={ip} packetNumber={packetNumber} stdout={stdout} key={key} name={name} id={_id} link={true}></Ping>
            ))
          }
        </div>
    </div>
  );
};

export default Listpings;