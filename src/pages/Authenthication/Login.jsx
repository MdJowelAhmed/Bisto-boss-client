import { useContext, useEffect, useRef, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Share/SocialLogin";


const Login = () => {
    const {signIn}=useContext(AuthContext)
    const captchaRef=useRef(null)
    const navigate=useNavigate()
    const location=useLocation()
    const [disabled,setDisabled]=useState(true)
    const from=location.state?.from?.pathname || '/'

    // console.log('state from login',location.state)
    useEffect(()=>{
        loadCaptchaEnginge(5); 
    },[])
   
    const handleCaptchaValidate=()=>{
        const user_captcha_value=captchaRef.current.value;
        console.log(user_captcha_value)
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
    const handleLogin=e=>{
        e.preventDefault()
        const form =e.target;
        const email=form.email.value;
        const password=form.password.value;
        const loginUser={email,password}
        console.log(loginUser)

        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                </div>
                <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center p-4">Login now!</h1>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input  type="text" ref={captchaRef} name="captcha" placeholder="captcha" className="input input-bordered" required />
                           
                        </div>
                        <button onClick={handleCaptchaValidate} className="btn btn-xs">Validate</button>
                        <div className="form-control mt-6">
                           
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <div className="text-center p-3">
                        <p>Did not any account? please <Link to='/register' className="text-blue-600">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;