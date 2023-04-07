import React, { useEffect } from 'react';

const Loader = () => {

  useEffect(() => {
    const loader = document.getElementById("loader")
    loader.style.marginTop = "110%"
    //If the animation start to early it's not working so i prefer start it after 100ms
    setTimeout(() => {
      loader.style.marginTop = "0%"
    },100)

  },[])

  return (
    <div id="loader" className="flex h-screen items-center justify-center duration-1000 mt-[100%]">
      <h2 className="text-8xl font-extrabold text-center">The ping is in progress please wait</h2>
    </div>
  );
};

export default Loader;