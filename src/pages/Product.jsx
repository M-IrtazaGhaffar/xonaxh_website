import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Product() {
  // Hooks
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];

  // States
  const [Loading1, setLoading1] = useState(1);
  const [Type, setType] = useState("");
  const Data = {
    id: 10,
    name: "Velvet Jade",
    frontimage:
      "https://nishatlinen.com/cdn/shop/files/42418786-1_253e3bc5-2ddd-4697-bb76-e557bbf93943.jpg?v=1728984365&width=700",
    backimage:
      "https://nishatlinen.com/cdn/shop/files/42418786-1.jpg?v=1728983898&width=700",
    description:
      "Experience unparalleled comfort with our men's undergarments, designed to make you feel confident and supported all day long. The smooth, soft fabric glides against your skin, offering a luxurious sensation that you'll love. Each piece is crafted for an exceptional fit, ensuring it moves with you without riding up or constricting. From classic briefs to modern boxer briefs, our collection provides styles that cater to every preference. Enjoy breathability and durability with every wear, making these undergarments a staple in your wardrobe. Feel the smoothness and embrace the perfect fit that enhances your daily comfort and style.",
    tag: "Gucci",
    price: "1900",
    shopname: "Xonaxh Pakistan",
    categoryname: "Mens",
    subcategoryname: "Kurta Shalwar",
  };

  // useEffect
  useEffect(() => {
    // Loading screen
    setTimeout(() => {
      setLoading1(0);
    }, 3000);
    // Setting Type
    setType(location);

    // Fetching Data
    if (Type === "men") {
      // function
    } else if (Type === "women") {
      // function
    } else if (Type === "watches") {
      // function
    } else if (Type === "others") {
      // function
    } else if (Type === "fragnances") {
      // function
    } else if (Type === "makeup") {
      // function
    } else if (Type === "kherri") {
      // function
    }
  }, []);

  return Loading1 ? (
    <div
      style={{ minHeight: "90vh" }}
      className="flex justify-center items-center"
    >
      <Loading />
    </div>
  ) : (
    <div className="flex lg:p-20 p-10 gap-10 flex-wrap justify-center flex-row">
      <div className="w-full">
        <div className="text-center text-2xl mb-10 flex justify-center">
          <h2 className="flex flex-col justify-center items-center gap-2 rounded border-2 border-black">
            <span className="bg-black text-white px-5 py-1 w-full">A Product by</span>
            <span className="text-3xl px-5 py-2">{Data.shopname}</span>
          </h2>
        </div>
        <h2 className="text-3xl mb-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fillRule="currentColor"
            className="bi bi-chevron-bar-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          {Data.name}
        </h2>
        <span className="text-sm border-2 rounded-3xl py-1 px-3 border-black">
          {Data.tag}
        </span>
        <p className="flex items-center gap-2 capitalize py-2 px-1">
          Category
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
          {Data.categoryname} ({Data.subcategoryname})
        </p>
      </div>
      <div className="flex justify-center items-start flex-col lg:flex-row gap-2">
        <img className="w-80 rounded" src={Data.frontimage} alt="" />
        <img className="w-80 rounded" src={Data.backimage} alt="" />
        <div className="sm:m-5 flex flex-col gap-3">
          <p>{Data.description}</p>
          <span className="text-2xl border-2 border-black rounded-3xl italic px-3 py-1 w-fit">
            {Data.price}/- <span className="text-xs">PKR Only</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="py-5 flex flex-wrap gap-2">
          <button className="bg-black text-white rounded-full py-2 px-6 hover:text-black hover:bg-white border-2 border-black">
            Add to cart
          </button>
          <button className="bg-green-600 text-white rounded-full py-2 px-6 hover:text-green-500 hover:bg-white border-2 border-green-500">
            Order on WhatsApp
          </button>
        </div>
        <ul className="list-disc">
          <li>
            One Month <span className="font-bold">Refund</span> (
            <span className="text-3xl">
              1<sup>st</sup>
            </span>{" "}
            time in Online Brand).
          </li>
          <li>
            Check out <span className="font-bold">Our</span>{" "}
            <Link
              to={"/refund"}
              className="text-slate-500 underline underline-offset-2"
            >
              Refund Policy
            </Link>
          </li>
          <li>
            Free <span className="font-bold">Devlivery</span> All Over Pakistan.
          </li>
          <li>
            For any <span className="font-bold">Queries</span>,{" "}
            <Link
              to={"/contact"}
              className="text-slate-500 underline underline-offset-2"
            >
              Contact Us
            </Link>
          </li>
          <li>
            We are so <span className="font-bold">Sorry</span> but we don't
            provide Online Payment Gateway due to security purposes!
          </li>
          <li>
            If you are buying suit, both stiched and unstiched are{" "}
            <span className="font-bold">Available</span>.
          </li>
        </ul>
        <div className="pt-12">
          <p>Didn't like that much? You may Go back.</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="white"
            className="bi bi-arrow-left bg-black mt-1 p-2 w-8 h-8 rounded-full cursor-pointer"
            viewBox="0 0 16 16"
            onClick={() => navigate(-1)}
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Product;
