import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Share/Section title/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API)
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeader='select your Option' header='payment'></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                   <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;