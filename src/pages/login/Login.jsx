import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginEmail, loginWithGithub, loginWithGoogle } =
    useContext(AuthContext);
  //   console.log(loginEmail);
  const [logged, setLogged] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setLogged(loggedUser);
        navigate(from, { replace: true });
        // console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error);
      });
  };

  const handleloginGoogle = () => {
    loginWithGoogle().then((result) => {
      const isLogin = result.user;
      console.log(isLogin);
    });
  };

  const handleLoginGithub = () => {
    loginWithGithub()
      .then((result) => {
        const isLogin = result.user;
        console.log(isLogin);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:flex flex-col items-center my-9">
      <form onSubmit={handleLoginEmail} className="md:w-[25%] py-5 mx-10">
        <div className="mb-2">
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            className="w-full border-b-2 border-warning px-2 py-1 rounded-md bg-transparent "
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="">Password</label> <br />
          <input
            type="password"
            className="w-full border-b-2 border-warning px-2 py-1 rounded-md bg-transparent "
            name="password"
            required
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <input
            type="submit"
            value="Login"
            className="w-[75%] px-3 border border-warning rounded py-2 hover:font-semibold cursor-pointer hover:bg-warning"
          />
        </div>

        <div className="mt-3 text-center ">
          <p>
            You have no account ?
            <Link to="/register" className="text-blue-500 hover:underline ml-2">
              Register here
            </Link>
          </p>
        </div>
      </form>
      <div className="flex flex-col items-center">
        <div
          onClick={handleloginGoogle}
          className="rounded-md border border-warning text-info font-semibold hover:font-bold px-2 py-1 cursor-pointer flex mb-3"
        >
          <span>Login in Google</span>
          <Link className="ml-2 text-xl">
            <FaGoogle></FaGoogle>
          </Link>
        </div>
        <div
          onClick={handleLoginGithub}
          className="rounded-md border border-warning text-info font-semibold hover:font-bold px-2 py-1 cursor-pointer flex"
        >
          <span>Login in Github</span>
          <Link className="ml-2 text-xl">
            <FaGithub></FaGithub>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
