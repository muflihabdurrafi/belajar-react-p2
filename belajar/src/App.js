import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
    return (
        <div className="App">
            <h1>gajelas</h1>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav> */}
            {/* <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
            </Routes> */}
        </div>
    );
}

export default App;
