import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure=useAxiosSecure()

    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} Admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({

                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }
                    })
            }
        });
    }

    return (
        <div >
            <div className="flex justify-between">
                <h2 className="text-2xl ">All Users</h2>
                <h2 className="text-2xl ">Total Users : {users.length}</h2>
            </div>
            <div className="my-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email} </td>
                                    <td>
                                       { user.role ==='admin'? 'admin': <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-lg"><FaUsers className="text-3xl"></FaUsers></button>}
                                    </td>

                                    <td>
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-3xl"></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;