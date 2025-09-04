import { Card, CardContent } from '@/components/ui/card';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Risotto ai Porcini',
      description: 'Creamy Arborio rice with wild porcini mushrooms and aged Parmigiano',
      price: '€28',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=500&q=80',
      category: 'Primi Piatti'
    },
    {
      id: 2,
      name: 'Osso Buco alla Milanese',
      description: 'Slow-braised veal shanks with saffron risotto and gremolata',
      price: '€42',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
      category: 'Secondi Piatti'
    },
    {
      id: 3,
      name: 'Linguine alle Vongole',
      description: 'Fresh clams with white wine, garlic, and Italian parsley',
      price: '€32',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format&fit=crop&w=500&q=80',
      category: 'Primi Piatti'
    },
    {
      id: 4,
      name: 'Tiramisu della Casa',
      description: 'Traditional mascarpone dessert with espresso-soaked ladyfingers',
      price: '€12',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80',
      category: 'Dolci'
    },
    {
      id: 5,
      name: 'Branzino in Crosta',
      description: 'Sea bass baked in sea salt crust with Mediterranean herbs',
      price: '€38',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80',
      category: 'Secondi Piatti'
    },
    {
      id: 6,
      name: 'Barolo Riserva 2018',
      description: 'Premium Nebbiolo wine from Piedmont region',
      price: '€85',
      image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=500&q=80',
      category: 'Vini'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{' '}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Signature Menu
            </span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Each dish is crafted with passion, using the finest ingredients sourced 
            directly from Italy's most prestigious regions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card 
              key={item.id}
              className="group bg-card border-border hover:border-primary/20 transition-all duration-500 hover:shadow-gold hover:scale-105 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-heading text-lg font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                
                <p className="font-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;