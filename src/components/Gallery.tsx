import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
      title: 'Elegant Dining Room',
      description: 'Our sophisticated main dining area with candlelit ambiance'
    },
    {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      title: 'Wine Cellar',
      description: 'Curated selection of finest Italian wines'
    },
    {
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=1200&q=80',
      title: 'Signature Dishes',
      description: 'Handcrafted pasta and authentic Italian flavors'
    },
    {
      url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80',
      title: 'Private Dining',
      description: 'Intimate spaces for special occasions'
    },
    {
      url: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80',
      title: 'Culinary Arts',
      description: 'Our master chefs at work creating culinary masterpieces'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gallery of{' '}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Excellence
            </span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Step into our world of refined dining, exquisite cuisine, and 
            unforgettable moments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative mb-8 group">
            <div className="relative overflow-hidden rounded-xl shadow-elegant h-[500px]">
              <img
                src={galleryImages[currentImage].url}
                alt={galleryImages[currentImage].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {galleryImages[currentImage].title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {galleryImages[currentImage].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="elegant"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="elegant"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0 ${
                  index === currentImage 
                    ? 'ring-2 ring-primary shadow-gold' 
                    : 'hover:ring-2 hover:ring-primary/50'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-20 h-20 object-cover transition-transform duration-300 hover:scale-110"
                />
                {index === currentImage && (
                  <div className="absolute inset-0 bg-primary/20"></div>
                )}
              </button>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;