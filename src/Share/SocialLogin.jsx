import { FaGoogle } from "react-icons/fa6";
import useAuth from "../components/hooks/useAuth";
import useAxiosPublic from "../components/hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {signInWithGoogle}=useAuth()
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()

    const handleSocialLogin=()=>{
        signInWithGoogle()
        .then(result=>{
            // console.log(result.user)
            const userInfo={
                email:result.user.email,
                name:result.user.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
        <div>
            <button onClick={handleSocialLogin} className="m-4 btn text-center"><FaGoogle></FaGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;