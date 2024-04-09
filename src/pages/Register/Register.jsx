import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    // console.log(createUser);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                // Signed up 
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center my-10">
                    Please Register
                </h2>
                <form onSubmit={handleRegister} className="card-body mx-auto md:w-3/4 lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                    </div>
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
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center">Already have an account <Link to="/login" className="underline font-semibold text-blue-500">LogIn</Link></p>
            </div>
        </div>
    );
};

export default Register;