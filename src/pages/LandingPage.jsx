import React from 'react'
import Navbar from '../components/NavbarSection'
import HeroSection from '../components/HeroSection'
import Introduction from '../components/Introduction'
import Rules from '../components/Rules'
import KeyAttributes from '../components/KeyAttributes'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Prizes from '../components/Prizes'
import Partners from '../components/Partners'

export default function LandingPage() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Introduction/>
        <Rules/>
        <KeyAttributes/>
        <Faq/>
        <Prizes/>
        <Partners/>

        <Footer/>
    </>
  )
}
