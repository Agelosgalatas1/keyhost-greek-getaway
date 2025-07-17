import { Link } from 'react-router-dom';
import { Users, Heart, Award, Target, CheckCircle, TrendingUp } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mediterranean Hospitality",
      description: "We bring the warmth and care of Greek hospitality to every guest interaction, ensuring memorable experiences."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Highest standards in property management, cleaning, and guest services. Quality is never compromised."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on maximizing your property's revenue potential through data-driven strategies and market expertise."
    }
  ];

  const whyChooseUs = [
    {
      title: "Local Market Expertise",
      description: "Our team deeply understands Greece's vacation rental landscape — from seasonal pricing patterns to local regulations and guest expectations. This knowledge helps you price competitively, avoid costly mistakes, and maximize occupancy rates year-round."
    },
    {
      title: "Multilingual Team",
      description: "We communicate seamlessly with guests and owners in Greek, English, French, and German. This builds trust with international visitors, reduces booking hesitations, and ensures you never miss opportunities due to language barriers."
    },
    {
      title: "24/7 Guest Support",
      description: "Your guests can reach us anytime — day or night — for check-in issues, emergency repairs, or simple questions. You'll never wake up to urgent calls or spend your evenings troubleshooting problems from afar."
    },
    {
      title: "Professional Presentation",
      description: "Every property gets professional photography, expert staging, and compelling descriptions that make listings stand out. This attention to detail attracts quality guests, commands higher rates, and generates more positive reviews."
    },
    {
      title: "Revenue Optimization",
      description: "We adjust your pricing daily based on real-time data — seasonality, local events, competitor rates, and booking demand. This data-driven approach consistently outperforms static pricing, often increasing revenue by 15-25%."
    },
    {
      title: "Maintenance & Repairs Network",
      description: "Our trusted network of local cleaners, technicians, and tradespeople keeps your property in pristine condition. From routine maintenance to emergency repairs, we handle everything without requiring your time or presence."
    },
    {
      title: "Transparent Reporting",
      description: "Receive clear monthly reports covering bookings, revenue, expenses, and property updates. You'll always know exactly how your investment is performing without having to track countless details yourself."
    },
    {
      title: "Legal & Tax Support",
      description: "We help you navigate Greece's short-term rental regulations, tax obligations, and required documentation. Stay compliant with local laws while we handle the paperwork, permits, and government reporting."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Key Host
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about helping property owners unlock the full potential of their Mediterranean investments
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in Athens in 2020, Key Host emerged from a simple observation: property owners were spending countless hours managing their short-term rentals instead of enjoying the passive income they promised.
                </p>
                <p>
                  Our founders, experienced hospitality professionals and property investors, created Key Host to bridge this gap. We combine local market knowledge with international hospitality standards to deliver exceptional results.
                </p>
                <p>
                  Today, we manage over 150 properties across Greece's most sought-after destinations, from the cosmopolitan islands of Mykonos and Santorini to the historic neighborhoods of Athens and the pristine beaches of Crete.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">2020</div>
                  <p className="text-muted-foreground">Founded</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">150+</div>
                  <p className="text-muted-foreground">Properties</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15</div>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">8</div>
                  <p className="text-muted-foreground">Greek Islands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            To transform property ownership into truly passive income by providing comprehensive, professional management services that maximize returns while maintaining the highest standards of hospitality.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Key Host?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just property managers – we're your partners in creating sustainable, profitable vacation rental businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our diverse team combines local knowledge, international experience, and genuine passion for hospitality to deliver exceptional results.
          </p>
          
          <div className="bg-background rounded-lg p-8 shadow-elegant">
            <Users className="h-16 w-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Professional Team of 15</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From property managers and guest coordinators to cleaning teams and maintenance specialists, 
              every team member is carefully selected and trained to uphold our standards of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join the growing community of property owners who have discovered the freedom of truly passive income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton asChild variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/submit-property">Submit Your Property</Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;