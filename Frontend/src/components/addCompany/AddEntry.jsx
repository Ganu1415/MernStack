import React, { useEffect, useState } from "react";
import { createData, fetchData } from "../../api/api";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [formData, setFormData] = useState({
    companyName: "",
  });
  const navigate =useNavigate()

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data",formData)
    try {
      await createData(formData); // ✅ Use the function instead of axios.post
      
      navigate("/");
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };

  
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1>Add Company</h1>

      <form onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Job Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Enter Job Title"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          
        </div>
        <div className="mb-6 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEntry;
