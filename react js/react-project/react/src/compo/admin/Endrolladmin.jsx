import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../user/navbar";
import Footer from "../user/footer";
import { useParams } from "react-router-dom";

function ManageEnrollments() {
  const [students, setStudents] = useState([]);
  const i = 0;
  const {id} = useParams();

  const fetchEnrollments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/api/Studentdata");
      setStudents(res.data);
      // console.log(res.data)
    } catch (error) {
      console.error("Error fetching enrollments");
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  

  const handledelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/auth/api/Studentdata/${id}`);
    fetchEnrollments();  // reload data from server
  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="bg-white shadow-lg rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-blue-600 mb-6">
            Manage Enrollments
          </h1>

          {students.length === 0 ? (
            <p className="text-gray-500">No enrollments found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-left">
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Course</th>
                    <th className="p-3">Message</th>
                   
                    <th className="p-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student,i) => (
                    <tr key={student._id} className="border-t hover:bg-gray-50">
                      <td className="p-3">{i+1}</td>
                      <td className="p-3">{student.name}</td>
                      <td className="p-3">{student.email}</td>
                      <td className="p-3">{student.phone}</td>
                      <td className="p-3">{student.course}</td>
                      <td className="p-3">{student.message}</td>
                      
                      <td className="p-3">
                        <button
                          onClick={() => handledelete(student._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManageEnrollments;