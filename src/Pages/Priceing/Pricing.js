import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const pricing = [
    {
      name: "Free",
      title: "Ideal for early-stage startups and academics/researchers",
      button: [{ name: "Startup" }, { name: "Academic" }],
      offer: [
        {
          name: "Image editor (supports image, video, PDF, and DICOM upload)",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Project management",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Team and user management",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Integrations with AWS, GCP, and Azure",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "On-premise data support",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Simple analytics",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Up to 5 users",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Up to 50.000 items",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Email support",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
      ],
    },
    {
      name: "Pro",
      title:
        "Get ready to scale your most sophisticated AI projects and MLOps needs.",
      button: [{ name: "Request Demo" }],
      specialFeture: "All of Free +",
      offer: [
        {
          name: "Annotation services",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Video, text, audio, and LiDAR editors",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Tiled and multilayer image editors",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "AI data management and curation",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Data versioning and debugging",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Model management and  versioning",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Python SDK",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Advanced insights",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Unlimited users",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "AI customer success",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
      ],
    },
    {
      name: "Enterprise",
      title:
        "Best suited for well-established, recurring, and high-volume AI projects",
      button: [{ name: "Contact Sales" }],
      specialFeture: "All of Pro +",
      offer: [
        {
          name: "Annotation services with guaranteed SLAs",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "PDF, DICOM, time series, HTML, or custom editors",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Custom integrations",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "AI data management and curation",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Data versioning and debugging",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Model management and  versioning",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Python SDK",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Advanced insights",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
        {
          name: "Enterprise customer support (24/7)",
          imge: "https://uploads-ssl.webflow.com/612770618d97595db63a9470/63932a25100ead52aacd1448_s-check.svg",
        },
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-center text-3xl my-10 font-semibold">
        Choose the plan that fits your needs
      </h1>
      <div className="grid grid-cols-3 gap-4 my-8">
        {pricing.map((price) => (
          <di className="shadow-2xl rounded-2xl pl-5 border-red-300 border">
            <h1 className="text-center text-3xl font-semibold mt-8 mb-4">
              {price.name}
            </h1>
            <p className="text-sm text-center font-medium my-4 mx-2">
              {price.title}
            </p>
            <div className="flex justify-center">
              {price.button.map((b) => (
                <button className="border-red-400 border-2 px-2 mx-2 py-2 mt-2 rounded-lg text-red-400 ">
                  {b.name}
                </button>
              ))}
            </div>
            <h1 className="text-xl font-bold text-violet-500 mt-3 mb-5">
              {price.specialFeture}
            </h1>
            {price.offer.map((of) => (
              <div className="flex my-4">
                <img src={of.imge} alt="" className="mr-3" />
                <h1>{of.name}</h1>
              </div>
            ))}
          </di>
        ))}
      </div>
      <h1 className="text-center font-light mt-8">
        Join hundreds of revolutionizing organizations in building disruptive AI
        products
      </h1>
      <div className="marqueeimagediv image flex justify-center mt-8">
        <img
          src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/637348322bd81e0e3517e15a_Motorola.svg"
          alt=""
        />
        <img src="https://cdn.supervise.ly/img/engie.288d023.png" alt="" />
        <img src="https://cdn.supervise.ly/img/bitwise.1b06c96.png" alt="" />
        <img
          src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6373483208048f5ecee2000e_LG.svg"
          alt=""
        />
        <img src="https://cdn.supervise.ly/img/cnh.6307774.png" alt="" />
        <img
          src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/63734832534dd2438023c68a_Samsung%20B%26W.svg"
          alt=""
        />
        <img src="https://cdn.supervise.ly/img/rz.6d5191c.png" alt="" />
      </div>

      <div>
        <h1 className="text-3xl font-semibold my-8">Compare plans</h1>
        <h1 className="text-2xl font-bold my-8 text-fuchsia-800">
          DATA STUDIO
        </h1>
        <table className="table w-full">
          <thead className="table-header-group">
            <tr className="table-row">
              <th>Annotation Software</th>
              <th>Free</th>
              <th>Pro</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="text-xs">
                Image editor (supports image, video, PDF, and DICOM upload)
              </td>
              <td>
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">
                Image editor (supports high-resolution tiled and multilayer
                files)
              </td>
              <td>-</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">Video editor</td>
              <td>-</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">Text editor</td>
              <td>-</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">3D point cloud (radar, LiDAR)</td>
              <td>-</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">Audio</td>
              <td>-</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">
                PDF (document) Document categorization and nested{" "}
              </td>
              <td>-</td>
              <td>-</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">DICOM (including 3D volumetric)</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">Time series</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">HTML/Website</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
            <tr>
              <td className="text-xs">Custom editor upon request</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
              <td>-</td>
              <td>
                {" "}
                <img
                  src="https://uploads-ssl.webflow.com/612770618d97595db63a9470/6399c8a2280cfc205503d11b_Pricing%20Table%20Check%20Sign.svg"
                  alt=""
                  srcset=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
