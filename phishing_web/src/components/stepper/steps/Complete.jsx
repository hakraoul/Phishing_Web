import React, { useContext, useState } from "react";
import { StepperContext } from "../context";

export default function Complete() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
      console.log(userData);
    };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // You can handle the file submission logic here
    if (selectedFile) {
      setUserData({ ...userData, file: selectedFile });
      console.log(selectedFile);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col sm:flex-row rounded-lg shadow-lg p-10 m-10"
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 sm:mr-4"
        />
        <div className="flex justify-center sm:justify-start">
          <button
            onClick={() => handleSubmit}
            className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
