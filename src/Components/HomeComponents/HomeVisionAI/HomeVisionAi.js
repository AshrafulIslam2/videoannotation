import React from "react";

const HomeVisionAi = () => {
  const visions = [
    {
      tittle: "COVID-19",
      img: "https://plainsight.ai/wp-content/uploads/2020/08/covid-main-opt.jpg",
      subtitle: "Fever & PPE Detection",
      details:
        "Occupancy & Distancing Monitoring ,Cleaning & Disinfecting Compliance",
    },
    {
      tittle: "Pharmaceuticals",
      img: "https://plainsight.ai/wp-content/uploads/2020/08/pharma-main-opt.jpg",
      subtitle: "Pharmaceuticals",
      details: "Clinical Trial Optimization Medical Imaging",
    },
    {
      tittle: "Supply Chain",
      img: "https://plainsight.ai/wp-content/uploads/2020/08/supply-main.jpg",
      subtitle: "Product/Goods Count & Tracking",
      details:
        " Shipment On-Off Loading Monitoring Product Compromise Detection",
    },
    {
      tittle: "ENERGY",
      img: "https://plainsight.ai/wp-content/uploads/2020/08/oil-main-opt.jpg",
      subtitle: "Real-Time Leak Detection",
      details: "Remote Tank-Level Monitoring Proactive Maintenance",
    },
    {
      tittle: "Agriculture",
      img: "https://plainsight.ai/wp-content/uploads/2020/08/ag-main-opt.jpg",
      subtitle: "Livestock Count & Health Monitoring",
      details: "Crop Disease Detection ,Product Grading & QA/QC Packaging",
    },
    {
      tittle: "Construction",
      img: "https://plainsight.ai/wp-content/uploads/2020/08/construction-main-opt.jpg",
      subtitle: "Worker Productivity Optimization",
      details:
        "Process/Task Monitoring & Compliance Worker Count & Tracking By Trade",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-widest text-center mt-8">
        Vision AI Simply Done
      </h1>
      <p className="font-light  text-sm text-center mt-3 mb-8">
        Every team within organizations across industries can benefit from
        vision AI solutions.
      </p>
      <div className="grid grid-cols-3 gap-x-4 gap-y-10  ">
        {visions.map((vision) => (
          <div className="shadow-2xl shadow-slate-400 rounded-lg">
            <div className="rounded-t-lg">
              <img className="rounded-t-lg" src={vision.img} alt="" srcset="" />
            </div>
            <div className="mx-2 py-2">
              <h1 className="text-center font-bold my-3">{vision.tittle}</h1>
              <h2 className="text-center font-light my-2">{vision.subtitle}</h2>
              <p className="text-center font-light text-sm my-2">
                {vision.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeVisionAi;
