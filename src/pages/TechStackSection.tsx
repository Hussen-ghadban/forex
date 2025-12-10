import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Gauge, Settings, Target } from "lucide-react";
import { useMemo } from "react";

export default function TechStackSection() {
  // Detect if user is on iOS
  const isIOS = useMemo(() => {
    return typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  }, []);

  const mt5DownloadLink = isIOS 
    ? "https://apps.apple.com/us/app/metatrader-5-forex-stocks/id413251709"
    : "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5";

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
            <img
              src="metatrader5.jpeg"
              alt="Profile"
              className="w-full h-auto"
            />
          </div>

          {/* MT5 Description */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">MetaTrader 5 (MT5)</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              MetaTrader 5 (MT5) is a powerful multi-asset trading platform used for forex, stocks, and CFDs.
               It offers advanced charting, fast execution, automated trading with Expert Advisors (EAs), and access to a large set of technical indicators. MT5 is known for its professional tools,
               user-friendly interface, and flexibility for both beginner and advanced traders.
            </p>
            <Button 
              onClick={() => window.open(mt5DownloadLink, '_blank')}
              className="bg-gradient-to-r from-[#00d4ff] to-[#00ff88] hover:from-[#00d4ff]/90 hover:to-[#00ff88]/90 text-[#1a1d29] font-semibold px-8 py-6 text-lg rounded-lg"
            >
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
                <Card className="bg-[#232837] border-[#00d4ff] border-2 hover:shadow-lg hover:shadow-[#00d4ff]/30 transition-all duration-300 h-full">
                  <CardContent className="flex flex-col items-center justify-center text-center p-6 space-y-3 h-48">
                    <div className="p-3 bg-[#1a1d29] rounded-full border-2 border-[#00d4ff]">
                      <feature.icon className="w-8 h-8 text-[#00d4ff]" />
                    </div>
                    <h3 className="text-base text-white font-semibold">{feature.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}