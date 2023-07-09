/*-------------------
UserContext.js:
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
 --------------------*/
/*-------------------
Register.js:
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
---------------------------*/
/*-------------------
Login.js:
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
---------------------------*/
/*-------------------
Header.js:
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
---------------------------*/
/*-------------------
Main.js:
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
---------------------------*/
/*-------------------
Index.js:
6.no.line>import UserContext from './contexts/UserContext';
root.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);
---------------------------*/
/*-------------------
App.js:
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoutes><Home></Home></PrivateRoutes>
        },
---------------------------*/