import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Timer, CircleSlash } from "lucide-react";
import { useMemo } from "react";

export default function SecurePayments() {
  // Detect if user is on iOS
  const isIOS = useMemo(() => {
    return typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  }, []);

  const wishMoneyDownloadLink = isIOS 
    ? "https://apps.apple.com/lb/app/whish-money/id1284243483"
    : "https://play.google.com/store/apps/details?id=money.whish.android";

  return (
    <div className="w-full flex justify-center py-16 px-4 bg-[#1a1d29]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-5xl"
      >
        <Card className="bg-[#232837] text-white border-none shadow-xl p-10 rounded-2xl">
          <CardContent className="flex flex-col items-center text-center space-y-10">

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-4xl font-bold"
            >
              Secure & Exclusive Payments
            </motion.h1>

            {/* Wish Money Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center space-y-3"
            >
              <img
                src="whish.png"
                alt="Profile"
                className="w-full h-auto rounded-lg"
              />

              <h2 className="text-2xl font-semibold">whish Money</h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-300 max-w-2xl text-[15px] leading-relaxed"
            >
              All transactions are processed securely through{" "}
              <span className="font-semibold">whish Money</span>, ensuring fast,
              clean, reliable, and verified payments for all trading-related services.
              To maintain a safe and efficient payment process, we exclusively use
              Wisly for deposits, mentorship enrollments, and service subscriptions.
            </motion.p>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                onClick={() => window.open(wishMoneyDownloadLink, '_blank')}
                className="bg-gradient-to-r from-[#00d4ff] to-[#00ff88] hover:from-[#00d4ff]/90 hover:to-[#00ff88]/90 text-[#1a1d29] font-semibold px-8 py-6 text-lg rounded-lg"
              >
                Download Wish Money
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-10 pt-6"
            >
              <Feature icon={<Timer className="w-10 h-10 text-[#00d4ff]" />} label="Instant Transfers" />
              <Feature icon={<CircleSlash className="w-10 h-10 text-[#00d4ff]" />} label="0 Fees" />
              <Feature icon={<Shield className="w-10 h-10 text-[#00d4ff]" />} label="Trusted Verification" />
            </motion.div>

            {/* Footer Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-gray-400 text-sm max-w-xl pt-4"
            >
              Wish Money provides instant transfers, 0 fees, and a trusted verification
              system to protect your funds during every transaction.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

/* Reusable Feature Component */
function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="flex flex-col items-center space-y-2 cursor-default"
    >
      {icon}
      <p className="font-medium">{label}</p>
    </motion.div>
  );
}