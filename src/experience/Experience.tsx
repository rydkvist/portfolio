import React from "react";

const Item = () => {
  return (
    <div
      className="container w-1/2 h-auto bg-blue-100 px-4 py-2 rounded"
      style={{ fontFamily: "Source Sans Pro" }}
    >
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-lg text-black font-semibold uppercase">Founder</h2>
        <h3 className="text-sm text-gray-500">apr 2014 - may 2015</h3>
      </div>
      {/* <div className="rounded-md bg-blue-600 bg-opacity-75 py-1 px-2 inline-block mt-1">
        <p className="text-white text-sm font-medium">SharkCraft</p>
      </div> */}
    </div>
  );
};

const Experience = () => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <h1 className="text-4xl text-center mt-8">Work Experience</h1>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Item />
      </div>
    </div>
  );
};

export default Experience;
