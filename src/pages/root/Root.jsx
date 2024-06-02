import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Share/Navbar";
import Footer from "../../Share/Footer";


const Root = () => {
    const location=useLocation()
    const noHeaderFooter=location.pathname.includes('login')
    return (
        <div>
           { noHeaderFooter || <Navbar></Navbar>}
            <div className="mx-12 ">
                <Outlet></Outlet>
            </div>
            {noHeaderFooter|| <Footer></Footer>}

        </div>
    );
};

export default Root;