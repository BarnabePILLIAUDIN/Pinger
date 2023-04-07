import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-slate-400">
      <nav className=" text-white py-6 flex max-w-xl first-letter gap-48 mx-auto items-center">
        <h1 className="uppercase text-4xl font-bold item-center -ml-36 border-white border-4 py-4 px-2">Pinger</h1>
        <ul className="flex gap-24 justify-evenly text-4xl font-bold">
          <li className="border-b-4 border-b-transparent hover:border-b-white duration-300"><Link href={"/"} >Home</Link></li>
          <li className="border-b-4 border-b-transparent hover:border-b-white duration-300"><Link href={"/history"}>History</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;