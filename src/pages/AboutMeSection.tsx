import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function AboutMeSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center py-10 px-4 bg-[#0f1218] text-white"
    >
      <div className="w-full max-w-6xl space-y-14">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold"
        >
          About Me
        </motion.h1>

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 bg-[#141821] p-6 md:p-10 rounded-2xl shadow-xl"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[#3bc2ff]">
              <img
                src="profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-white font-semibold text-lg">Mohamad Rkein</p>
          </motion.div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 md:space-y-8 w-full">
            {/* Trading Journey */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-3">My Trading Journey</h2>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                At least one year of experience in the forex field. I used to work with Prima Capital broker, and afterward, 
                I am now with BBcorp broker through Aawada Forex, which is a company registered in Lebanon and legally licensed.
              </p>
            </motion.div>

            <div className="border-t border-gray-700"></div>

            {/* Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                My Philosophy (Transparency & Discipline)
              </h2>
              <ul className="space-y-4 text-gray-300">
                {[
                  "I improve it using six different methods: SK system, SMC, Classic, Elliott Waves, and ICT",
                  "Reduce position size, improve risk management",
                  "Controlling emotions, building discipline, mastering patience", 
                  "Advanced traders study their trades, review mistakes, and learn from data", 
                  "You trade what you see, not what you believe"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-[#3bc2ff] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-[15px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#141821] border border-[#3bc2ff]/30 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <CardContent className="space-y-4">
                <h3 className="text-lg md:text-xl text-white font-semibold">My Mission</h3>
                <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                  My mission is to simplify Forex for traders of all levels by delivering clear, honest, and actionable analysis.
                  I focus on education, transparency, and real value—helping traders build knowledge, manage risk, and grow consistently.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}