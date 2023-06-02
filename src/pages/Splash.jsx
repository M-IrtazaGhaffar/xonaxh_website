import React from "react";
import Loading from "../components/Loading";
import Logo from "../assets/Logo";

function Splash() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: "100vh" }}
    >
      {/* <Logo /> */}
      <h3 className="font-arabic text-2xl p-5 text-center">
        السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
      </h3>
      <Loading />
    </div>
  );
}

export default Splash;
