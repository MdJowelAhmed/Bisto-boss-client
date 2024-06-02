import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../components/hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
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
                axiosSecure.delete(`/carts/${id}`)
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
        <>
            <div>
                <div className="flex justify-around">
                    <h2 className="text-3xl">Total Order : {cart.length}</h2>
                    <h2 className="text-3xl">Total Price : {totalPrice}</h2>
                  {
                    cart.length? <Link to='/deshboard/payment'> <button className="btn btn-success ">Pay</button> </Link>: <button className="btn btn-success " disabled>Pay</button>
                  }
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No  </th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    cart.map((item, index) => <tr key={item._id}>
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
                                        <td className="text-2xl">${item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-3xl"></FaTrashAlt></button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCart;