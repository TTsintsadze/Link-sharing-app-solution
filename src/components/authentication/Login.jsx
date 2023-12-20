import { Link, useNavigate } from "react-router-dom";
import DevlinksLogoLg from "../../components/authentication/icons/DevlinksLogoLg";
import styles from "./authentication.module.css";
import EmailIcon from "../authentication/icons/EmailIcon";
import LockIcon from "../authentication/icons/LockIcon";
import Button from "../button/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Data from "../../../Data.json";

export default function Login({setIsAuthenticated}) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    console.log(Data);
    if (
      data.email === loggedUser.email &&
      data.password === loggedUser.password
    ) {
      navigate("/addlinks");
      setIsAuthenticated(true);
      const currentUserData = Data.Users.find(
        (user) => user.email === data.email
      );
      localStorage.setItem("currentUser", JSON.stringify(currentUserData));
    } else {
      setErrorMessage("Wrong email or password");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <DevlinksLogoLg />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Login</h2>
          <p>Add your details below to get back into the app</p>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <label htmlFor="email">
            <EmailIcon />
            <span>Email address</span>
            <input
              type="email"
              name="email"
              id="email"
              value={input.email}
              {...register("email", { required: true })}
              className={errors.email ? "invalid" : ""}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="e.g. alex@email.com"
            />
          </label>
          <label htmlFor="password">
            <LockIcon />
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              value={input.password}
              {...register("password", { required: true })}
              className={errors.password ? "invalid" : ""}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              placeholder="Enter your password"
            />
          </label>
          {errorMessage && (
            <span className={styles.errormessage}>{errorMessage}</span>
          )}
          <Button type="submit">Login</Button>
        </form>
        <p style={{ textAlign: "center" }}>
          Don`t have an account? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </main>
  );
}
