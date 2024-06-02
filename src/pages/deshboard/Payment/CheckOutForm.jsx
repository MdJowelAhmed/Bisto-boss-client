import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../components/hooks/useCart"
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import useAuth from "../../../components/hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [transactionId,setTransactionId]=useState('')
    const axiosSecure=useAxiosSecure()
    const [cart,refetch]=useCart()
    const [clientSecret,setClientSecret]=useState('')
    const navigate=useNavigate()
    const {user}=useAuth()
    const totalPrice=cart.reduce( (total,item)=>total+item.price,0)

    useEffect(()=>{
       if(totalPrice >0){
        axiosSecure.post("/create_payment_intent",{price:totalPrice})
        .then(res=>{
            // console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
       }
    },[axiosSecure,totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('payment Error'.error)
            setErrorMessage(error.message)
        }
        else{
            console.log('payment success ',paymentMethod)
            setErrorMessage('')
        }
        const {paymentIntent,confirmError}=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || 'anonymous',
                    name:user?.displayName || "anonymous"
                }
            }
        })
        if(confirmError){
            console.log('confirm error',confirmError)
        }
        else{
            console.log('paymentIntent',paymentIntent)
            if(paymentIntent.status==='succeeded'){
                setTransactionId(paymentIntent.id)
                const payment={
                    email:user?.email,
                    transactionId:paymentIntent.id,
                    price:totalPrice,
                    status:'pending',
                    date:new Date(),
                    cartIds:cart.map(item=>item._id),
                    menuItemIds:cart.map(item=>item.menuId)
                }
                const res=await axiosSecure.post('/payment',payment)
                console.log('payment save', res.data)
                refetch()
                if(res.data.paymentResult.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks for payment",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/deshboard/paymentHistory')
                }
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146'
                        },
                    },
                }}>

                </CardElement>
                <button className="btn btn-secondary my-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="bg-red-600">{errorMessage} </p>
            </form>

                <div>
                    {
                        transactionId && <p>Your transactionId: <span className="text-xl text-green-600">{transactionId} </span></p>
                    }
                </div>
        </div>
    );
};

export default CheckOutForm;