import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Assets/Header.jsx";
import Footer from "./Assets/Footer.jsx";
import Home from "./Assets/Home.jsx";
import Login from "./Components/Login.jsx";
import { UserStorage } from "./UserContext.jsx";
import User from "./Components/User.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Photo from "./Assets/Photo";
import UserProfile from "./Components/UserProfile";
import NotFound from "./Components/NotFound";

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <UserStorage>
            <Header />
            <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </main>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  