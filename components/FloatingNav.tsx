"use client";
import Link from "next/link";
import { HomeIcon, UserIcon, BriefcaseIcon, SparklesIcon, FolderIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navItems = [
  { href: "#hero", icon: <HomeIcon className="h-6 w-6 text-black dark:text-white" />, label: "Home" },
  { href: "#about", icon: <UserIcon className="h-6 w-6 text-black dark:text-white" />, label: "About" },
  { href: "#experience", icon: <BriefcaseIcon className="h-6 w-6 text-black dark:text-white" />, label: "Experience" },
  { href: "#skills", icon: <SparklesIcon className="h-6 w-6 text-black dark:text-white" />, label: "Skills" },
  { href: "#projects", icon: <FolderIcon className="h-6 w-6 text-black dark:text-white" />, label: "Projects" },
  { href: "#contact", icon: <EnvelopeIcon className="h-6 w-6 text-black dark:text-white" />, label: "Contact" },
];

export default function FloatingNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 flex flex-row items-center justify-center floating-nav-glass px-4 py-2 gap-2 sm:gap-4 w-auto max-w-full">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} aria-label={item.label} legacyBehavior>
          <motion.a
            whileHover={{ scale: 1.13 }}
            className="floating-nav-link text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-white flex flex-col items-center justify-center group"
          >
            <span className="rounded-lg p-0 sm:p-2">
              {item.icon}
            </span>
          </motion.a>
        </Link>
      ))}
    </nav>
  );
}
