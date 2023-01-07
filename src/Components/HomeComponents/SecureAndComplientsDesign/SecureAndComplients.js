import React from "react";

const SecureAndComplients = () => {
  const secures = [
    {
      name: "SOC 2 | TYPE 2",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70a2a0aa244597f77120b_Green-Check.svg",
    },
    {
      name: "SSO",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70a2a0aa244597f77120b_Green-Check.svg",
    },
    {
      name: "AWS",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70c038d62e6b5d8bdcfa8_AWS.svg",
    },
    {
      name: "HIPAA",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70a2a0aa244597f77120b_Green-Check.svg",
    },
    {
      name: "2FA",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70a2a0aa244597f77120b_Green-Check.svg",
    },
    {
      name: "Azure",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70bf6860562c8b50b5c20_Microsoft_Azure_Logo.svg",
    },
    {
      name: "GDPR",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70a2a0aa244597f77120b_Green-Check.svg",
    },
    {
      name: "CCPA",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70a2a0aa244597f77120b_Green-Check.svg",
    },
    {
      name: "GCP",
      icon: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63a70c0360216a7ff8829c58_GCP.svg",
    },
  ];
  return (
    <div>
      <div className="flex justify-between  mt-10 shadow-2xl shadow-slate-400 rounded-lg">
        <div className="flex items-center pl-2 ">
          <img
            width={150}
            className="mr-2"
            src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/63aaebf8d2800e34b95a74b1_fingerprint%20css.svg"
            alt=""
          />
          <h1 className="text-2xl font-bold ">
            Secure and compliant <br></br> by design
          </h1>
        </div>
        <div className="">
          <div className="flex justify-between mr-6 mt-2">
            <p className="font-light">Security Compliance</p>
            <p className="font-light">Data Integrations</p>
          </div>
          <div className="grid grid-cols-3 mt-3 ">
            {secures.map((secure) => (
              <div className="flex ">
                <img className="ml-3" src={secure.icon} alt="" srcset="" />
                <h1 className="ml-[10px] ">{secure.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10">
        <h1 className=" text-4xl font-bold text-white bg-[#1f1a2e] h-32 flex items-center justify-center">
          {"Your AI deserves {Best Solution}"}
          <button
            type="button"
            className="text-sm bg-cyan-700 py-2 px-3 ml-2 hover:bg-cyan-500"
          >
            Request Demo
          </button>
        </h1>
      </div>
    </div>
  );
};

export default SecureAndComplients;
