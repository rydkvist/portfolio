import React from "react";

const Home = () => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-8">
          <img
            className="w-48 md:w-64 h-48 md:h-64 rounded-full border border-white"
            src="/favicon.ico"
            alt="Niklas Rydkvist"
          />
        </div>
        <h1 className="text-3xl mt-8">Hey there! I'm Niklas.</h1>
        <h3 className="text-2xl mt-2">I'm software developer from Sweden!</h3>
      </div>
    </div>
  );
};

export default Home;
