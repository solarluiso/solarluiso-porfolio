import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-tl from-purple-700 to-green-500 h-96 w-full relative">
      <img
        src="https://images.pexels.com/photos/18145061/pexels-photo-18145061/free-photo-of-purple-impressive-cloud-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="w-full h-full object-cover absolute mix-blend-soft-light"
        alt="image"
      />
      <div className="p-24">
        <h1 className="text-green-400 text-6xl font-bold">Headline</h1>
        <h2 className="text-blue-200 text-3xl font-light mt-5">
          Some really great stuff goes here
        </h2>
      </div>
    </div>
  );
};

export default Contact;
