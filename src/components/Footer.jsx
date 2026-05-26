'use client';
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer style={{ background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(124,58,237,0.2)", padding: "60px 40px 30px" }}>
      <div className="footer-grid" style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <div>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "14px" }}>
            <span style={{ color: "#7c3aed" }}>Project</span>
            <span style={{ color: "#fff" }}>Passout</span>
          </div>
          <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "280px" }}>
            University&apos; project & web development marketplace. Buy ready-made projects or get custom work done 📩
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            {[
              { icon: <FaFacebook size={18} />, label: "Facebook", href: "https://www.facebook.com/projectPassout" },
              { icon: <FaTiktok size={18} />, label: "TikTok", href: "https://www.tiktok.com/@projectpassout" },
              { icon: <FaInstagram size={18} />, label: "Instagram", href: "https://www.instagram.com/projectpassout" },
            ].map((s) => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1 }} title={s.label}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.25)", color: "#ccc", width: "38px", height: "38px", borderRadius: "10px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "18px", fontSize: "0.95rem" }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {links.map((link) => (
              <a key={link.label} href={link.href}
                style={{ textTransform: "capitalize", cursor: "pointer", color: "#666", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
                onMouseLeave={(e) => (e.target.style.color = "#666")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "18px", fontSize: "0.95rem" }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem" }}>
              <FiMail size={15} color="#7c3aed" />
              <a href="https://mail.google.com/mail/?view=cm&to=projectpassout@gmail.com" target="_blank" rel="noreferrer"
                style={{ color: "#ddd", textDecoration: "none", fontSize: "0.9rem" }}
                onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
                onMouseLeave={(e) => (e.target.style.color = "#ddd")}
              >
                projectpassout@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem" }}>
              <FiPhone size={15} color="#7c3aed" />
              <a href="tel:+9779745310259"
                style={{ color: "#ddd", textDecoration: "none", fontSize: "0.9rem" }}
                onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
                onMouseLeave={(e) => (e.target.style.color = "#ddd")}
              >
                +977-9745310259
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        <p style={{ color: "#d0c6c6", fontSize: "0.82rem" }}>© 2026 ProjectPassout Pvt. Ltd. Built for University college students.</p>
        <p style={{ color: "#d0c6c6", fontSize: "0.82rem" }}>Made with ❤️ in Kathmandu</p>
      </div>
    </footer>
  );
}

export default Footer;