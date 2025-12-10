import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Gauge, Settings, Target } from "lucide-react";

export default function TechStackSection() {
  const features = [
    {
      icon: Target,
      title: "Ease to Use"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics"
    },
    {
      icon: Gauge,
      title: "Reliability & Speed"
    },
    {
      icon: Settings,
      title: "Multi-Device Access"
    }
  ];

  const tradingExamples = [
    {
      title: "Pizetten4",
      image: "/api/placeholder/500/350",
      alt: "MT5 Trading Example 1"
    },
    {
      title: "MT5 Placement",
      image: "/api/placeholder/500/350",
      alt: "MT5 Trading Example 2"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#1a1d29] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center pb-2"
        >
          Engineered for Excellence: Our Trading Tech Stack
        </motion.h1>

        {/* MetaTrader 5 Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-start gap-8"
        >
          {/* MT5 Logo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0099cc] flex items-center justify-center">
              <span className="text-6xl font-bold text-white">M5</span>
            </div>
          </div>

          {/* MT5 Description */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">MetaTrader 5 (MT5)</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hybrid is multi-aset platform for speed, Price Action. Im. supports Forex, andh adiata dmiarket's, and CFDS, stocks,  to clean interface acresass as devices.
            </p>
            <Button className="bg-gradient-to-r from-[#00d4ff] to-[#00ff88] hover:from-[#00d4ff]/90 hover:to-[#00ff88]/90 text-[#1a1d29] font-semibold px-8 py-6 text-lg rounded-lg">
              Download MetaTrader 5
            </Button>
          </div>
        </motion.div>

        {/* Why We Trust MT5 */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Why We Trust MT5 Every Day
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-[#232837] border-[#00d4ff] border-2 hover:shadow-lg hover:shadow-[#00d4ff]/30 transition-all duration-300">
                  <CardContent className="flex flex-col items-center justify-center text-center p-8 space-y-4 h-full">
                    <div className="p-4 bg-[#1a1d29] rounded-full border-2 border-[#00d4ff]">
                      <feature.icon className="w-10 h-10 text-[#00d4ff]" />
                    </div>
                    <h3 className="text-lg text-white font-semibold">{feature.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MT5 in Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            MT5 in Action: Precision Trading
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {tradingExamples.map((example, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-[#232837] border-[#00d4ff] border-2 overflow-hidden hover:shadow-xl hover:shadow-[#00d4ff]/30 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Header Badge */}
                      <div className="absolute top-4 left-4 z-10 bg-[#232837]/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#00d4ff] flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                        <span className="text-sm font-semibold">{example.title}</span>
                      </div>
                      
                      {/* Trading Chart Image */}
                      <div className="aspect-video bg-[#1a1d29] flex items-center justify-center overflow-hidden">
                        <img 
                          src={example.image} 
                          alt={example.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}