import React from 'react'
import styled from 'styled-components'; // Agrega esta línea

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Product from './components/product/Product';
import Testimonial from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { NieveComponente } from './components/NieveComponente'

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <MainContainer>
      <Header />
      <NieveComponente />
      <Nav />
      <Product />
      <Portfolio />
      <Contact />
      <Footer />
    </MainContainer>
  );
};


export default App