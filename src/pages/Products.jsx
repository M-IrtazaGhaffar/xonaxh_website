import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Soon from "./Soon";
import Loading from "../components/Loading";

function Products() {
  // Hookes
  const navigate = useNavigate();
  const params = useLocation();

  // States
  const [Data, setData] = useState([
    {
      id: 1,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 2,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 3,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 4,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjms-3004_green_.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 5,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 6,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 7,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 8,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 9,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
    {
      id: 10,
      title: "Boski",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      desc: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      type: "male",
      price: 3500,
    },
  ]);
  const [Type, setType] = useState("");
  const [Load, setLoad] = useState(1);

  // useEffect
  useEffect(() => {
    // Setting Load
    setLoad(0);

    // Initializing Params
    const param = params.pathname.split("/")[2];
    // Setting Type
    setType(param);
    // Fetching Data
    if (param === "men") {
      // function
    } else if (param === "women") {
      // function
    } else if (param === "watches") {
      // function
    } else if (param === "others") {
      // function
    } else if (param === "fragnances") {
      // function
    } else if (param === "makeup") {
      // function
    } else if (param === "kherri") {
      // function
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      {Load ? (
        <Loading />
      ) : (
        <div className="flex flex-col flex-wrap gap-4 lg:px-20 py-12 lg:p-16 items-center justify-center">
          <div className="text-2xl px-8 py-2 text-center bg-black text-white rounded-full mx-5">
            All According to Your Mindset!
          </div>
          <div className="w-full p-10 flex flex-wrap gap-5 items-center justify-around">
            <div className="flex flex-wrap items-center gap-5">
              Category
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-double-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <span className="bg-black text-white rounded-full py-1 px-5 capitalize">
                {Type}
              </span>
            </div>
            {/* <select className="select w-full max-w-xs bg-white text-black border-black">
            <option disabled selected>
              Pick your favorite Category
            </option>
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kherri</option>
            <option>Fragnances</option>
          </select> */}
            {/* <div className="w-64 bg-slate-400">1</div> */}
          </div>
          <div>
            {Data.length === 0 ? (
              <Soon />
            ) : (
              <div className="flex gap-5 flex-wrap justify-center">
                {Data.map((item) => {
                  return (
                    <div
                      className="card w-80 bg-white shadow-xl cursor-pointer hover:scale-110 transition ease-in-out"
                      onClick={() => navigate(`/products/${Type}/${item.id}`)}
                      key={item.id}
                    >
                      <figure>
                        <img src={item.img} alt={item.title} />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <div className="card-actions justify-end flex-col items-end">
                          <div className="flex items-center gap-1 capitalize">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              fill="currentColor"
                              class="bi bi-caret-right-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            {item.type}
                          </div>
                          <div className="badge badge-outline capitalize">
                            {item.tag}
                          </div>
                          <div className="bg-slate-500 text-white py-1 px-4 text-xl">
                            {item.price}/- <span className="text-sm">PKR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="flex justify-center my-10">
                <button
                  className="btn btn-wide bg-white text-black hover:text-white text-center"
                  // onClick={}
                >
                  Load more
                </button>
              </div> */}
                <p className="text-lg p-5 text-center">
                  That's all for Today! Hope you'll like something.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
