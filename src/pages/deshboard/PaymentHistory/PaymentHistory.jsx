import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../components/hooks/useAuth";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: payment = [] } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            return (res.data)
        }

    })
    return (
        <div>
            <h2>total Payment: {payment.length} </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Price</th>
                                <th>TransactionID</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payment.map((item,index)=> <tr className="bg-base-200" key={item._id}>
                                <th>{index +1 }</th>
                                <td>{item.price} </td>
                                <td>{item.transactionId} </td>
                                <td>{item.status} </td>
                            </tr>)}
                           
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;