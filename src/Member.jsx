import { useNavigate } from "react-router-dom";

export default function Member() {
    const users = JSON.parse(localStorage.getItem("registeredUsers"));
    const uname = localStorage.getItem("loggedUser");
    let email = "";
    let navigate = useNavigate();
    console.log(users, uname);
    users.forEach((user) => {
        if (user.username === uname) email = user.email;
    });

    const logOut = () => {
        localStorage.setItem("loggedUser", "none");
        localStorage.setItem("loggedIn", "1");
        navigate("/login");
    };
    return (
        <div className="memberContainer">
            <h1>
                Welcome <span className="Highlight">{uname}</span>
            </h1>
            <h2>You are successfully logged In.</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{uname}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
            <button className="logout" onClick={logOut}>
                Log Out
            </button>
        </div>
    );
}
