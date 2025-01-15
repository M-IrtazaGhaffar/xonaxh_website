import React, { useState } from "react";

function Size() {
  const [Sizes, setSizes] = useState([
    {
        name: "xSmall",
        size: {
          length: "37",
          chest: "20.5",
          waist: "21",
          daman: "21.5",
          sleeves: "22.5",
          shoulders: "16.5",
          colloar: "13.5",
          armhole: "8.5",
        },
      },
    {
      name: "Small",
      size: {
        length: "39",
        chest: "21.5",
        waist: "22",
        daman: "22.5",
        sleeves: "23.5",
        shoulders: "17.5",
        colloar: "14.5",
        armhole: "9.5",
      },
    },
    {
      name: "Medium",
      size: {
        length: "41",
        chest: "22.5",
        waist: "23",
        daman: "23.5",
        sleeves: "24.5",
        shoulders: "18.5",
        colloar: "15.5",
        armhole: "10.5",
      },
    },
    {
      name: "Large",
      size: {
        length: "43",
        chest: "23.5",
        waist: "24",
        daman: "24.5",
        sleeves: "25.5",
        shoulders: "19.5",
        colloar: "16.5",
        armhole: "11.5",
      },
    },
    {
      name: "xLarge",
      size: {
        length: "45",
        chest: "24.5",
        waist: "25",
        daman: "25.5",
        sleeves: "26.5",
        shoulders: "20.5",
        colloar: "17.5",
        armhole: "12.5",
      },
    },
  ]);
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90vw] lg:w-full lg:overflow-hidden overflow-x-scroll">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-transparent">#</th>
              <th className="bg-transparent">Name</th>
              <th className="bg-transparent">Length</th>
              <th className="bg-transparent">Chest</th>
              <th className="bg-transparent">Waist</th>
              <th className="bg-transparent">Daman</th>
              <th className="bg-transparent">Sleeves</th>
              <th className="bg-transparent">Shoulders</th>
              <th className="bg-transparent">Collar</th>
              <th className="bg-transparent">Armhole</th>
            </tr>
          </thead>
          <tbody>
            {Sizes.map((size, index) => (
              <tr key={index} className="bg-white">
                <th className="bg-transparent">{index + 1}</th>
                <td className="bg-transparent">{size.name}</td>
                <td className="bg-transparent">{size.size.length}</td>
                <td className="bg-transparent">{size.size.chest}</td>
                <td className="bg-transparent">{size.size.waist}</td>
                <td className="bg-transparent">{size.size.daman}</td>
                <td className="bg-transparent">{size.size.sleeves}</td>
                <td className="bg-transparent">{size.size.shoulders}</td>
                <td className="bg-transparent">{size.size.colloar}</td>
                <td className="bg-transparent">{size.size.armhole}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Size;
