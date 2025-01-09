import type { MetaFunction } from '@remix-run/node';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import Footer from '../components/Footer/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className='bg-gray-100 text-gray-900'>
      <Navbar />
      <Hero />
      <Features />
      <Leaderboard />
      <Footer />
    </div>
  );
}
