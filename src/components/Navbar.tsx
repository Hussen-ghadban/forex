import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Sync active tab with the URL
  const [active, setActive] = useState("");

  const links = [
    { id: "about", label: "About Me", path: "/" },
    { id: "strategy", label: "Strategy", path: "/strategy" },
    { id: "secure-payments", label: "secure payments", path: "/secure-payments" },
    { id: "testimonials", label: "Testimonials", path: "/testimonials" },
    { id: "tech-stack", label: "tech stack", path: "/tech-stack" },
  ];

  // Automatically detect which link should be active based on current URL
  useEffect(() => {
    const found = links.find((l) => l.path === location.pathname);
    if (found) setActive(found.id);
  }, [location.pathname]);

  return (
    <nav className="w-full bg-[#141821] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3bc2ff] text-black font-semibold">
            MS
          </div>
          <span className="text-lg tracking-wide font-medium">Mextt Forex</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setActive(link.id)}
              className="relative text-sm font-medium"
            >
              {link.label}

              {/* Underline animation */}
              {active === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#3bc2ff]"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
