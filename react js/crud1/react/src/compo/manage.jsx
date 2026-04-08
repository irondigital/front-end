import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Manage() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/auth/api/studentdata"
        );
        setdata(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {data.map((a) => (
            <tr key={a._id}>
              <td>{a.name}</td>
              <td>{a.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Manage;