import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            MS
          </div>
          <span className="text-lg tracking-wide font-medium">Next Forex</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.id}
              to={link.path}
              className="relative text-sm font-medium hover:text-[#3bc2ff]"
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

        {/* Mobile Burger Menu using ShadCN Dialog */}
        <div className="md:hidden">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button aria-label="Open menu">
                <Menu size={24} />
              </button>
            </DialogTrigger>
            <DialogContent className="p-6 pt-4">
              <div className="flex flex-col gap-4">
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
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}
