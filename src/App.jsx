import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/_context/AuthContext";
import PrivateRoute from "./components/_routes/PrivateRoute";

import LoginPage from "./components/pages/login-page/LoginPage";
import HomePage from "./components/pages/home-page/HomePage";

import Layout from './components/pages/layouts/Layout';

function App() {
 

  return (
    <>
      <Layout></Layout>
    </>
    // <Router>
    //   <AuthProvider>
    //     <Routes>
    //       {/* Public Routes */}
    //       <Route path="/home" element={<HomePage />} />
    //       <Route path="/login" element={<LoginPage />} />

    //       {/* Private Routes */}
    //       <Route
    //         path="/home"
    //         element={
    //           <PrivateRoute>
    //             <HomePage />
    //           </PrivateRoute>
    //         }
    //       />
    //     </Routes>
    //   </AuthProvider>
    // </Router>
  )
}

export default App
