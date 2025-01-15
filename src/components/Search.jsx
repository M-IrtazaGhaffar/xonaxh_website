import React from "react";

function Search() {
  return (
    <div className="p-10 flex flex-col justify-center items-center gap-1">
      <label htmlFor="searchinput" className="text-xl">Are we able to fulfil your need?</label>
      <div className="flex justify-center items-center gap-5">
      <input
        id="searchinput"
        type="text"
        placeholder="Search Your item in Xonaxh Pakistan"
        className="input input-bordered w-[70vw] bg-transparent"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </div>
    </div>
  );
}

export default Search;
