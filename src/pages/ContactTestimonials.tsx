import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Send,
  Instagram,
  Mail
} from "lucide-react";

export default function ContactTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    message: false
  });

  const RECIPIENT_EMAIL = "arzouni1277@gmail.com";

  const testimonials = [
    {
      name: "Ahmad Arzouni",
      image: "/images/arzouni.jpg",
      rating: 5,
      text: "Thanks to consistent, clear signals, my account achieved 50% growth in the first week."
    },
    {
      name: "Jane Smith",
      image: "/images/person2.jpg",
      rating: 5,
      text: "Consistent clear signals. My account grew by 15% in the first month"
    },
    {
      name: "Mike Johnson",
      image: "/images/person3.jpg",
      rating: 5,
      text: "Finally a strategy that works consistently month after month"
    }
  ];

  const socialLinks = [
    { 
      name: "Telegram", 
      icon: "telegram", 
      color: "#00d4ff", 
      lucideIcon: Send, 
      url: "https://t.me/nextforexxxxx" 
    },
    { 
      name: "Instagram", 
      icon: "instagram", 
      color: "#E4405F", 
      lucideIcon: Instagram, 
      url: "https://www.instagram.com/your-account" 
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newErrors = {
      fullName: !formData.fullName,
      email: !formData.email,
      message: !formData.message
    };
    
    setErrors(newErrors);

    if (newErrors.fullName || newErrors.email || newErrors.message) {
      return;
    }

    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phoneNumber || "Not provided"}\n` +
      `Message: ${formData.message}`
    );

    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
    
    setErrors({
      fullName: false,
      email: false,
      message: false
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#1a1d29] text-white px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center pb-2"
          >
            Let's Build Your Trading Future
          </motion.h1>

          <div className="relative flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-[#232837] hover:bg-[#2a2f3f] rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>

            <div className="w-full max-w-3xl px-16">
              {testimonials.length > 0 && (
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="bg-[#232837] border-[#00d4ff] border-2 hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300">
                    <CardContent className="flex flex-col items-center text-center p-8 space-y-6">
                      
                      <div className="w-40 h-40 rounded-full border-4 border-[#00d4ff] overflow-hidden">
                        <img
                          src={testimonials[currentSlide].image}
                          alt={testimonials[currentSlide].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-xl font-semibold">{testimonials[currentSlide].name}</h3>

                      <div className="flex gap-1">
                        {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed italic">
                        "{testimonials[currentSlide].text}"
                      </p>

                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-[#232837] hover:bg-[#2a2f3f] rounded-full w-12 h-12"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Contact Us</h2>
            
            <div className="space-y-4">
              <div>
                <Input 
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`bg-[#232837] border-gray-700 text-white placeholder:text-gray-500 ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">Full name is required</p>}
              </div>
              
              <div>
                <Input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`bg-[#232837] border-gray-700 text-white placeholder:text-gray-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
              </div>
              
              <Input 
                name="phoneNumber"
                placeholder="Phone Number (Optional)"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="bg-[#232837] border-gray-700 text-white placeholder:text-gray-500"
              />
              
              <div>
                <Textarea 
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`bg-[#232837] border-gray-700 text-white placeholder:text-gray-500 resize-none ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
              </div>
              
              <Button 
                onClick={handleSubmit}
                className="w-full bg-[#00d4ff] hover:bg-[#00d4ff]/90 text-[#1a1d29] font-semibold py-6 text-lg group"
              >
                Send Message 
                <Mail className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.lucideIcon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2 cursor-pointer"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: social.color }}
                      >
                        <IconComponent className="text-white w-8 h-8" />
                      </div>
                      <span className="text-sm text-gray-300">{social.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h2 className="text-3xl font-bold">Book a Call</h2>
              <Button className="w-full bg-gradient-to-r from-[#00d4ff] to-[#00ff88] hover:from-[#00d4ff]/90 hover:to-[#00ff88]/90 text-[#1a1d29] font-bold py-8 text-xl rounded-full">
                Book a Free Consultation
              </Button>
              <p className="text-gray-400">
                Email: <a href={`mailto:${RECIPIENT_EMAIL}`} className="text-[#00d4ff] hover:underline">
                  {RECIPIENT_EMAIL}
                </a>
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}