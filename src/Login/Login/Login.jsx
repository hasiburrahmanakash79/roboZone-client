import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import Lottie from "lottie-react";
import loginLottie from "../../../src/assets/login.json";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  useTitle('login')

  const { logInUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // googleLogin
  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result => {
      console.log(result);
      navigate(from, {replace: true})
    })
    .catch(error => console.log(error))
  }
    //Email password
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
        Swal.fire({
          showConfirmButton: false,
          timer: 1000,
          title: "Login Successful",
          icon: "success",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="md:flex justify-between items-center gap-12 px-3">
        <div className="md:w-1/2">
        <Lottie
              animationData={loginLottie}
              loop={true}
              className="w-full md:h-[900px]"
            />
        </div>
        <div className="md:w-1/2 border rounded-lg bg-base-100">
          <div className=" text-center">
            <h1 className="text-3xl my-5 font-bold">Login</h1>
            <img
              className="w-16 mx-auto"
              src="https://i.ibb.co/NNQM1N7/image.png"
              alt=""
            />
          </div>
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passShow ? "text" : "password"}
                name="password"
                placeholder="enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a className="label-text-alt link link-hover">
                  <p onClick={() => setPassShow(!passShow)}>
                    <small>
                      {passShow ? (
                        <span>Hide Pass</span>
                      ) : (
                        <span>Show Pass</span>
                      )}
                    </small>
                  </p>
                </a>
              </label>
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Login</button>
            </div>
          </form>
          <div className="text-center mb-7">
            <p className="font-semibold">Or Sign In with</p>
            <div className="flex items-center justify-center gap-4 my-4">
              <button onClick={() => handleGoogleLogin()}>
                <img
                  src="https://i.ibb.co/KjQdbSD/image.png"
                  alt=""
                  className="w-6"
                />
              </button>
            </div>
            <Link to="/signUp">
              Do not have an account?{" "}
              <span className="text-orange-600 font-bold">SignUp</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
