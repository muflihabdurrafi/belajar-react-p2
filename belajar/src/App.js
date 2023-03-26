import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route index element={<Login />}></Route>
                        <Route path="home" element={<Home />}></Route>
                        <Route path="about" element={<About />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

const Root = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/sadsada">Random</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default App;
