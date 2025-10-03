import { useParallax } from '@/hooks/use-parallax';

const About = () => {
  const parallaxOffset = useParallax(0.3);

  return (
    <section id="about" className="py-20 bg-gradient-elegant relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 
                className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Our Story of{' '}
                <span className="text-transparent bg-gradient-gold bg-clip-text">
                  Passion
                </span>
              </h2>
              
              <p 
                className="font-body text-lg text-muted-foreground leading-relaxed mb-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                For over three generations, the Eleganza family has been crafting 
                extraordinary culinary experiences rooted in authentic Italian traditions. 
                Our passion for excellence drives us to source only the finest ingredients 
                from local artisans and trusted suppliers across Italy.
              </p>
              
              <p 
                className="font-body text-lg text-muted-foreground leading-relaxed mb-6"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Every dish tells a story of heritage, innovation, and the relentless 
                pursuit of perfection. From our handmade pasta to our carefully curated 
                wine selection, we believe that dining should be an unforgettable journey 
                of the senses.
              </p>
              
              <div 
                className="grid grid-cols-3 gap-6 pt-8"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
                  <div className="font-heading text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="font-body text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center" data-aos="zoom-in" data-aos-delay="900">
                  <div className="font-heading text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="font-body text-sm text-muted-foreground">Signature Dishes</div>
                </div>
                <div className="text-center" data-aos="zoom-in" data-aos-delay="1100">
                  <div className="font-heading text-3xl font-bold text-primary mb-2">5★</div>
                  <div className="font-body text-sm text-muted-foreground">Michelin Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image with Parallax */}
          <div 
            className="relative"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div 
              className="relative overflow-hidden rounded-xl shadow-elegant transition-transform duration-100"
              style={{ transform: `translateY(${parallaxOffset * -0.5}px)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80"
                alt="Chef preparing authentic Italian cuisine"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-gold rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full animate-gold-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;