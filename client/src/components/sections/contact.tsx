import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Ready to discuss your next cloud project or DevOps initiative? Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">omer.nazeer@email.com</p>
                    <p className="text-sm text-muted-foreground">Email me anytime</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">+92 XXX XXXXXXX</p>
                    <p className="text-sm text-muted-foreground">Available for calls</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Islamabad, Pakistan</p>
                    <p className="text-sm text-muted-foreground">Open to remote work</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Let's discuss your DevOps needs"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
