import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-restaurant.jpg';
import { useParallax } from '@/hooks/use-parallax';


const Hero = () => {
  const parallaxOffset = useParallax(0.5);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${parallaxOffset}px) scale(1.1)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div>
          <h1 
            className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            Benvenuti al{' '}
            <span 
              className="text-transparent bg-gradient-gold bg-clip-text"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Ristorante Eleganza
            </span>
          </h1>
          
          <p 
            className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Authentic Italian Cuisine with a Modern Touch
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reserve a Table
            </Button>
            
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;