import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";

import { Provider } from 'react-redux';
import store from '../src/store';
import SignUp from "./components/sign-up/SignUp.jsx";
import SignIn from "./components/sign-in/SignIn.jsx";
import Profile from "./components/profile/profile.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import HeaderComponent from "./views/custom-components/sections/headercomponent.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <Provider store={store} >
      <HashRouter history={hist}>
        <HeaderComponent />
        <Routes>
          <Route path="/custom-components" element={<CustomComponents />} />
          <Route path="/" element={<Components />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
