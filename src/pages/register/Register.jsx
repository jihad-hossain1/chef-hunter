import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password !== confirm) {
      return setConfirm("password not match");
    } else if (password.length < 6) {
      return setError("password must be 6 character");
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        setSuccess(createdUser);
        console.log(createdUser);
        setSuccess(createdUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="md:flex flex-col items-center my-9">
      <h4 className="text-green-500">
        {success && <span>Successfully Create Your Account</span>}
      </h4>
      <form onSubmit={handleRegister} className="md:w-[25%] py-5 mx-10">
        <div>
          <label htmlFor="">Your Name</label>
          <br />
          <input
            type="text"
            className="w-full border-b-2 border-warning px-2 py-1 rounded-md bg-transparent "
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="">Photo Url</label>
          <br />
          <input
            type="text"
            className="w-full border-b-2 border-warning px-2 py-1 rounded-md bg-transparent "
            name="photo"
            required
          />
        </div>
        <div>
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
          <p className="text-red-600">
            <small>{error}</small>
          </p>
        </div>
        <div>
          <label htmlFor="">Confirm Password</label> <br />
          <input
            type="password"
            className="w-full border-b-2 border-warning px-2 py-1 rounded-md bg-transparent"
            name="confirm"
            required
          />
          <p className="text-red-600">
            <small>{confirm}</small>
          </p>
        </div>
        <div className="my-2">
          <input
            type="checkbox"
            name="check"
            id=""
            placeholder="Accept our term & condition"
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <input
            type="submit"
            value="Create Account"
            className="w-[75%] border border-warning rounded-md px-3 hover:bg-warning hover:font-semibold py-1 cursor-pointer"
          />
        </div>
        <div className="mt-3 text-center">
          <p>
            You have already a account ?
            <Link to="/login" className="text-blue-500 hover:underline ml-1">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
