import { Link, useNavigate } from "react-router-dom";
import DevlinksLogoLg from "../../components/authentication/icons/DevlinksLogoLg";
import styles from "./authentication.module.css";
import EmailIcon from "../authentication/icons/EmailIcon";
import LockIcon from "../authentication/icons/LockIcon";
import Button from "../button/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Data from "../../../Data.json";
import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const myUUID = uuidv4();
    localStorage.setItem("user", JSON.stringify(data));

    const newUser = {
      UserId: myUUID,
      email: data.email,
      password: data.password,
    };

    Data.Users.push(newUser);
    navigate("/login");
  };

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <DevlinksLogoLg />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Create Account</h2>
          <p>Let`s get you started sharing your links!</p>
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
          <label htmlFor="create-password">
            <LockIcon />
            <span>Create password</span>
            <input
              type="password"
              id="create-password"
              name="password"
              value={input.password}
              {...register("password", { required: true })}
              className={errors.password ? "invalid" : ""}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              minLength={8}
              placeholder="At least 8 characters"
            />
          </label>
          <label htmlFor="confirm-password">
            <LockIcon />
            <span>Confirm password</span>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={input.confirmPassword}
              {...register("confirmPassword", {
                validate: (value) => value === getValues("confirmPassword"),
                required: true,
              })}
              className={errors.password ? "invalid" : ""}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
              minLength={8}
              placeholder="At least 8 characters"
            />
          </label>

          <Button type="submit">Create new account</Button>
        </form>
        <p style={{ textAlign: "center" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}
