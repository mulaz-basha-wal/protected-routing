import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="homeContainer">
            <div className="homeDescription">
                <h1>
                    Welcome to{" "}
                    <span className="Highlight">Protected Routing</span> Example
                </h1>
                <p className="homePara">
                    This is project designed to demonstrate how
                    <strong className="Highlight"> Protected Routing </strong>
                    works in <strong className="Highlight">React</strong>.
                </p>
            </div>
            <div className="linksContainer">
                <Link className="link register" to="/register">
                    Register
                </Link>
                <Link className="link login" to="/login">
                    Login
                </Link>
            </div>
        </div>
    );
}
