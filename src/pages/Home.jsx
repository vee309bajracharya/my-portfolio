import React, { useState, useEffect } from 'react'
import IntroSection from '../components/IntroSection'
import Navbar from '../components/Navbar'
import PulseLoader from '../components/PulseLoader'
import { Helmet } from 'react-helmet'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PulseLoader />;

  return (
    <main>
      <Helmet>
        <title>Veerin Bajracharya</title>

        <meta property="og:title" content='Veerin Bajracharya' />
        <meta property="og:site_name" content='Veerin Bajracharya' />
        <meta property="og:image" content="https://my-portfolio-pi-two-17.vercel.app/for-medias.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content='https://my-portfolio-pi-two-17.vercel.app/' />

        <meta name="twitter:title" content="Veerin Bajracharya" />
        <meta name="twitter:url" content="https://my-portfolio-pi-two-17.vercel.app" />
        <meta name="twitter:image" content="https://my-portfolio-pi-two-17.vercel.app/for-medias.png" />
        <meta name="twitter:card" content="summary_large_image" />

      </Helmet>
      <Navbar />
      <IntroSection />
    </main>
  )
}

export default Home