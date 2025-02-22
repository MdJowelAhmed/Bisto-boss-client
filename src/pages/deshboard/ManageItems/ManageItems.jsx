import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/Share/Section title/SectionTitle";
import useMenu from "../../../components/hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, ,refetch] = useMenu()
    const axiosSecure=useAxiosSecure()

    const handleDeleteItems = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {
                const res=await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if(res.data.deletedCount >0){
                    refetch()
                     Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                }
               
            }
        });
    }
    return (
        <div>
            <SectionTitle subHeader='Hurry Up' header='Manage Items'></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}

                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-lg"><FaEdit className="text-3xl"> </FaEdit> </button>
                                    </td>
                                    <td>
                                        <button onClick={()=>handleDeleteItems(item)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-3xl"></FaTrashAlt></button>
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

export default ManageItems;