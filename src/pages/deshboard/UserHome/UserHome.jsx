import useAuth from "../../../components/hooks/useAuth";


const UserHome = () => {
    const {user}=useAuth()
    return (
        <div>
            <h2>Hi, WelCome Back <span>{user?.displayName? user?.displayName: 'your hame page'} </span></h2>
        </div>
    );
};

export default UserHome;