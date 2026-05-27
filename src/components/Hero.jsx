'use client';
import { motion } from "framer-motion";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />

      {[...Array(6)].map((_, i) => (
        <motion.div key={i} animate={{ y: [0, -20, 0] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", width: `${6 + i * 2}px`, height: `${6 + i * 2}px`, borderRadius: "50%", background: "#7c3aed", opacity: 0.3, top: `${15 + i * 12}%`, left: `${5 + i * 15}%` }}
        />
      ))}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)", borderRadius: "30px", padding: "6px 18px", fontSize: "0.85rem", color: "#a78bfa", marginBottom: "24px", display: "inline-block" }}
      >
        🎓 Nepal&apos;s #1 College Project Marketplace
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
        style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "20px", maxWidth: "800px" }}
      >
        Buy & Submit{" "}
        <span style={{ background: "linear-gradient(135deg, #7c3aed, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          College Projects
        </span>{" "}
        with Ease
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        style={{ fontSize: "1.1rem", color: "#aaa", maxWidth: "560px", lineHeight: 1.7, marginBottom: "36px" }}
      >
        Browse ready-made projects, get custom work done, or submit your own.
        Built for Nepali college students — fast, affordable, and reliable.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}
      >
        <motion.button onClick={() => scrollTo("projects")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", color: "white", border: "none", padding: "14px 32px", borderRadius: "30px", fontWeight: 700, fontSize: "1rem", cursor: "pointer", boxShadow: "0 0 24px rgba(124,58,237,0.4)" }}
        >
          Browse Projects
        </motion.button>

        <motion.button onClick={() => scrollTo("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          style={{ background: "transparent", color: "white", border: "2px solid rgba(124,58,237,0.6)", padding: "14px 32px", borderRadius: "30px", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}
        >
          Contact Us
        </motion.button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        style={{ display: "flex", gap: "48px", marginTop: "64px", flexWrap: "wrap", justifyContent: "center" }}
      >
        {[
          { value: "50+", label: "Projects Available" },
          { value: "200+", label: "Happy Students" },
          { value: "10+", label: "Colleges Covered" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#7c3aed" }}>{stat.value}</div>
            <div style={{ fontSize: "0.85rem", color: "#888", marginTop: "4px" }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;