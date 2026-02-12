import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Heart } from 'lucide-react';
import finaleImage from '@/assets/finale-couple.jpeg';

const RSVP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfZfeUkuuizTqQvfUB88tLjZhANS5WVBypjtvpk57OWEKQsYA/viewform?usp=sharing&ouid=115219823405246325684';

const RSVPSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* RSVP area */}
      <div className="relative noise-texture mandala-bg py-20 md:py-28 bg-background">
        <div className="relative z-10 max-w-md mx-auto px-6 text-center">
          <p className="scroll-reveal font-sans-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground mb-2">
            ✦ &nbsp; Be Our Guest &nbsp; ✦
          </p>
          <h2 className="scroll-reveal font-script text-4xl md:text-5xl gold-gradient-text mb-4">
            We look forward to sharing this special day with you
          </h2>
          <div className="scroll-reveal w-16 h-px bg-primary/40 mx-auto mb-8" />
          <a
            href={RSVP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="scroll-reveal scroll-reveal-delay-2 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans-body text-sm font-medium tracking-wider uppercase hover:brightness-110 transition-all shadow-[0_8px_30px_-8px_rgba(197,160,89,0.4)]"
          >
            <Heart className="w-4 h-4" fill="currentColor" />
            Send Your RSVP
          </a>
          <p className="scroll-reveal scroll-reveal-delay-3 font-sans-body text-sm text-muted-foreground mt-8 max-w-xs mx-auto">
            We would be honored by your presence.
          </p>
        </div>
      </div>

      {/* Finale footer — truly full width, faces visible */}
      <div className="relative w-full bg-background">
        <img
          src={finaleImage}
          alt="Ajay and Akshaya"
          className="w-full h-auto min-h-[25vh] object-cover object-[50%_25%] white-spray-mask"
        />
        <div className="text-center pb-16 -mt-8 relative z-10">
          <p className="scroll-reveal font-script text-3xl md:text-5xl gold-gradient-text mb-1">
            Save the Date
          </p>
          <p className="scroll-reveal scroll-reveal-delay-1 font-serif-display text-2xl md:text-3xl gold-gradient-text font-semibold mb-4">
            Saturday, March 7th, 2026
          </p>
          <div className="scroll-reveal scroll-reveal-delay-2 w-10 h-px bg-primary/40 mx-auto mb-3" />
          <p className="scroll-reveal scroll-reveal-delay-2 font-sans-body text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            With love,
          </p>
          <p className="scroll-reveal scroll-reveal-delay-2 font-sans-body text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Ajay and Akshaya
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
