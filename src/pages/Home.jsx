import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import New from "../components/New";
import Newsletter from "../components/Newsletter";
import Category from "../components/Category";
import Stat from "../components/Stat";
import Splash from "../pages/Splash";

function Home() {
  const [S, setS] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setS(0);
    }, 5000);
  }, []);

  return S ? (
    <Splash />
  ) : (
    <div>

      {/* Banner */}
      <Banner />

      {/* Category */}
      <Category />

      {/* New */}
      <New />

      {/* Stat */}
      <Stat />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

export default Home;
