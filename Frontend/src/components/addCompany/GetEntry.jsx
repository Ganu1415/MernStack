import React, { useEffect, useState } from "react";
import AddEntry from "./AddEntry";
import { Link } from "react-router-dom";
import { fetchData } from "../../api/api";

const GetEntry = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
  return (
    <>
    <div className="container">

   
      <h3 className="text-xl font-bold text-center my-2">GetEntry</h3>
      <div className="flex justify-end mr-1.5">
        <Link to={"/add"} className="bg-blue-500 py-2 px-2.5 rounded-xl">
          Add Company
        </Link>
      </div>
     {/* get all company data */}

     <div>
      {data.length>0 && data.map((item)=>(
        <h1 key={item.id}>{item.companyName}</h1>
      ))}

      <table className="border-1">
        <thead >
          <tr>
            <th>Sr.No</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
     </div>
     </div>
    </>
  );
};

export default GetEntry;
