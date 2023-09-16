import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from "./components/firstPage/firstPage"
import SecondPage from "./components/secondPage/secondPage";

import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
    <BrowserRouter>
    <Routes class='container'>
      <Route path="/" element={<FirstPage />} />
      <Route path="/SecondPage" element={<SecondPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

