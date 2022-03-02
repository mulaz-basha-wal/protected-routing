import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Member from "./Member";
import Registration from "./Registration";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/member" element={<Member />} />
                    </Route>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
