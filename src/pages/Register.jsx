import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import SocialLogin from "../Share/SocialLogin";



const Register = () => {
    const {createUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    const axiosPublic=useAxiosSecure()

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm()

    //   const onSubmit = (data) =>{ 
    //     console.log(data)

    //   }

    const handleCreateUser=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const user={name,email,password}
        console.log(user)
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            const userInfo={
                name,email
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                if(res.data.insertedId){
                    Swal.fire({
                        title: "user added!",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                      navigate(from, {replace:true})
                }
            })
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center ">
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  name="password" placeholder="password" className="input input-bordered"  />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                          
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;