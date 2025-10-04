import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: ''
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    setShowSuccessDialog(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: ''
    });
  };

  return (
    <section id="reservation" className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(43 74% 49% / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(43 74% 49% / 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Reserve Your{' '}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Table
            </span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey. Book your table and 
            experience the finest Italian dining.
          </p>
        </div>

        <div 
          className="max-w-2xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl text-foreground">
                Make a Reservation
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input border-border focus:border-primary/50 focus:ring-primary/20"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input border-border focus:border-primary/50 focus:ring-primary/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="bg-input border-border focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Time
                    </Label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 text-sm bg-input border border-border rounded-md focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground"
                    >
                      <option value="">Select time</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground font-medium flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Guests
                    </Label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 text-sm bg-input border border-border rounded-md focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                      <option value="7">7 People</option>
                      <option value="8">8+ People</option>
                    </select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  Confirm Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center items-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-heading">
              Reservasi Berhasil!
            </DialogTitle>
            <DialogDescription className="text-base mt-4">
              Terima kasih telah melakukan reservasi. Kami akan mengirimkan konfirmasi ke email Anda segera.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              variant="hero"
              className="w-full"
            >
              Tutup
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Reservation;