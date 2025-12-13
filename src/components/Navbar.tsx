import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { id: "about", label: "About Me", path: "/" },
    { id: "strategy", label: "Strategy", path: "/strategy" },
    { id: "secure-payments", label: "Secure Payments", path: "/secure-payments" },
    { id: "testimonials", label: "Testimonials", path: "/testimonials" },
    { id: "tech-stack", label: "Tech Stack", path: "/tech-stack" },
  ];

  const active = links.find(l => l.path === location.pathname)?.id;

  return (
    <nav className="w-full bg-[#141821] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3bc2ff] text-black font-semibold">
            NF
          </div>
          <span className="text-lg tracking-wide font-medium">Next Forex</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.id}
              to={link.path}
              className="relative text-md font-medium hover:text-[#3bc2ff]"
            >
              {link.label}
              {active === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#3bc2ff]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden bg-[#141821] px-6"
          >
            <div className="flex flex-col gap-4 py-4">
              {links.map(link => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`text-lg font-medium hover:text-[#3bc2ff] ${
                    active === link.id ? "text-[#3bc2ff]" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
