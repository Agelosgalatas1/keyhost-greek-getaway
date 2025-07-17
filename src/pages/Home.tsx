import { Link } from 'react-router-dom';
import { Star, MessageSquare, Sparkles, TrendingUp, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-villa.jpg';

const Home = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Guest Communication",
      description: "24/7 professional guest support in multiple languages. We handle all inquiries, bookings, and issues."
    },
    {
      icon: Sparkles,
      title: "Cleaning & Maintenance",
      description: "Professional cleaning between stays and proactive maintenance to keep your property in perfect condition."
    },
    {
      icon: TrendingUp,
      title: "Pricing & Optimization",
      description: "Dynamic pricing algorithms and market analysis to maximize your revenue across all platforms."
    }
  ];

  const platforms = [
    { name: "Airbnb", color: "text-red-500" },
    { name: "Booking.com", color: "text-blue-600" },
    { name: "Vrbo", color: "text-orange-500" }
  ];

  const testimonials = [
    {
      name: "Maria Konstantinou",
      location: "Mykonos Villa Owner",
      text: "Key Host transformed my property into a consistent income source. I haven't worried about a single booking since they took over.",
      rating: 5
    },
    {
      name: "Dimitris Papadopoulos", 
      location: "Santorini Apartment Owner",
      text: "Professional service, great communication, and my revenue increased by 40% in the first year. Highly recommended!",
      rating: 5
    },
    {
      name: "Elena Georgiadou",
      location: "Athens Property Owner",
      text: "Finally, I can enjoy passive income from my property. Key Host handles everything while I focus on other investments.",
      rating: 5
    }
  ];

  const benefits = [
    "Full property management",
    "Professional photography",
    "Multi-platform listings",
    "Guest screening & support",
    "Regular property reports",
    "Insurance coverage"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Property.
            <span className="block text-accent">Our Expertise.</span>
            <span className="block">Your Income.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Key Host handles everything — you earn passively from your Mediterranean property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton asChild variant="hero" size="xl">
              <Link to="/submit-property">List Your Property</Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">Learn More</Link>
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Effortless Property Management for Maximum Returns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From listing creation to guest checkout, we manage every aspect of your short-term rental. 
            You enjoy guaranteed income while we handle the work.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Maximize Your Property's Potential</h2>
            <p className="text-xl text-muted-foreground">Three pillars of our comprehensive management approach</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">We List Your Property On</h3>
          <div className="flex justify-center items-center space-x-12">
            {platforms.map((platform, index) => (
              <div key={index} className={`text-2xl font-bold ${platform.color}`}>
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Property Owners Choose Key Host
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">95%</div>
                <p className="text-muted-foreground">Occupancy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">Guest Support</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <p className="text-muted-foreground">Properties Managed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">40%</div>
                <p className="text-muted-foreground">Avg. Revenue Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Property Owners Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from real property owners across Greece</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning Passive Income?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join 150+ property owners who trust Key Host with their investments. 
            Get your free property analysis today.
          </p>
          <EnhancedButton asChild variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/submit-property">Submit Your Property</Link>
          </EnhancedButton>
        </div>
      </section>
    </div>
  );
};

export default Home;