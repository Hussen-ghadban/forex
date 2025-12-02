import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ContactTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      image: "/api/placeholder/150/150",
      rating: 5,
      text: "Wy im trading tnamed in weekal lne sugud thu ereeade"
    },
    {
      name: "Jane Smith",
      image: "/api/placeholder/150/150",
      rating: 5,
      text: "Consistent cleer sigrals. My My account gram by 15% in the first month"
    },
    {
      name: "Mike Johnson",
      image: "/api/placeholder/150/150",
      rating: 5,
      text: "Finally stadegy your sarhame fiexe dhuti he methy"
    }
  ];

  const socialLinks = [
    { name: "Linkedin", icon: "linkedin", color: "#0077B5" },
    { name: "Telegram/ els", icon: "telegram", color: "#00d4ff" },
    { name: "Teteram", icon: "telegram", color: "#5A6A7C" },
    { name: "Instagram Panys", icon: "instagram", color: "#E4405F" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full min-h-screen bg-[#1a1d29] text-white px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Testimonials Section */}
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center pb-2"
          >
            Let's Build Your Trading Future
          </motion.h1>

          {/* Testimonials Carousel */}
          <div className="relative flex items-center justify-center gap-4">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-[#232837] hover:bg-[#2a2f3f] rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-16">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#232837] border-[#00d4ff] border-2 hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300">
                    <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                      <div className="w-24 h-24 rounded-full border-4 border-[#00d4ff] overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {testimonial.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Next Button */}
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

        {/* Contact and Connect Section */}
        <div className="grid md:grid-cols-2 gap-12 pt-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Contact / Your Trading Futuch</h2>
            <div className="space-y-4">
              <Input 
                placeholder="Full Name"
                className="bg-[#232837] border-gray-700 text-white placeholder:text-gray-500"
              />
              <Input 
                type="email"
                placeholder="Email Address"
                className="bg-[#232837] border-gray-700 text-white placeholder:text-gray-500"
              />
              <Input 
                placeholder="Phone Address"
                className="bg-[#232837] border-gray-700 text-white placeholder:text-gray-500"
              />
              <Input 
                placeholder="Phone (Optional)"
                className="bg-[#232837] border-gray-700 text-white placeholder:text-gray-500"
              />
              <Textarea 
                placeholder="Your Message"
                rows={5}
                className="bg-[#232837] border-gray-700 text-white placeholder:text-gray-500 resize-none"
              />
              <Button className="w-full bg-[#00d4ff] hover:bg-[#00d4ff]/90 text-[#1a1d29] font-semibold py-6 text-lg">
                Send Message
              </Button>
            </div>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: social.color }}
                    >
                      <span className="text-white text-2xl font-bold">
                        {social.icon === "linkedin" ? "in" : 
                         social.icon === "telegram" ? "✈" : 
                         social.icon === "instagram" ? "📷" : ""}
                      </span>
                    </div>
                    <span className="text-sm text-gray-300">{social.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h2 className="text-3xl font-bold">Book a Call</h2>
              <Button className="w-full bg-gradient-to-r from-[#00d4ff] to-[#00ff88] hover:from-[#00d4ff]/90 hover:to-[#00ff88]/90 text-[#1a1d29] font-bold py-8 text-xl rounded-full">
                Book a Free Consultation
              </Button>
              <p className="text-gray-400">
                Email: <a href="mailto:contact@nextforx.com" className="text-[#00d4ff] hover:underline">
                  contact@nextforx.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}