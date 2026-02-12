import { useScrollReveal } from '@/hooks/useScrollReveal';
import memoriesImage from '@/assets/memories-couple.jpeg';

const MemoriesSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative py-14 md:py-20 noise-texture bg-background overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Decorative title */}
        <div className="scroll-reveal text-center mb-12">
          <p className="font-sans-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground mb-2">
            ✦ &nbsp; A Journey of Love &nbsp; ✦
          </p>
          <h2 className="font-script text-4xl md:text-5xl gold-gradient-text mb-2">
            How It All Started
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
          {/* Couple Image — full width on mobile */}
          <div className="scroll-reveal scroll-reveal-delay-1 w-full md:w-1/2 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_48px_-12px_rgba(197,160,89,0.35)]">
              <img
                src={memoriesImage}
                alt="Ajay & Akshaya — Our Story"
                className="w-full h-auto min-h-[320px] md:min-h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Love Story */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
            <p className="scroll-reveal scroll-reveal-delay-1 font-sans-body text-sm md:text-base text-muted-foreground leading-relaxed italic">
              Our story began with a simple "Hi" on LinkedIn and in a short time it turned into something truly special.
            </p>
            <p className="scroll-reveal scroll-reveal-delay-2 font-sans-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Though ours is an arranged marriage it never felt arranged just two hearts gently finding their way to each other.
            </p>
            <p className="scroll-reveal scroll-reveal-delay-2 font-sans-body text-sm md:text-base text-muted-foreground leading-relaxed">
              With clarity in our minds and warmth in our hearts we chose each other not by chance but by conviction.
            </p>
            <p className="scroll-reveal scroll-reveal-delay-3 font-sans-body text-sm md:text-base text-muted-foreground leading-relaxed italic">
              Beneath the water, in a moment where the world stood still…..<br />
              A question was asked and with a simple YES a lifetime was chosen !!
            </p>
            <p className="scroll-reveal scroll-reveal-delay-3 font-script text-2xl md:text-3xl gold-gradient-text pt-2">
              And now, our forever begins
            </p>
            <p className="scroll-reveal scroll-reveal-delay-4 font-sans-body text-sm text-muted-foreground">
              hand in hand heart to heart ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
