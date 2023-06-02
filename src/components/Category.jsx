import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Category() {
    const navigate = useNavigate()
  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-3xl text-center py-10 underline underline-offset-8">
        Shop By Category
      </h1>
      {/* <div className="flex flex-wrap gap-5 justify-center">
        <div className="card w-40 h-40 bg-base-100 shadow-xl image-full cursor-pointer hover:scale-110 transition ease-in-out delay-0" onClick={() => navigate('/products/men')}>
          <figure>
            <img
              src="https://images.saymedia-content.com/.image/t_share/MTg4MjkxOTA2MDgxNTMxMDAy/10-most-handsome-men-celebrities-of-pakistan.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Men</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-40 h-40 bg-base-100 shadow-xl image-full cursor-pointer hover:scale-110 transition ease-in-out delay-0" onClick={() => navigate('/products/women')}>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxicP5G8JCuJDfSy4bOcnVT22esXPvj2kf8QFhIF0ADZ-eSomwSW2xubLBL9tAh7ohu_Y&usqp=CAU"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Women</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-40 h-40 bg-base-100 shadow-xl image-full cursor-pointer hover:scale-110 transition ease-in-out delay-0" onClick={() => navigate('/products/kherri')}>
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/0371/5416/0772/products/4_d7064a61-b9d2-4326-9319-a198ec7bfb36.jpg?v=1679651727"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Kherri</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-40 h-40 bg-base-100 shadow-xl image-full cursor-pointer hover:scale-110 transition ease-in-out delay-0" onClick={() => navigate('/products/fragnances')}>
          <figure>
            <img
              src="https://i5.walmartimages.com/asr/c1dd6acc-ad37-427c-99fd-f71cbd5c3774.6f1060e85086597c4ff608985abac79b.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Fragnances</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-3">
        <Link to={"/products/men"} className="bg-black text-white rounded-full py-2 px-5 text-lg hover:scale-110">Men</Link>
        <Link to={"/products/women"} className="bg-black text-white rounded-full py-2 px-5 text-lg hover:scale-110">Women</Link>
        <Link to={"/products/kherri"} className="bg-black text-white rounded-full py-2 px-5 text-lg hover:scale-110">Kherri</Link>
        <Link to={"/products/fragnances "} className="bg-black text-white rounded-full py-2 px-5 text-lg hover:scale-110">Fragnances</Link>
        <Link to={"/products/watches"} className="bg-black text-white rounded-full py-2 px-5 text-lg hover:scale-110">Watches</Link>
        <Link to={"/products/makeup"} className="bg-black text-white rounded-full py-2 px-5 text-lg hover:scale-110">Makeup</Link>
        <Link to={"/products/others"} className="bg-black text-white rounded-full py-2 px-5 text-lg hover:scale-110">Others</Link>
      </div>
    </div>
  );
}

export default Category;
