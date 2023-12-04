import React from "react";

const Contact = () => {
  return (
    <div className="relative h-96 w-full bg-gradient-to-tl from-purple-700 to-green-500">
      <img
        src="https://images.pexels.com/photos/18145061/pexels-photo-18145061/free-photo-of-purple-impressive-cloud-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="absolute h-full w-full object-cover mix-blend-soft-light"
        alt="image"
      />
      <div className="p-24">
        <h1 className="text-6xl font-bold text-green-400">Headline</h1>
        <h2 className="mt-5 text-3xl font-light text-blue-200">
          Some really great stuff goes here
        </h2>
      </div>
    </div>
  );
};

export default Contact;
