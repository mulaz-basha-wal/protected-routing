import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    let loggedIn = localStorage.getItem("loggedIn");
    if (parseInt(loggedIn) == 0) return <Outlet />;
    else return <Navigate to="/login" />;
}
