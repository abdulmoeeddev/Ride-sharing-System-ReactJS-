import React from "react";
import App from "../components/App.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import SearchPage from "../Pages/SearchPage.js";
import AboutUs from "../Pages/AboutUs.js";
import SearchRide from "../Pages/SearchRide.js";
import ContactUs from "../Pages/ContactUs.js";
import Error404 from "../Pages/Error404.js";
import Works from "../Pages/Works.js";
import UserDashboardPage from "../Pages/userInterface-pages/UserDashboardPage.js";
import UserLogoutPage from "../Pages/userInterface-pages/UserLogoutPage.js";
import UserPublishRidePage from "../Pages/userInterface-pages/UserPublishRidePage.js";
import UserRideRequestPage from "../Pages/userInterface-pages/UserRideRequestPage.js";
import UserProfilePage from "../Pages/userInterface-pages/UserProfilePage.js";
import PublishRidePage from "../Pages/PublishRidePage.js";
import UserProfileEditPage from "../Pages/userInterface-pages/UserProfileEditPage.js";
import AdminPanel from ".././Pages/Admin_panel_pages/AdminDashboardPage";
import AdminProfilePage from ".././Pages/Admin_panel_pages/AdminProfilePage";
import AdminRidersPage from ".././Pages/Admin_panel_pages/AdminRidersPage";
import AdminRidesPage from ".././Pages/Admin_panel_pages/AdminRidesPage";
import AdminLogout from "../Admin_panel/AdminLogout";
import AdminDriversPage from "../Pages/Admin_panel_pages/AdminDriversPage.js";
import BookingRide from "../components/Search/BookingRide.js";
import MyRideReqPage from "../Pages/userInterface-pages/MyRideReqPage.js";
import FilleUploadTest from "../components/test/FilleUploadTest.js";
import MessagingPage from "../Pages/userInterface-pages/MessagingPage.js";
import test2 from "../components/test/test2.js";

function Routess() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/home" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/publishride" element={<PublishRidePage />} />
          <Route path="/search" element={<SearchRide />} />
          <Route path="/availablerides" exact element={<SearchPage />} />
          <Route path="/availablerides/book" element={<BookingRide />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/howitworks" element={<Works />} />
          {/* <Route path="/formtest" element={Forms} /> */}

          {/* User Interface */}
          <Route path="/user-dashboard" exact element={<UserDashboardPage />} />
          <Route path="/user-dashboard/logout" element={<UserLogoutPage />} />
          <Route
            path="/user-dashboard/profile"
            exact
            element={<UserProfilePage />}
          />
          <Route
            path="/user-dashboard/publishride"
            element={<UserPublishRidePage />}
          />
          <Route
            path="/user-dashboard/riderequest"
            element={<UserRideRequestPage />}
          />
          <Route
            path="/user-dashboard/profile/edit/:id"
            element={<UserProfileEditPage />}
          />
          <Route
            path="/user-dashboard/my-ride-requests"
            element={<MyRideReqPage />}
          />

          <Route path="/user-dashboard/messaging" element={<MessagingPage />} />

          {/* <Route path="/test" element={Test} /> */}
          <Route path="/upload" element={<FilleUploadTest />} />
          <Route path="/test2" element={<test2 />} />

          {/* Admin Interface */}
          <Route path="/admin-dashboard" exact element={<AdminPanel />} />
          <Route
            path="/admin-dashboard/profile"
            element={<AdminProfilePage />}
          />
          <Route path="/admin-dashboard/riders" element={<AdminRidersPage />} />
          <Route path="/admin-dashboard/rides" element={<AdminRidesPage />} />
          <Route
            path="/admin-dashboard/drivers"
            element={<AdminDriversPage />}
          />
          <Route path="/admin-dashboard/logout" element={<AdminLogout />} />

          {/* Error page */}
          <Route element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routess;
