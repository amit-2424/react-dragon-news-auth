import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Location in the LogIn page:", location);

    const handleLogIn = (e) =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get("email"));
        const email = form.get("email");
        const password = form.get("password");
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state  ?  location.state : "/");
        })
        .then(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center my-10">
                    Please LogIn
                </h2>
                <form onSubmit={handleLogIn} className="card-body mx-auto md:w-3/4 lg:w-1/2">
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
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not have an account <Link to="/register" className="underline font-semibold text-blue-500">Register</Link></p>
            </div>
        </div>
    );
};

export default LogIn;