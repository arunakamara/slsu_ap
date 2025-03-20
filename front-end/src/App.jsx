import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import http from "../services/httpService.js";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Footer from "../components/Footer";
import About from "../components/About";
import Events from "../components/Events";
import News from "../components/News";
import Membership from "../components/Membership.jsx";
import Resources from "../components/Resources";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ.jsx";
import Alumni from "../components/Alumni.jsx";
import Feedback from "../components/Feedback.jsx";
import Sitemap from "../components/Sitemap.jsx";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  async function getMembers() {
    try {
      const { data: members } = await http.get(
        "http://localhost:5000/api/members"
      );
      setUsers(members);
    } catch ({ response }) {
      console.log(response.data);
    }
  }

  async function handleRegister(user) {
    try {
       await http.post(
        "http://localhost:5000/api/members",
        user
      );
    } catch ({response}) {
      console.log(response.data);
    }
  }

  const handleLogin = (user) => {
    setLoggedIn(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
      <ToastContainer />
      <Router>
        <div className="flex flex-col justify-between min-h-screen bg1 ">
          <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Highlights />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route
                path="/register"
                element={
                  <Register users={users} handleRegister={handleRegister} />
                }
              />
              <Route
                path="/login"
                element={
                  <Login
                    users={users}
                    setLoggedIn={setLoggedIn}
                    setCurrentUser={setCurrentUser}
                    loggedIn={loggedIn}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  loggedIn ? (
                    <Profile user={currentUser} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
