import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import API from "../api"; // ✅ Import API from api.js

function AddJob() {
  const [formData, setFormData] = useState({
    job_number: "",
    job_title: "",
    job_start_date: "",
    job_close_date: "",
    experience_required: false,
    number_of_openings: 1,
    job_notes: "",
  });

//   const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting Data:", formData);
      await API.post("/jobs", formData); // ✅ Use API instead of axios
    //   navigate("/");
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
        <h1>Add Job</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Job Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job_number">
            Job Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="job_number"
            name="job_number"
            type="text"
            placeholder="Enter Job Number"
            value={formData.job_number}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job_title">
            Job Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="job_title"
            name="job_title"
            type="text"
            placeholder="Enter Job Title"
            value={formData.job_title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Start Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job_start_date">
            Job Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="job_start_date"
            name="job_start_date"
            type="date"
            value={formData.job_start_date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Close Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job_close_date">
            Job Close Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="job_close_date"
            name="job_close_date"
            type="date"
            value={formData.job_close_date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Notes */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job_notes">
            Job Notes
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="job_notes"
            name="job_notes"
            placeholder="Enter Job Notes"
            value={formData.job_notes}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mb-6">
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
}

export default AddJob;
