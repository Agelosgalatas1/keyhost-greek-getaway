import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Home, MessageSquare, DollarSign, Sparkles, Wrench, FileText, Camera, Shield, Clock, TrendingUp } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const services = [
    {
      icon: Home,
      title: "Listing Creation & Optimization",
      description: "Professional listing setup across all major platforms with SEO optimization",
      details: [
        "Professional photography and virtual tours",
        "Compelling listing descriptions in multiple languages", 
        "SEO-optimized titles and keywords",
        "Competitive pricing analysis and setup",
        "Cross-platform listing synchronization",
        "Regular updates and seasonal optimization"
      ]
    },
    {
      icon: MessageSquare,
      title: "24/7 Guest Support",
      description: "Round-the-clock guest communication and support in multiple languages",
      details: [
        "Pre-arrival communication and check-in instructions",
        "24/7 multilingual guest support (Greek, English, German, French)",
        "Emergency response and problem resolution",
        "Guest feedback collection and review management",
        "Damage assessment and insurance claims",
        "Check-out coordination and follow-up"
      ]
    },
    {
      icon: DollarSign,
      title: "Dynamic Pricing & Revenue Optimization",
      description: "AI-powered pricing strategies to maximize your property's earning potential",
      details: [
        "Real-time market analysis and competitor monitoring",
        "Seasonal pricing adjustments and event-based optimization",
        "Minimum stay requirements optimization",
        "Last-minute booking strategies",
        "Revenue forecasting and performance analytics",
        "Regular pricing strategy reviews and adjustments"
      ]
    },
    {
      icon: Sparkles,
      title: "Professional Cleaning & Turnover",
      description: "Thorough cleaning and property preparation between every guest stay",
      details: [
        "Professional cleaning team with quality checklist",
        "Linen and towel replacement service",
        "Amenity restocking (toiletries, coffee, etc.)",
        "Property inspection and condition reporting",
        "Same-day turnover capabilities",
        "Deep cleaning and seasonal maintenance"
      ]
    },
    {
      icon: Wrench,
      title: "Property Maintenance & Repairs",
      description: "Proactive maintenance and quick response to any property issues",
      details: [
        "Regular property inspections and maintenance schedules",
        "24/7 emergency repair response",
        "Network of certified local contractors and specialists",
        "Preventive maintenance programs",
        "Appliance servicing and replacements",
        "Garden and pool maintenance services"
      ]
    },
    {
      icon: FileText,
      title: "Owner Reports & Analytics",
      description: "Comprehensive reporting and transparent financial management",
      details: [
        "Monthly financial reports with detailed breakdowns",
        "Real-time dashboard access to property performance",
        "Occupancy and revenue analytics",
        "Guest review summaries and trend analysis",
        "Tax documentation and expense tracking",
        "Performance benchmarking against market standards"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "High-quality photos that showcase your property's best features"
    },
    {
      icon: Shield,
      title: "Insurance & Legal Compliance",
      description: "Comprehensive insurance coverage and legal compliance management"
    },
    {
      icon: Clock,
      title: "Concierge Services",
      description: "Premium guest services including tours, transfers, and local recommendations"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Regular market insights and investment guidance for property optimization"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Οι υπηρεσίες μας
          </h1>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Οι υπηρεσίες μας</h2>
          </div>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    {expandedService === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  
                  {expandedService === index && (
                    <div className="px-6 pb-6 border-t bg-muted/20">
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {service.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium add-on services to enhance your property's appeal and your investment returns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting started with Key Host is simple and straightforward
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Submit Property", description: "Tell us about your property and your goals" },
              { step: "02", title: "Property Analysis", description: "We analyze your property's potential and create a custom strategy" },
              { step: "03", title: "Setup & Launch", description: "Professional photography, listing creation, and platform setup" },
              { step: "04", title: "Manage & Earn", description: "We handle everything while you enjoy passive income" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximize Your Property's Potential?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let us handle the work while you enjoy guaranteed passive income from your property investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton asChild variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/submit-property">Get Started Today</Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Schedule Consultation</Link>
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;