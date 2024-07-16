import React, { useContext} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Context } from "../main";

function Navbar() {
    const navigateTo = useNavigate();
    const {isUserAuthenticated, setIsUserAuthenticated} = useContext(Context);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(
                "http://localhost:8000/api/v1/user/logoutUser",
                {
                    withCredentials: true,
                }
            );

            toast.success("User logout successfullt");
            setIsUserAuthenticated(false);
            navigateTo("/");
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const goToLogin = () => {
        navigateTo("/login");
    };

    return (
        <nav className="flex flex-wrap items-center justify-between p-4 bg-black text-white">
            <div className="flex items-center">
                <Link to='/' className="text-2xl font-bold">STEP SNEAKERS</Link>
            </div>

            <div className="flex flex-wrap space-x-4">
                <Link to="/collection" className="hover:underline">Collection</Link>
                <Link to="/contact" className="hover:underline">Contact Us</Link>
                <Link to='/profile' className="hover:underline">Profile</Link>
            </div>

            <div className="flex flex-wrap space-x-4">
                
                {isUserAuthenticated ? (
                    <button className="hover:underline font-semibold" onClick={handleLogout}>
                        LOGOUT
                    </button>
                ) : (
                    <button className="hover:underline font-semibold" onClick={goToLogin}>
                        LOGIN
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
