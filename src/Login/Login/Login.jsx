import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen">
      <div className="md:flex justify-between items-center gap-12 px-3">
        <div className="md:w-1/2">
          <img src="https://i.ibb.co/hXmBqFz/image.png" alt="" />
        </div>
        <div className="md:w-1/2 border rounded-lg bg-base-100">
          <div className=" text-center">
          <h1 className="text-3xl my-5 font-bold">Login</h1>
          <img className="w-16 mx-auto" src="https://i.ibb.co/NNQM1N7/image.png" alt="" />
          </div>
          <form className="card-body">
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
                type="password"
                name="password"
                placeholder="enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
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
              <button>
                <img
                  src="https://i.ibb.co/7z0WMdz/image.png"
                  alt=""
                  className="w-6"
                />
              </button>
              <button>
                <img
                  src="https://i.ibb.co/0q2w0Ry/image.png"
                  alt=""
                  className="w-6"
                />
              </button>
              <button>
                <img
                  src="https://i.ibb.co/KjQdbSD/image.png"
                  alt=""
                  className="w-6"
                />
              </button>
            </div>
            <Link to="/register">
              Do not have an account?{" "}
              <span className="text-orange-600 font-bold">Sign Up</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;