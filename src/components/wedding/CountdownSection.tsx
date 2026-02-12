import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WEDDING_DATE = new Date('2026-03-07T18:00:00+05:30').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

const CountdownSection = () => {
  const sectionRef = useScrollReveal();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, WEDDING_DATE - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { label: 'Days', value: timeLeft.days, delay: 'scroll-reveal-delay-1' },
    { label: 'Hours', value: timeLeft.hours, delay: 'scroll-reveal-delay-2' },
    { label: 'Mins', value: timeLeft.mins, delay: 'scroll-reveal-delay-3' },
    { label: 'Secs', value: timeLeft.secs, delay: 'scroll-reveal-delay-4' },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 noise-texture bg-background/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="scroll-reveal mb-12">
          <p className="font-sans-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3 opacity-80">
            ✦ &nbsp; Save the Date &nbsp; ✦
          </p>
          <h2 className="font-serif-display text-2xl md:text-4xl text-foreground italic">
            The countdown to forever has begun
          </h2>
          <div className="w-12 h-px bg-primary/30 mx-auto mt-6" />
        </div>

        <div className="flex justify-center gap-4 md:gap-8">
          {boxes.map((box) => (
            <div
              key={box.label}
              className={`scroll-reveal ${box.delay} group relative flex flex-col items-center justify-center w-20 h-24 md:w-32 md:h-36`}
            >
              {/* Box Background with Glassmorphism */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md rounded-xl border border-primary/20 shadow-[0_8px_32px_0_rgba(197,160,89,0.1)] transition-all duration-500 group-hover:border-primary/40 group-hover:bg-white/[0.06]" />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-transparent blur-sm" />

              <div className="relative z-10 flex flex-col items-center">
                <span className="font-serif-display text-3xl md:text-5xl font-bold gold-gradient-text tabular-nums tracking-tighter">
                  {String(box.value).padStart(2, '0')}
                </span>
                <span className="font-sans-body text-[9px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground/80 mt-2 font-medium">
                  {box.label}
                </span>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
