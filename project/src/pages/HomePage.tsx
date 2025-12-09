import HeroSection from '../components/public/HeroSection';
import HistorySection from '../components/public/HistorySection';
import ArchaeologicalSites from '../components/public/ArchaeologicalSites';
import LocalEconomySection from '../components/public/LocalEconomySection';
import LogisticsSection from '../components/public/LogisticsSection';

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <HistorySection />
      <ArchaeologicalSites />
      <LocalEconomySection />
      <LogisticsSection />
    </div>
  );
}
