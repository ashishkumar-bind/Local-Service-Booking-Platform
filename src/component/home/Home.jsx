import React from 'react'
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Cards from '../card/Cards';
import Works from '../work/Works';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Cards />
    <Works />
    <About />
    <Contact/>
    <Footer/>
    </>
  )
}
