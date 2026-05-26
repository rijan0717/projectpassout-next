'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled || menuOpen ? "rgba(13,6,24,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124,58,237,0.2)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ fontSize: "1.4rem", fontWeight: 800, cursor: "pointer" }}
          >
            <span style={{ color: "#7c3aed" }}>Project</span>
            <span style={{ color: "#ffffff" }}>Passout</span>
          </motion.div>
        </Link>

        <div className="desktop-nav" style={{ display: "flex", gap: "32px" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textTransform: "capitalize",
                cursor: "pointer",
                fontSize: "0.95rem",
                color: "#ccc",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
              onMouseLeave={(e) => (e.target.style.color = "#ccc")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              background: "rgba(13,6,24,0.98)",
              zIndex: 998,
              padding: "20px 24px 28px",
              borderBottom: "1px solid rgba(124,58,237,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  textTransform: "capitalize",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  color: "#ccc",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;