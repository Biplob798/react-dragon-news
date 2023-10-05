import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  console.log("login page", location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    console.log(form);

    logIn(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after login

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="border">
        <h2 className="text-2xl text-center my-10">Please Login</h2>
        {/* login form  */}

        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white">Login</button>
          </div>
        </form>
        <p className="text-center my-6">
          Do not have a account? please
          <Link className="font-bold text-red-600" to="/register">
            Register
          </Link>
        </p>
      </div>
      {/* <Helmet>
        <title>Dragon News | Home</title>
      </Helmet> */}
    </div>
  );
};

export default Login;
