import { useEffect } from "react";
import './App.css';
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice.js"
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/Notfound';
import Header from './components/Header';
import AddBlog from "./pages/AddBlog";
import SingleBlog from "./pages/SingleBlog";
import Dashboard from "./pages/Dashboard";
import ModalBtn from "./pages/ModalBtn";
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route   path="/" element={<Home />} />
          <Route path="/blog/search" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route
            path="/addblog"
            element={
                <AddBlog />
            }
          /> 
          <Route
            path="/:id"
            element={
              <ModalBtn/>
            }
          />

          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route
            path="/dashboard"
            element={
                <Dashboard />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
