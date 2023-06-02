import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "imagekitio-react";

function New() {
  const [Data, setData] = useState([
    {
      id: 1,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
    },
    {
      id: 2,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
    },
    {
      id: 3,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
    },
    {
      id: 4,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjms-3004_green_.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
    },
    {
      id: 5,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
    },
    {
      id: 6,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
    },
    {
      id: 7,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
    },
  ]);

  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-3xl text-center py-10 underline underline-offset-8">
        Check Out Our Products
      </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center ">
        {Data.map((item) => {
          return (
            <div
              className="card w-64 bg-white shadow-xl cursor-pointer hover:scale-110 transition ease-in-out"
              onClick={() => navigate(`/products/men/${item.id}`)}
              key={item.id}
            >
              <figure>
                <img src={item.img} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.title}
                  <div className="badge bg-black text-white">NEW</div>
                </h2>
                <p>{item.desc}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{item.tag}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-10">
        <button
          className="btn btn-wide bg-white text-black hover:text-white text-center"
          onClick={() => navigate("/products")}
        >
          Check more
        </button>
      </div>
    </div>
  );
}

export default New;
