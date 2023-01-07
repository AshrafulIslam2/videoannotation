import React from "react";

const HighThought = () => {
  const services = [
    {
      name: "Quick integration",
      detail:
        "Drag and drop raw data into the tool or use our secure APIs to integrate the data labeling platform with your ML pipelines.",
      image:
        "https://uploads-ssl.webflow.com/60f7efa6a00ee7409ecf4fa8/60f81e69e3bb2700c150e264_Group%2094.svg",
    },
    {
      name: "Simple project setup",
      detail:
        "Configure labeling tasks and set up custom workflows for all your different projects or use our tried and tested built-in workflows.",
      image:
        "https://uploads-ssl.webflow.com/60f7efa6a00ee7409ecf4fa8/60f82178908660a383e09a4b_Project%20Set%20up.svg",
    },
    {
      name: "Complete Quality Control",
      detail:
        "Our suite of QC tools and workflow like sampling and comments will easily verify the quality of labeled data to maintain the highest standard.",
      image:
        "https://uploads-ssl.webflow.com/60f7efa6a00ee7409ecf4fa8/60f8218db9f947a469c75648_tracking-1.svg",
    },
    {
      name: "Manage your team with ease",
      detail:
        "Assign and manage multiple workforces on a single, web-based platform, ensuring that your data labeling pipelines are more predictable.",
      image:
        "https://uploads-ssl.webflow.com/60f7efa6a00ee7409ecf4fa8/60f8218d3895c481b52794fd_team.svg",
    },
    {
      name: "Easy Tracking and Monitoring",
      detail:
        "Track your annotation progress and monitor workforce’s productivity through our real-time analytics dashboard. Effortlessly improve data performance via continuous reviews and feedback.",
      image:
        "https://uploads-ssl.webflow.com/60f7efa6a00ee7409ecf4fa8/60f8218db9f94760d2c75649_tracking.svg",
    },
    {
      name: "Flexible Deployment and Configurations",
      detail:
        "On-premises offering for deployment in your cloud infrastructure, on your own virtualized infrastructure, or on your own hardware.",
      image:
        "https://uploads-ssl.webflow.com/60f7efa6a00ee7409ecf4fa8/60f8218c3895c47ffb2794fc_Configuration.svg",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-32">
        Made with high throughput and enterprise scale in mind
      </h1>
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 mb-12">
        {services.map((service) => (
          <div className="flex flex-col justify-start items-start bg-slate-100 py-4 shadow-xl">
            <img src={service.image} alt="" srcset="" className="ml-3" />
            <h1 className="font-bold my-3 mx-3">{service.name}</h1>
            <p className="text-xs text-start font-light mx-3">
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

export default HighThought;
