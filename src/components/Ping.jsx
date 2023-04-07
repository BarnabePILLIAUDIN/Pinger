import Link from 'next/link';
import React from 'react';

const Ping = (props) => {
  const { ip, packetNumber, stdout,name,id,link } = props
  return (
    <div className=" bg-slate-400 text-white rounded-md px-4 py-2">
      {name ? <h3 className="text-center font-semibold text-xl">{ name}</h3>:<></>}
      <h3 className="text-center font-semibold mt-2">IP: {ip}</h3>
      <h3 className="text-center font-semibold">Number of packets sent: {packetNumber}</h3>
      <h3 className="text-center font-semibold">Result:</h3>
      <pre className="text-center">{stdout}</pre>
      <div className="flex justify-end my-4 mr-5">
        {link ? <Link href={`/getPing/${id}`} className="border py-2 px-2 hover:bg-slate-100 hover:text-black duration-300 hover:scale-125 rounded">See more</Link>:<></>}
      </div>
    </div>
  );
};

export default Ping;