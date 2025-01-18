import { useRef } from 'react';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import LeaderboardTeaser from '../../components/LeaderboardTeaser';
import Navbar from '../../components/Navbar';
import Login from '../../components/Login';

const Home = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const leaderboardRef = useRef<HTMLDivElement>(null);

  const scrollToView = (id: string) => {
    switch (id) {
      case 'features':
        featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'login':
      case 'leaderboard':
        leaderboardRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToView} />
      <Hero />
      <Features ref={featuresRef} />
      <LeaderboardTeaser ref={leaderboardRef} />
      <Login />
      <Footer />
    </div>
  );
};

export default Home;
