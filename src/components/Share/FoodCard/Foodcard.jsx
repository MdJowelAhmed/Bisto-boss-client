import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const Foodcard = ({item}) => {
    const {user}=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const axiosSecure=useAxiosSecure()
    const [,refetch]=useCart()

    const {name,image,price,recipe,_id}=item;


    const handleAddToCart=()=>{
       
        if(user && user.email){
            const itemsMenu={
                menuId:_id,
                name,
                email:user.email,
                image,price
            }

            axiosSecure.post('/carts',itemsMenu)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        title:`${name} added cart `,
                        text: "You clicked the button!",
                        icon: "success"
                      });
                      refetch()
                }
            })
        }else{
            Swal.fire({
                title: "Are You Not Login",
                text: "Please first login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 
                     navigate('/login', { state: { from: location } })
                //   console.log('state from login', from)
                }
              });
        }
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-800 opacity-50 text-white absolute right-0 mr-4 mt-4 px-3">{price} </p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe} </p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;