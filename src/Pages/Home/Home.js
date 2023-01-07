import React from "react";
import HomeBanner from "../../Components/HomeComponents/HomeBanner/HomeBanner";
import HomeDataStudio from "../../Components/HomeComponents/HomeDataStudio/HomeDataStudio";
import HomeHowToVideoAnnotionWork from "../../Components/HomeComponents/HomeHowtoVideoAnnotionWork/HomeHowToVideoAnnotionWork";
import HomeTrustedCompanies from "../../Components/HomeComponents/HomeTrustedCompanies/HomeTrustedCompanies";
import HomeVisionAi from "../../Components/HomeComponents/HomeVisionAI/HomeVisionAi";
import ProductionReady from "../../Components/HomeComponents/ProductionReady/ProductionReady";
import Work from "../../Components/HomeComponents/Works/Work";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeTrustedCompanies></HomeTrustedCompanies>
      <HomeHowToVideoAnnotionWork></HomeHowToVideoAnnotionWork>
      <Work></Work>
      <ProductionReady></ProductionReady>
      <HomeDataStudio></HomeDataStudio>
      <HomeVisionAi></HomeVisionAi>
    </div>
  );
};

export default Home;
