import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from "./components/UI/Nav";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PostProperty from "./pages/postProperty";
import Footer from "./components/Footer";
import AllRooms from "./components/rooms/AllRooms";
import SecondPage from "./pages/SecondPage";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import MyBookings from "./pages/MyBookings";
import ViewRoom from "./pages/ViewRoom";
import EditProfile from "./pages/EditProfile";
import PrivateRoute from "./utils/PrivateRoute";
import MyAccount from "./pages/MyAccount";
import ViewProfile from "./pages/ViewProfile";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import AboutBooking from "./pages/AboutBooking";
import PayRent from "./pages/PayRent";
import MyAds from "./pages/MyAds";
import ViewTenant from "./pages/ViewTenant";
import firebase, { messaging, onMessageListener } from "./firebase/index";
import { getToken } from "firebase/messaging";
import StripePaymentCancel from "./pages/StripePaymentCancel";
import axios from "axios";
import ChatBody from "./components/Chat/ChatBody";

const App = () => {
  const token = localStorage.getItem("token");

  // const [show, setShow] = useState(false);
  // const [notification, setNotification] = useState({ title: "", body: "" });

  const notificationpremision= async ()=>{
   const permission = await Notification.requestPermission()
   if(permission==='granted'){
     const token1 = await getToken(messaging, {
       vapidKey:
       "BK1YSNEVcw8HU87zqvSqIZIrLAegjVlT_LLIPVRycirOw5ghNJ0zH9uTT5zxceX2v04Z3E0vIIEb38Xk1QeEBRA",
      });
      console.log("tojen", token1);
      localStorage.setItem("DeviceToken", token1);
      const res = await axios.put(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/update-fcm-token",
        {
          fcmToken: token1,
        },
        { headers: { Authorization: token } }
      );
      console.log("res-------",res);
  // console.log("tojen", permission);
   }
   else if(permission==="denied"){
    alert("You denied for the notification")
   }
  }

  
  useEffect(() => {
   notificationpremision()
   
  }, [])


  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<OurServices />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route
            path="/postProperty"
            element={<PrivateRoute Component={PostProperty} />}
          />
          <Route
            path="/myBookings"
            element={<PrivateRoute Component={MyBookings} />}
          />
          <Route
            path="/myBookings/aboutBooking/:id"
            element={<PrivateRoute Component={AboutBooking} />}
          />
          <Route path="/myAds" element={<PrivateRoute Component={MyAds} />} />
          <Route
            path="/editProfile"
            element={<PrivateRoute Component={EditProfile} />}
          />

          <Route
            path="/myAccount"
            element={<PrivateRoute Component={MyAccount} />}
          />
          <Route
            path="/viewProfile"
            element={<PrivateRoute Component={ViewProfile} />}
          />
          <Route path="/chat" element={<PrivateRoute Component={Chat} />} />
          <Route
            path="/chat/:id"
            element={<PrivateRoute Component={ChatBody} />}
          />
          <Route
            path="/payment/cancel"
            element={<PrivateRoute Component={StripePaymentCancel} />}
          />
          <Route
            path="/bookings/property/pay-rent/:id"
            element={<PrivateRoute Component={PayRent} />}
          />

          <Route
            path="/roommate/view-roommate/:id"
            element={<PrivateRoute Component={ViewTenant} />}
          />

          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/allAvailableRooms" element={<AllRooms />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rooms/view-room/:id" element={<ViewRoom />} />
          <Route path="/sp" element={<SecondPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset_password" element={<ResetPassword />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
