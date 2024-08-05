// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AboutUs from './pages/AboutUs.jsx';
import './index.css';
import Layout from './Layout.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogList from './pages/BlogList.jsx';
import ContactUs from './pages/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/blog",
    element: (
      <Layout>
        <BlogList />
      </Layout>)
  },
  {
    path: "/blog/:blogID",
    element: (
      <Layout>
        <BlogPage />
      </Layout>)
  },
  {
    path: "/about-us",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
