import React from "react";

function Stat() {
  return (
    <div className="flex flex-col items-center m-10">
        <h3 className="text-center">
            Here's Our Progress! As we started from 10th July 2023.
            <br />
            The Orders depend upon the Marketing Strategy aswell. But we'll grow soon.
            <h3 className="font-arabic text-3xl p-1">إن شاء الله</h3>
        </h3>
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-white text-black">
        <div className="stat">
          <div className="stat-title text-gray-500">Total Orders</div>
          <div className="stat-value">100+</div>
        </div>

        <div className="stat">
          <div className="stat-title text-gray-500">Total Returns</div>
          <div className="stat-value">2</div>
        </div>

        <div className="stat">
          <div className="stat-title text-gray-500">Regular Orders</div>
          <div className="stat-value">6</div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
