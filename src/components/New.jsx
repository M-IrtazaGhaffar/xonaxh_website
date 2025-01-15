import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "imagekitio-react";

function New() {
  const [Data, setData] = useState([
    {
      id: 1,
      name: "Shiny Emerald",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "If a dog chews shoes whose shoes does he choose?",
      tag: "W&W",
      price: '1000',
      shopname: 'MTJ',
      categoryname: 'Mens',
      subcategoryname: 'Kurta Shalwar'
    },
    {
      id: 2,
      name: "Ocean Midnight",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "Dark as night, light as ocean spray.",
      tag: "Armani",
      price: '1200',
      shopname: 'Outfitters',
      categoryname: 'Mens',
      subcategoryname: 'Suits'
    },
    {
      id: 3,
      name: "Crimson Peak",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "Stand tall in every situation.",
      tag: "W&W",
      price: '1500',
      shopname: 'MTJ',
      categoryname: 'Mens',
      subcategoryname: 'Blazers'
    },
    {
      id: 4,
      name: "Ash Grey Deluxe",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "A timeless piece for every wardrobe.",
      tag: "W&W",
      price: '1800',
      shopname: 'Khaadi',
      categoryname: 'Mens',
      subcategoryname: 'Suits'
    },
    {
      id: 5,
      name: "Midnight Sapphire",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "A touch of luxury for every event.",
      tag: "Gucci",
      price: '2500',
      shopname: 'Gul Ahmed',
      categoryname: 'Mens',
      subcategoryname: 'Suits'
    },
    {
      id: 6,
      name: "Ivory Crown",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "Dress like royalty, feel like a king.",
      tag: "W&W",
      price: '2100',
      shopname: 'MTJ',
      categoryname: 'Mens',
      subcategoryname: 'Blazers'
    },
    {
      id: 7,
      name: "Shadow Stripe",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "Walk in the shadows, stand in the light.",
      tag: "Dolce & Gabbana",
      price: '2700',
      shopname: 'Sapphire',
      categoryname: 'Mens',
      subcategoryname: 'Suits'
    },
    {
      id: 8,
      name: "Royal Burgundy",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "Where heritage meets style.",
      tag: "Versace",
      price: '3000',
      shopname: 'MTJ',
      categoryname: 'Mens',
      subcategoryname: 'Blazers'
    },
    {
      id: 9,
      name: "Desert Tan",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "Soft colors, bold statements.",
      tag: "W&W",
      price: '1600',
      shopname: 'Zellbury',
      categoryname: 'Mens',
      subcategoryname: 'Suits'
    },
    {
      id: 10,
      name: "Velvet Jade",
      img: "https://www.junaidjamshed.com/media/catalog/product/2/0/2010_dark_green.jpg",
      description: "Feel the smoothness, love the fit.",
      tag: "Gucci",
      price: '1900',
      shopname: 'MTJ',
      categoryname: 'Mens',
      subcategoryname: 'Kurta Shalwar'
    }
  ]);

  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center py-10 underline underline-offset-8">
        Check Out Our New Products
      </h1>
      <div className="flex flex-wrap gap-5 items-center justify-center ">
        {Data.map((item) => {
          return (
            <div
              className="card lg:w-64 bg-white shadow-xl cursor-pointer hover:scale-110 transition ease-in-out"
              onClick={() => navigate(`/products/men/${item.id}`)}
              key={item.id}
            >
              <figure>
                <img src={item.img} alt={item.title} />
              </figure>
              <div className="p-5">
                <div className="badge bg-black text-white my-3">NEW</div>
                <h2 className="card-title">{item.name}</h2>
                <p>(PKR) {item.price}</p>
                <p>By <b>{item.shopname}</b></p>
                <div className="card-actions items-end justify-end flex-col">
                  <div className="badge badge-outline">{item.categoryname}</div>
                  <div className="badge badge-outline">{item.subcategoryname}</div>
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
