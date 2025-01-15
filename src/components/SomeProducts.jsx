import React, { useEffect, useState } from "react";
import Soon from "../pages/Soon";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

function SomeProducts(props) {
  //Hooks
  const navigate = useNavigate();
  // States
  // const [Data, setData] = useState([])
  const [Data, setData] = useState([
    {
      id: 1,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 2,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 3,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 4,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjms-3004_green_.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 5,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 6,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 7,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 8,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 9,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
    {
      id: 10,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
    },
  ]);
  const [Load, setLoad] = useState(1);

  // useEffect
  useEffect(() => {
    // Fetching Data

    // Setting Loading
    setTimeout(() => {
      setLoad(0);
    }, 2000);
  }, []);

  return Load ? (
    <Loading />
  ) : (
    <div>
      {Data.length === 0 ? (
        <Soon />
      ) : (
        <div className="flex gap-3 flex-wrap justify-center items-center">
          {Data.map((item) => {
            return (
              <div
                className="card w-60 bg-white shadow-xl cursor-pointer hover:scale-110 transition ease-in-out"
                onClick={() => navigate(`/products/${props.type}/${item.id}`)}
                key={item.id}
              >
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="card-actions justify-end flex-col items-end">
                    <div className="badge badge-outline capitalize">
                      {item.type}
                    </div>
                    <div className="badge badge-outline capitalize">
                      {item.tag}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Link
            className="w-60 h-48 rounded-md flex flex-col items-center justify-center hover:bg-gray-200"
            to={`/products/${props.type}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
            Show More
          </Link>
        </div>
      )}
    </div>
  );
}

export default SomeProducts;
