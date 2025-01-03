import AboutSection from '@/components/About'
import Footer from '@/components/Footer'
import NavbarSection from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <NavbarSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default page