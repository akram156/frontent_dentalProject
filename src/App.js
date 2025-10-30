import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { currnet } from "./redux/actions/authAction";
import BarreNav from "./components/navbarr/BarreNav";
import Appoinments from "./pages/Appoinments";
import { doctorValidation, getClinicInfo } from "./redux/actions/clinicActions";
import { getMyAppoinments } from "./redux/actions/appoinment";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/footer/Footer";

function App() {
  const { user, isAuth } = useSelector((state) => state.authReducer);
  const { isDoctor } = useSelector((state) => state.clinicReducer);
  const [loadingApp, setLoadingApp] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) await dispatch(currnet());
      setLoadingApp(false);
    };
    fetchUser();
    dispatch(getClinicInfo());
    dispatch(getMyAppoinments());
  }, [dispatch]);
  const clinicInfo = useSelector((state) => state.clinicReducer.clinicInfo);
  if (loadingApp) {
    return;
  }
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
      <BarreNav></BarreNav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/appoinments" element={<Appoinments />}></Route>
        </Route>
      </Routes>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
