import { Search, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StrategySection() {
  const tradeExamples = [
    {
      title: "MT5 Proment",
      image: "/api/placeholder/500/300",
      alt: "Trade Example 1"
    },
    {
      title: "Management",
      image: "/api/placeholder/500/300",
      alt: "Trade Example 2"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#1a1d29] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-5 text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Our Strategy & Approach: Logic, Not Luck
        </motion.h1>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Analysis Style */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-[#232837] border-[#00d4ff] border-2 h-full hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-[#1a1d29] rounded-xl border-2 border-[#00d4ff]">
                    <Search className="w-8 h-8 text-[#00d4ff]" />
                  </div>
                  <span className="text-2xl">Analysis Style</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge className="bg-[#00d4ff] text-[#1a1d29] hover:bg-[#00d4ff]/90 text-base px-4 py-1">
                  Hybrid: Volume Analysis meets Price Action
                </Badge>
                <ul className="space-y-3 text-gray-300 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00d4ff] text-xl">•</span>
                    <span>Your net liimet your porrane your your matie oheec hiat/tfading possible.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Management */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-[#232837] border-[#00d4ff] border-2 h-full hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-[#1a1d29] rounded-xl border-2 border-[#00d4ff]">
                    <Shield className="w-8 h-8 text-[#00d4ff]" />
                  </div>
                  <span className="text-2xl">Risk Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00d4ff] text-xl">•</span>
                    <span>Maximum 1% Risk per Trade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00d4ff] text-xl">•</span>
                    <Badge variant="outline" className="border-[#00d4ff] text-[#00d4ff]">
                      No-Ties
                    </Badge>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00d4ff] text-xl">•</span>
                    <span>No-Gamble Rule</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Strategy in Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Strategy in Action: Annotated Trade Examples
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tradeExamples.map((example, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-[#232837] border-[#00d4ff] border-2 overflow-hidden hover:shadow-xl hover:shadow-[#00d4ff]/30 transition-all duration-300 group">
                  <CardHeader className="border-b border-gray-700 bg-[#1a1d29]/50">
                    <CardTitle className="flex items-center gap-3 text-white">
                      <div className="w-3 h-3 bg-[#00d4ff] rounded-full group-hover:bg-[#00ff88] transition-colors"></div>
                      <span className="text-lg">{example.title}</span>
                    </CardTitle>
                  </CardHeader>
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

        {/* Dive Deeper Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-8 pb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Dive Deeper into the Data</h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-8 px-8 text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#00ff88] rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#00d4ff]/50 transition-all duration-300 cursor-pointer"
          >
            <p className="text-[#1a1d29]">Dive Deeper into my Rating request</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}