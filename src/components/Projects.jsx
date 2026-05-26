'use client';
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import projects from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 40px", maxWidth: "1100px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "60px" }}>
        <p style={{ color: "#7c3aed", fontWeight: 600, marginBottom: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem" }}>Our Work</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>
          Featured <span style={{ background: "linear-gradient(135deg,#7c3aed,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
        </h2>
        <p style={{ color: "#888", marginTop: "14px", maxWidth: "500px", margin: "14px auto 0", lineHeight: 1.7 }}>
          Browse our collection of ready-made college projects. All projects include documentation and source code.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(124,58,237,0.2)" }}
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: "16px", padding: "24px", transition: "box-shadow 0.3s", cursor: "pointer" }}
          >
            <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", fontSize: "0.75rem", padding: "3px 12px", borderRadius: "20px", fontWeight: 600, border: "1px solid rgba(124,58,237,0.3)" }}>
              {Array.isArray(project.category) ? project.category.join(" / ") : project.category}
            </span>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "14px 0 10px" }}>{project.title}</h3>
            <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "18px" }}>{project.description}</p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{ background: "rgba(255,255,255,0.05)", color: "#ccc", fontSize: "0.78rem", padding: "3px 10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <Link href={`/projects/${project.id}`} style={{ flex: 1, textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ width: "100%", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "white", border: "none", padding: "10px", borderRadius: "10px", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}
                >
                  View More
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.04 }}
                onClick={() => navigator.clipboard.writeText(`${window.location.origin}/projects/${project.id}`)}
                title="Copy share link"
                style={{ background: "rgba(255,255,255,0.05)", color: "#ccc", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 14px", borderRadius: "10px", cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                <FiExternalLink size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;