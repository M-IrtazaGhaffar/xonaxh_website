import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import New from "../components/New";
import Newsletter from "../components/Newsletter";
import Category from "../components/Category";
import Stat from "../components/Stat";
import Splash from "../pages/Splash";
import Search from "../components/Search";

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
      {/* Search */}
      <Search />

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
