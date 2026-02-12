import { Heart } from 'lucide-react';
import promiseImage from '@/assets/promise-ring.jpeg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PromiseSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Full-width background image — dynamic height */}
      <div className="relative w-full">
        <img
          src={promiseImage}
          alt="Promise"
          className="w-full h-[350px] md:h-[500px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsla(39,52%,56%,0.4)] to-[hsla(0,0%,0%,0.5)]" />
        <div className="absolute inset-0 bokeh-overlay" />

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center md:items-end md:pr-20 md:text-right">
          <Heart className="scroll-reveal w-10 h-10 md:w-14 md:h-14 text-white/90 animate-float-heart mb-6" />
          <p className="scroll-reveal scroll-reveal-delay-1 font-script text-3xl md:text-5xl lg:text-6xl text-white leading-snug max-w-lg drop-shadow-lg">
            We can't wait to celebrate with you
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
