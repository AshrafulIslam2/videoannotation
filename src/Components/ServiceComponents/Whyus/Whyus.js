import React from "react";

const Whyus = () => {
  const services = [
    {
      name: "Pixel and Point Level Handling",
      detail:
        "Only ADAS and AV focused tooling company that handles pixel & point level for thousands of frames.",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/62313e2143a07cbf9d69f624_radar-vehicle-calibration.svg",
    },
    {
      name: "Custom Engineering Team",
      detail:
        "Dedicated and exclusive frontend, backend, AI, Product and Project management teams.Flexible workforce models",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/6334534ecbd77cc7e559e50c_custom-engineering-team.svg",
    },
    {
      name: "Advanced Reporting",
      detail:
        "To support all business needs to give clients key information with a click of a button",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/6334534e7d2537cf7ba1ea1e_advance-reporting.svg",
    },
    {
      name: "Lifecycle task-allocation and Management",
      detail:
        "Complete lifecycle of tasks made to support huge annotation teams, with the ability to streamline and automate your workflow experience",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/6334534e4c0c6110b2861e05_database-management.svg",
    },
    {
      name: "Quality Assurance",
      detail:
        "Built-in QA Flow allows enterprises to easily verify the quality of processed data to maintain quality standards with features like sub-sampling, comments, and automatic checker",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/6334534e18df6dc1fc5f0e04_quality-assurance.svg",
    },
    {
      name: "Automation",
      detail:
        "Ai Sense is our smart labeling function that pre-labels the data to increase efficiency & reduce man-hours by more than 85%",
      image:
        "https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/6334534e300af9baccc16893_automation.svg",
    },
  ];
  return (
    <div>
      <div className="my-24 bg-slate-100 py-8">
        <h1 className="text-center tracking-[5px] font-extrabold text-xl">
          Why Us
        </h1>
        <h1 className="font-bold  text-center my-3">
          Annotation - The Deepen Advantage
        </h1>
        <p className="text-center w-8/12 mx-auto font-bold  text-xs leading-relaxed">
          Combining data operation efficiencies with an experienced labelling
          team and AI-powered annotation tool, we are able to provide our
          customers with the highest ROI and quickest turnaround - all while
          maintaining high quality output.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-6 mb-6">
        {services.map((service) => (
          <div className="flex flex-col justify-center items-center bg-slate-100 py-4 shadow-xl">
            <img src={service.image} alt="" srcset="" />
            <h1 className="font-bold my-3 mx-3">{service.name}</h1>
            <p className="text-xs text-center font-light mx-3">
              {service.detail}
            </p>
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-2 gap-x-10 mt-48 mb-16">
        <div>
          <h1 className="font-bold text-3xl">Get in touch!</h1>
          <h1 className="font-light text-sm my-4">
            Feel free to reach out to us for a quote, business inquiry, customer
            support or other help using the contact form or email or call us
            directly.
          </h1>
          <div className="flex my-3 ">
            <button className="flex items-center  bg-blue-50 py-2 px-2 pr-6 rounded-md mr-3">
              <img
                className="mr-3"
                src="https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/615f28288b2a3141d4799e3d_email_black_24dp.svg"
                alt=""
              />
              <div>
                <h1 className="text-start text-xs">Email</h1>
                <p className="text-xs font-bold">ashrafulislamsay7@gmail.com</p>
              </div>
            </button>
            <button className="flex items-center  bg-blue-50 py-2 px-3  rounded-md pr-6">
              <img
                className="mr-3"
                src="https://uploads-ssl.webflow.com/5f16a5bcdcd3b33f5900bc00/615f2828f217ca9d4a655017_call_black_24dp.svg"
                alt=""
              />
              <div>
                <h1 className="text-start text-xs">Phone</h1>
                <p className="text-xs font-bold">+8801750514197</p>
              </div>
            </button>
          </div>
        </div>
        <form
          novalidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full shadow-sm focus:ring  bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full shadow-sm focus:ring  bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              className="block w-full focus:ring  bg-gray-100"
            ></textarea>
          </label>
          <button type="button" className="bg-cyan-700 py-3 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Whyus;
