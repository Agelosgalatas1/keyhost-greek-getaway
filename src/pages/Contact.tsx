import { useState } from 'react';
import emailjs from 'emailjs-com';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'info@keyhost.gr',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        submission_date: new Date().toLocaleDateString()
      };

      await emailjs.send(
        'service_f6b8jha',
        'template_fr5zztm',
        templateParams,
        'DmcIKnUBTd1nEGEkl'
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Τοποθεσία Γραφείου",
      details: ["Nafplio, Greece", "Aigiou 43"],
      action: null
    },
    {
      icon: Phone,
      title: "Τηλέφωνο",
      details: ["+30 123 456 7890", "Mon-Fri 9AM-6PM"],
      action: "tel:+301234567890"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@keyhost.gr", "24/7 Response"],
      action: "mailto:info@keyhost.gr"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["Instant Support", "Quick Responses"],
      action: "https://wa.me/1234567890"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Επικοινωνήστε μαζί μας
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Είστε έτοιμοι να συζητήσουμε το ακίνητό σας; Είμαστε εδώ για να σας βοηθήσουμε με οποιαδήποτε ερώτηση σχετικά με τις υπηρεσίες μας.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <EnhancedButton asChild variant="outline" size="sm">
                      <a 
                        href={info.action} 
                        target={info.action.startsWith('http') ? '_blank' : undefined}
                        rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        Contact
                      </a>
                    </EnhancedButton>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Send className="h-6 w-6 mr-2 text-accent" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input
                          id="contact-name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        placeholder="What can we help you with?"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>
                    
                    <EnhancedButton
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </EnhancedButton>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-muted rounded-lg p-8 text-center h-64 flex items-center justify-center">
                    <div>
                      <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Our Office</h3>
                      <p className="text-muted-foreground">Athens, Greece</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-accent" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Emergency support available 24/7 for current clients
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Quick Response Promise</h3>
                  <p className="text-primary-foreground/90">
                    We respond to all inquiries within 24 hours, usually much faster. 
                    For urgent matters, call or WhatsApp us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">How quickly can you start managing my property?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Typically within 7-10 days after property assessment and contract signing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What's included in your management fee?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Everything: listing management, guest communication, cleaning, maintenance, and reporting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you handle properties outside Athens?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Yes, we manage properties across Greece including all major islands and cities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What if I want to use my property personally?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We easily block dates for your personal use through our management system.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <EnhancedButton asChild variant="outline">
              <a href="mailto:info@keyhost.gr">Ask Us Directly</a>
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;