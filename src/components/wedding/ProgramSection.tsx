import { Users, Heart, Camera, Utensils, HandHeart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const events = [
  { time: '6:00 PM', title: 'Guest Arrival & Seating', icon: Users, delay: 'scroll-reveal-delay-1' },
  { time: '6:30 PM', title: 'Warm Welcome to the Couple', icon: Heart, delay: 'scroll-reveal-delay-2' },
  { time: '7:00 PM', title: 'Photo Moments', icon: Camera, delay: 'scroll-reveal-delay-3' },
  { time: '8:00 PM', title: 'Dinner Reception', icon: Utensils, delay: 'scroll-reveal-delay-4' },
  { time: '9:00 PM', title: 'See-Off Time', icon: HandHeart, delay: 'scroll-reveal-delay-4' },
];

const ProgramSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 noise-texture bg-background overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Decorative title */}
        <div className="scroll-reveal text-center mb-16">
          <p className="font-sans-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground mb-2">
            ✦ &nbsp; Celebration Timeline &nbsp; ✦
          </p>
          <h2 className="font-script text-4xl md:text-5xl gold-gradient-text mb-2">
            The Program
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Gold vertical line — centered on desktop, left-aligned on mobile */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-1/2" />

          <div className="space-y-10">
            {events.map((event, i) => {
              const Icon = event.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={event.time}
                  className={`scroll-reveal ${event.delay} relative flex items-center gap-4 md:gap-0`}
                >
                  {/* Desktop: alternating content */}
                  <div
                    className={`hidden md:flex w-1/2 ${isLeft ? 'justify-end pr-10' : 'order-2 justify-start pl-10'}`}
                  >
                    <div className={`text-${isLeft ? 'right' : 'left'}`}>
                      <p className="font-sans-body text-[11px] tracking-[0.2em] uppercase text-primary font-medium">
                        {event.time}
                      </p>
                      <p className="font-serif-display text-lg text-foreground mt-0.5">
                        {event.title}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-[0_0_20px_-4px_rgba(197,160,89,0.3)]">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Mobile content */}
                  <div className="md:hidden">
                    <p className="font-sans-body text-[11px] tracking-[0.2em] uppercase text-primary font-medium">
                      {event.time}
                    </p>
                    <p className="font-serif-display text-base text-foreground mt-0.5">
                      {event.title}
                    </p>
                  </div>

                  {/* Desktop spacer */}
                  <div className={`hidden md:block w-1/2 ${isLeft ? 'order-2' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
