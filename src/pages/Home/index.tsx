import Features from '../../components/Features';
import Hero from '../../components/Hero';
import LeaderboardTeaser from '../../components/Leaderboard';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <LeaderboardTeaser />
      <Navbar />
    </div>
  );
};

export default Home;
