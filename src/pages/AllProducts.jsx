import React, { useEffect, useState } from "react";
import Soon from "./Soon";
import SomeProducts from "../components/SomeProducts";

function AllProducts() {
  // States
  const [Type, setType] = useState([
    "men",
    "women",
    "kherri",
    "makeup",
    "watches",
    "fragnances",
    "others",
  ]);
  const [Loading, setLoading] = useState(1);
  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [Data3, setData3] = useState([]);
  const [Data4, setData4] = useState([]);
  const [Data5, setData5] = useState([]);
  const [Data6, setData6] = useState([]);
  const [Data7, setData7] = useState([]);
  const [Arr, setArr] = useState([
    Data1,
    Data2,
    Data3,
    Data4,
    Data5,
    Data6,
    Data7,
  ]);
  const [Count, setCount] = useState(0)

  useEffect(() => {
    // Fetching Data
    // Setting Loading
    setTimeout(() => {
      setLoading(0);
    }, 2000);

    // Data1.push(0)

    console.log(Data1);
  }, []);

  return (
    <div className="p-5 lg:p-20" style={{ minHeight: "75vh" }}>
      <div className="flex">
        <h2 className="text-2xl text-white bg-black rounded-full py-1 px-6">
          All Products
        </h2>
      </div>
      <div>
        {Type.map((item) => {
          return (
            <div>
              <h3 className="text-xl p-8 underline underline-offset-4 capitalize flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
                {item}
              </h3>
              <SomeProducts type={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
