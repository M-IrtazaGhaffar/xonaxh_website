import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

function Cart() {
  // States
  const [Load, setLoad] = useState(1);
  const [Data, setData] = useState([
    {
      id: "1",
      name: "Boski",
      price: 3500,
      type: "male",
      tags: "W&W",
      img: 'https://i.pinimg.com/originals/0e/ea/21/0eea21b3cfdb6fd5a9f7ef201ec608c6.jpg'
    },
    {
      id: "2",
      name: "Boski",
      price: 3500,
      type: "male",
      tags: "W&W",
      img: 'https://2.bp.blogspot.com/-y92c8vJy5HY/Te24W8WxZWI/AAAAAAAAC5g/64lmhWrEk_o/s1600/Nishat_Summer_collection_2011_Mens_Wear_04.jpg'
    },
    {
      id: "3",
      name: "Boski",
      price: 3500,
      type: "male",
      tags: "W&W",
      img: 'https://2.bp.blogspot.com/-NCv4KeS0N-I/V8zPU6G8m5I/AAAAAAAA3Hg/ueGnGfSrd_IDXTbcQT4OnWhqMlkoQYI2wCLcB/s1600/Orient%2BEid%2BKurta%2BShalwar%2BKameez%2BCollection%2B2016%2Bfor%2BMen%2BOTM-1000.jpeg'
    },
  ]);

  // useEffect
  useEffect(() => {
    // Fetching Data

    // Setting Load
    setTimeout(() => {
      setLoad(0);
    }, 2000);
  }, []);

  return (
    <div className="p-10 lg:p-20" style={{ minHeight: "100vh" }}>
      {Load ? (
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "75vh" }}
        >
          <Loading />
        </div>
      ) : (
        <div>
          <h2 className="text-5xl pb-10">Cart</h2>
          <div className="flex gap-5 flex-wrap items-center justify-center">
          {Data.map((item) => {
            return (
              <div className="flex flex-col gap-2 p-10 border-2 border-gray-200 rounded-lg w-72">
                Name: {item.name}
                <hr />
                Tage: {item.tags}
                <hr />
                Type: {item.type}
                <hr />
                Price: {item.price}
              </div>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
