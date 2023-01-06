import React from "react";

const Button = (props) => {
  const titile = props.titile;
  const color = props.color;
  console.log(color);
  return (
    <button className="bg-cyan-700 my-2 p-2 font-bold font-mono text-white hover:bg-cyan-300 shadow-black shadow-2xl">
      {titile}
    </button>
  );
};

export default Button;
