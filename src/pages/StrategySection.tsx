import { Search, Shield, TrendingUp, Target } from "lucide-react";
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
    <div className="w-full min-h-screen bg-[#0a0e1a] text-white px-4 py-16 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        
        {/* Header with accent line */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent"></div>
          <h1 className="pt-8 pb-5 text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight">
            Our Strategy & Approach:<br />
            <span className="text-[#00d4ff]">Logic, Not Luck</span>
          </h1>
        </motion.div>

        {/* Strategy Cards - Refined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Analysis Style */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
          >
            <Card className="bg-gradient-to-br from-[#1a1f2e] to-[#141824] border-[#00d4ff]/30 border h-full hover:border-[#00d4ff] transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-[#00d4ff]/10 rounded-2xl border border-[#00d4ff]/50 group-hover:bg-[#00d4ff]/20 transition-all duration-300">
                    <Search className="w-7 h-7 text-[#00d4ff]" />
                  </div>
                  <span className="text-2xl font-semibold">Analysis Style</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <Badge className="bg-[#00d4ff] text-[#0a0e1a] hover:bg-[#00d4ff]/90 text-base px-5 py-1.5 font-medium">
                  Hybrid: Volume Analysis meets Price Action
                </Badge>
                <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                    <span>Your net limit, analysis and trade setup explained clearly.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Management */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
          >
            <Card className="bg-gradient-to-br from-[#1a1f2e] to-[#141824] border-[#00d4ff]/30 border h-full hover:border-[#00d4ff] transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-[#00d4ff]/10 rounded-2xl border border-[#00d4ff]/50 group-hover:bg-[#00d4ff]/20 transition-all duration-300">
                    <Shield className="w-7 h-7 text-[#00d4ff]" />
                  </div>
                  <span className="text-2xl font-semibold">Risk Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-300 text-base space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                    <span>Maximum 1% Risk per Trade</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                    <Badge variant="outline" className="border-[#00d4ff] text-[#00d4ff] text-base px-3 py-1">
                      No-Ties
                    </Badge>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                    <span>No-Gamble Rule</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Strategy in Action - REDESIGNED IMAGE GALLERY */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-[#00d4ff]" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Strategy in Action
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg max-w-3xl">
            Real annotated trade examples showing our hybrid analysis approach in live market conditions.
          </p>

          {/* Image Gallery - Clean, Modern Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {tradeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                {/* Image Container with Backdrop */}
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/5 rounded-2xl blur-xl transition-all duration-500"></div>
                  
                  {/* Main Image Frame */}
                  <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#0f1218] p-4 md:p-6 rounded-2xl border border-[#00d4ff]/20 group-hover:border-[#00d4ff]/60 transition-all duration-500">
                    {/* Image Number Badge */}
                    <div className="absolute top-6 left-6 z-10 bg-[#00d4ff] text-[#0a0e1a] px-4 py-2 rounded-lg font-bold text-sm">
                      Example {index + 1}
                    </div>
                    
                    {/* Image */}
                    <div className="bg-[#0a0e1a] rounded-xl overflow-hidden">
                      <img 
                        src={example.image} 
                        alt={example.alt}
                        className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#00d4ff] to-transparent transition-all duration-700"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optional: Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center pt-8"
          >
            <p className="text-gray-500 text-sm uppercase tracking-wider">
              Scroll to see more examples or view detailed breakdowns
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}