import React, { useState } from "react";

function Banner() {
  const [Data, setData] = useState({
    title: "Eid-Ul-Adha Collection",
    desc: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumendexcepturi exercitationem quasi. In deleniti eaque aut repudiandae eta id nisi.",
    img: "https://wallpapercave.com/wp/wp3137848.jpg",
  });
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("${Data.img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">{Data.title}</h1>
          <p className="mb-5 text-white">{Data.desc}</p>
          <button className="btn bg-white text-black hover:text-white border-none">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
