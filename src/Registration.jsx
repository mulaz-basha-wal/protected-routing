import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
        },
        onSubmit(values) {
            let registeredUsers = localStorage.getItem("registeredUsers");
            if (registeredUsers) {
                let userOb = JSON.parse(registeredUsers);
                let flag = true;
                userOb.forEach((user) => {
                    if (user.username === values.username) {
                        alert("User Already Exist");
                        flag = false;
                    }
                });
                if (flag)
                    localStorage.setItem(
                        "registeredUsers",
                        JSON.stringify([...JSON.parse(registeredUsers), values])
                    );
            } else {
                localStorage.setItem(
                    "registeredUsers",
                    JSON.stringify([values])
                );
            }
            navigate("/login");
        },
        validate() {
            const errors = {};
            if (formik.values.password.length < 8) {
                errors.password = "Can't be less than 8 characters";
            }
            if (formik.values.email.length < 10) {
                errors.email = "Can't be less than 10 characters";
            }
            if (formik.values.username.length < 7) {
                errors.username = "Can't be less than 7 characters";
            }
            return errors;
        },
    });

    return (
        <div className="registrationFormContainer">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h1 className="regHeading">Register</h1>
                <div className="inputBox">
                    <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Enter email address"
                    />
                    <p className="validationError">
                        {formik.errors.email ? formik.errors.email : null}
                    </p>
                </div>
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
                {/* <input type="submit" value={"Submit"} /> */}
                <button type="submit" className="registerButton">
                    Register
                </button>
            </form>
            <p className="already">
                Already a user??{" "}
                <Link className="arleadylink" to="/login">
                    Login
                </Link>
            </p>
        </div>
    );
}
