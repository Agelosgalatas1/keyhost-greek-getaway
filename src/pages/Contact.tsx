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
      details: ["‭2752 220223‬"],
      action: null
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@keyhost.gr", "24/7 Response"],
      action: null
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;