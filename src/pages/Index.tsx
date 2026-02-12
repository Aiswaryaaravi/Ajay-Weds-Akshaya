import HeroSection from '@/components/wedding/HeroSection';
import CountdownSection from '@/components/wedding/CountdownSection';
import MemoriesSection from '@/components/wedding/MemoriesSection';
import PromiseSection from '@/components/wedding/PromiseSection';
import VenueSection from '@/components/wedding/VenueSection';
import ProgramSection from '@/components/wedding/ProgramSection';
import RSVPSection from '@/components/wedding/RSVPSection';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <CountdownSection />
      <MemoriesSection />
      <PromiseSection />
      <ProgramSection />
      <VenueSection />
      <RSVPSection />
    </main>
  );
};

export default Index;
