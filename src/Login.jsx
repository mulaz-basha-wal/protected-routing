import { useFormik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    useEffect(() => {
        if (parseInt(localStorage.getItem("loggedIn")) == 0) {
            alert("User is already logged in ");
            navigate("/member");
        }
    }, []);
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit(values) {
            let registeredUsers = localStorage.getItem("registeredUsers");
            if (registeredUsers) {
                let userOb = JSON.parse(registeredUsers);
                let flag = false;
                userOb.forEach((user) => {
                    if (
                        user.username === values.username &&
                        user.password === values.password
                    )
                        flag = true;
                });
                if (flag) {
                    localStorage.setItem("loggedIn", "0");
                    localStorage.setItem("loggedUser", values.username);
                    navigate("/member");
                } else alert("Invalid Credentials");
            } else
                alert(
                    "No Data Found in LocalStorage. Register users before loging in"
                );
        },
        validate() {
            const errors = {};
            if (formik.values.password.length < 8) {
                errors.password = "Can't be less than 8 characters";
            }
            if (formik.values.username.length < 7) {
                errors.username = "Can't be less than 7 characters";
            }
            return errors;
        },
    });
    return (
        <div className="loginContainer">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h1 className="regHeading">Login</h1>
                <div className="inputBox">
                    <input
                        type="text"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        placeholder="Enter username"
                    />
                    <p className="validationError">
                        {formik.errors.username ? formik.errors.username : null}
                    </p>
                </div>
                <div className="inputBox">
                    <input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="Enter password"
                    />
                    <p className="validationError">
                        {formik.errors.password ? formik.errors.password : null}
                    </p>
                </div>
                <button type="submit" className="registerButton">
                    Login
                </button>
            </form>
            <p className="already">
                New user ??{" "}
                <Link className="arleadylink" to="/register">
                    Register
                </Link>
            </p>
        </div>
    );
}
