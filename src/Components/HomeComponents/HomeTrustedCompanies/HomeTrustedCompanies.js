import React from "react";
import Marquee from "react-fast-marquee";
import "./HomeTruestedCompanies.css";

const HomeTrustedCompanies = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-bold my-10">
          Trusted by Fortune 500. Used by 65,000+ companies and researchers
          worldwide
        </h1>
      </div>
      <Marquee>
        <div className="marqueeimagediv flex">
          <img src="https://cdn.supervise.ly/img/bmw-full.150350e.png" alt="" />
          <img src="https://cdn.supervise.ly/img/resson.8103f95.png" alt="" />
          <img
            src="https://cdn.supervise.ly/img/HUK-COBURG.c977d50.png"
            alt=""
          />
          <img
            src="https://cdn.supervise.ly/img/Thornton-Thomasetti.46ad92d.jpg"
            alt=""
          />
          <img src="https://cdn.supervise.ly/img/engie.288d023.png" alt="" />
          <img src="https://cdn.supervise.ly/img/bitwise.1b06c96.png" alt="" />
          <img src="https://cdn.supervise.ly/img/cnh.6307774.png" alt="" />
          <img src="https://cdn.supervise.ly/img/rz.6d5191c.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default HomeTrustedCompanies;
