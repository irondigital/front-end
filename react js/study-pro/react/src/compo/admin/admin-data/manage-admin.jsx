import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../user/navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const ManageAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/auth/api/addadmin"
        );
        setAdmins(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAdmins();
  }, []);
    
const handledelete = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/auth/api/addadmin/${id}`
    );

    setAdmins((prev) => prev.filter((admin) => admin._id !== id));
  } catch (err) {
    console.log(err);
  }
};
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Manage Admins
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {admins.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center p-4">
                      No admins found
                    </td>
                  </tr>
                ) : (
                  admins.map((admin, i) => (
                    <tr
                      key={admin._id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">{i + 1}</td>
                      <td className="p-3">{admin.name}</td>
                      <td className="p-3">{admin.email}</td>
                      <td className="p-3">{admin.role}</td>
                      <td className="p-3 text-center space-x-2">

                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                          onClick={() =>
                            navigate(
                              `/admin/admin-data/manage-admin/update-admin/${admin._id}`
                            )
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                         onClick={() => handledelete(admin._id)}
                        >
                          Delete
                        </button>

                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAdmin;