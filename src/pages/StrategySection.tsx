import { Search, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StrategySection() {
  const tradeExamples = [
    {
      image: "/images/chart1.jpg",
      alt: "Trade Example 1"
    },
    {
      image: "/images/chart2.jpg",
      alt: "Trade Example 2"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#1a1d29] text-white px-4 py-16 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
        
        {/* Header */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Our Strategy & Approach: Logic, Not Luck
        </motion.h1>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Analysis Style */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-[#232837] border-[#00d4ff] border-2 h-full hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 md:gap-4 text-white">
                  <div className="p-2 md:p-3 bg-[#1a1d29] rounded-xl border-2 border-[#00d4ff]">
                    <Search className="w-6 h-6 md:w-8 md:h-8 text-[#00d4ff]" />
                  </div>
                  <span className="text-xl md:text-2xl">Analysis Style</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <Badge className="bg-[#00d4ff] text-[#1a1d29] hover:bg-[#00d4ff]/90 text-sm md:text-base px-3 md:px-4 py-1">
                  Hybrid: Volume Analysis meets Price Action
                </Badge>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-[#00d4ff] text-lg md:text-xl">•</span>
                    <span>Your net limit, analysis and trade setup explained clearly.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Management */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-[#232837] border-[#00d4ff] border-2 h-full hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 md:gap-4 text-white">
                  <div className="p-2 md:p-3 bg-[#1a1d29] rounded-xl border-2 border-[#00d4ff]">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#00d4ff]" />
                  </div>
                  <span className="text-xl md:text-2xl">Risk Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 md:space-y-3">
                <ul className="text-gray-300 text-sm md:text-base">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-[#00d4ff] text-lg md:text-xl">•</span>
                    <span>Maximum 1% Risk per Trade</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-[#00d4ff] text-lg md:text-xl">•</span>
                    <Badge variant="outline" className="border-[#00d4ff] text-[#00d4ff] text-sm md:text-base">
                      No-Ties
                    </Badge>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-[#00d4ff] text-lg md:text-xl">•</span>
                    <span>No-Gamble Rule</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Strategy in Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8 md:space-y-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Strategy in Action: Annotated Trade Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {tradeExamples.map((example, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-[#232837] border-[#00d4ff] border-2 overflow-hidden hover:shadow-xl hover:shadow-[#00d4ff]/30 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-[#1a1d29] flex items-center justify-center overflow-hidden">
                      <img 
                        src={example.image} 
                        alt={example.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
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
