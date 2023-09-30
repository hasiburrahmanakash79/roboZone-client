import {useQuery } from 'react-query'
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://robot-world-server.vercel.app/users");
    return res.json();
  });

  const handleAdmin = (user) => {
    fetch(`https://robot-world-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: `${user.displayName} is admin now`,
            icon: "success",
          });
        }
      });
  };

  const handleInstructor = (user) => {
    fetch(`https://robot-world-server.vercel.app/users/seller/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: `${user.displayName} is admin now`,
            icon: "success",
          });
        }
      });
  };

  const handleDeleteUser = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to remove this user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://robot-world-server.vercel.app/user/${user._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            refetch()
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'User has been deleted.', 'success')
            }
          })
      }
    })
  }

  

  return (
    <div className="p-5">
      <div className="overflow-x-auto">
        <table className="table md:w-full">
          {/* head */}
          <thead className="bg-slate-200">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <th>
                  <div className="avatar online">
                    <div className="w-10 border-2 border-green-600 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </th>
                <td>{user?.displayName}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "ADMIN"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn btn-outline btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "seller" ? (
                    "SELLER"
                  ) : (
                    <button
                      onClick={() => handleInstructor(user)}
                      className="btn btn-outline btn-xs"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user)}
                    className="text-white bg-red-700 p-2 rounded"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
