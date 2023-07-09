/*-------------------
UserContext.js:
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
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
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
---------------------------*/