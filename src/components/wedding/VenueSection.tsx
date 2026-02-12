import { MapPin } from 'lucide-react';
import venueImage from '@/assets/venue.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MAPS_URL = 'https://www.google.com/maps/dir//SRI+KRISHNAVENI+PALACE,+Krishnaveni+Complex,+No:+175%2F2,+Mangadu+Rd,+Paraniputhur,+Chennai,+Tamil+Nadu+600122/@13.041664,80.134144,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5261000ed79459:0x7091f52ae4296b11!2m2!1d80.130329!2d13.0183746?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoASAFQAw%3D%3D';

const VenueSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Full-width venue background — dynamic */}
      <div className="relative w-full">
        <img
          src={venueImage}
          alt="Sri Krishnaveni Palace"
          className="w-full h-[400px] md:h-[550px] object-cover object-center blur-[3px] scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Frosted glass card — centered over image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="scroll-reveal max-w-md w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12 text-center shadow-2xl">
            <p className="font-sans-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 mb-2">
              ✦ &nbsp; The Venue &nbsp; ✦
            </p>
            <h2 className="font-script text-3xl md:text-4xl text-white mb-4">
              Sri Krishnaveni Palace
            </h2>
            <div className="w-12 h-px bg-white/30 mx-auto mb-4" />
            <p className="font-sans-body text-sm text-white/80 leading-relaxed mb-8">
              Krishnaveni Complex, No: 175/2,<br />
              Mangadu Rd, Paraniputhur,<br />
              Chennai, Tamil Nadu 600122
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans-body text-sm font-medium tracking-wider uppercase hover:brightness-110 transition-all"
            >
              <MapPin className="w-4 h-4" />
              View Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
