import React, {useState,useEffect} from 'react'
import IntroSection from '../components/IntroSection'
import Navbar from '../components/Navbar'
import PulseLoader from '../components/PulseLoader'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) return <PulseLoader />;

  return (
    <main>
      <Navbar/>
      <IntroSection/>
    </main>
  )
}

export default Home