import heroImage from '@/assets/hero-couple.jpeg';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image — truly full width, no crop */}
      <div className="absolute inset-0 animate-slip-down">
        <img
          src={heroImage}
          alt="Ajay and Akshaya"
          className="w-full h-full object-cover object-[70%_20%] md:object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
      </div>

      {/* Text overlay — positioned on left, text center-aligned within */}
      <div className="relative z-10 flex h-full min-h-screen flex-col justify-end items-start pb-20 md:pb-28">
        <div className="ml-[2%] md:ml-[8%] flex flex-col items-center text-center">
          <p
            className="font-script text-4xl md:text-6xl text-white mb-2 drop-shadow-lg opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            We Do
          </p>
          <p
            className="font-sans-body text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/80 mb-4 font-medium opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Together with our families,
          </p>

          <h1
            className="font-serif-display text-3xl md:text-5xl lg:text-6xl gold-gradient-text mb-3 drop-shadow-lg font-bold animate-fade-slide-up-gradient"
            style={{ animationDelay: '1.3s' }}
          >
            Ajay & Akshaya
          </h1>

          <p
            className="font-serif-display text-base md:text-xl text-white/95 italic mb-4 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
          >
            Invite you to our Reception
          </p>

          <div className="flex flex-col items-center gap-1 text-white/90">
            <p className="font-sans-body text-xs md:text-base tracking-[0.2em] uppercase font-bold opacity-0 animate-fade-slide-up"
              style={{ animationDelay: '2.3s', animationFillMode: 'forwards' }}>
              Saturday, March 7th, 2026
            </p>
            <p className="font-serif-display text-xs md:text-lg tracking-[0.1em] uppercase opacity-0 animate-fade-slide-up"
              style={{ animationDelay: '2.8s', animationFillMode: 'forwards' }}>
              SRI KRISHNAVENI PALACE
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
