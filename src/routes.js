import { Navigate, useRoutes } from 'react-router-dom';
// pages

import Homeone from './pages/Homeone';
import HomeTwo from './pages/HomeTwo';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import TvSeries from './pages/TvSeries';
import { useEffect } from "react"
import $ from "jquery";
import Pricing from './pages/Pricing';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// import Blog from './pages/Blog';
// import User from './pages/User';
// import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage />,
      children: [
        { path: '/home', element: <LandingPage /> },
        { path: '/', element: <Homeone /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
        { path: 'movie', element: <Movie /> },
        { path: 'index-2', element: <HomeTwo /> },
        { path: 'details', element: <MovieDetails /> },
        { path: 'lessons', element: <TvSeries /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'blog', element: <Blogs /> },
        { path: 'blog-details', element: <BlogDetails /> },
        { path: 'contact', element: <ContactPage /> },
        // { path: 'app', element: <DashboardApp /> },
        // { path: 'user', element: <User /> },
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> },
      ],
    }
  ]);
}
