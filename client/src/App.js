import React, { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from './context/data';

// ? Components
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// ? Pages & Containers
import Homepage from './Pages/Home/HomeContainer';
import AboutContainer from './Pages/About/AboutContainer';
import ContactContainer from './Pages/Contact/Containter';
import ProductsServicesContainer from './Pages/ProductsServies/Container';
import IndustryContainer from './Pages/IndustryPage/Container';
import WhyChooseUsContainer from './Pages/WhyUs/Container';
import DynamicProducts from './Pages/ProductsServies/SubProducts/DynamicProducts';
import ErrorPage from './Pages/ErrorPage'
import ConsultingServiceContainer from './Pages/ProductsServies/ConsultingService/Container'
import AfterSalesServiceContainer from './Pages/ProductsServies/AferSalesService/Container'


// ? Administrators Routes
import AdminLogin from './Admin/AdminLogin';
import AdminProtectedRoute from './Admin/AdminProtectedRoute';
import Layout from './Admin/Layout';
import Dashboard from './Admin/Pages/Dashboard';
import Insights from './Admin/Pages/Insights';
import Testimonial from './Admin/Pages/Testimonial';
import PSLinks from './Admin/Pages/PSLinks';
import DynamicPage from './Admin/Pages/DynamicPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { authURL } = useAuth();
  const [psLinks, setPsLinks] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State for loading
  const location = useLocation();
  const excludedRoutes = ['/administrator', '/dashboard'];

  const isPublicRoute = !excludedRoutes.some((route) => location.pathname.startsWith(route));

  useEffect(() => {
    fetch(`${authURL}/get-pslinks`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON if the response is ok
      })
      .then((data) => {
        setPsLinks(data); // Update state with fetched data
        localStorage.setItem('psLinks', JSON.stringify(data));
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  if (loading) {
    return <Loader />; // Display loader while loading
  }

  return (
    <>
      <ScrollToTop />
      {isPublicRoute && <Navbar />}
      <Routes>
        {/* Admin Protected Routes */}
        <Route path="/administrator" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminProtectedRoute Component={Layout} />}>
          <Route index element={<Dashboard />} />
          <Route path="insights" element={<Insights />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="pslinks" element={<PSLinks />} />
          <Route path="dynamic-pages" element={<DynamicPage />} />
        </Route>

        {/* Home Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/contact-us" element={<ContactContainer />} />
        <Route path="/products" element={<ProductsServicesContainer />} />
        <Route path="/consulting-services" element={<ConsultingServiceContainer />} />
        <Route path="/after-sales-services" element={<AfterSalesServiceContainer />} />
        <Route path="/industry-served" element={<IndustryContainer />} />
        <Route path="/why-choose-us" element={<WhyChooseUsContainer />} />
        <Route path="*" element={<ErrorPage />} />
        {psLinks.map((link) => (
          <Route
            key={link.id}
            path={`/${link.linkURL}`}
            element={<DynamicProducts link={link} />}
          />
        ))}
      </Routes>
      {isPublicRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;

