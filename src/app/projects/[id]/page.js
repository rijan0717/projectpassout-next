'use client';
import { motion } from "framer-motion";
import { FiArrowLeft, FiShare2, FiMessageCircle } from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import projects from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px" }}>
      <h2>Project not found</h2>
      <button onClick={() => router.push("/")} style={{ background: "#7c3aed", color: "white", border: "none", padding: "10px 24px", borderRadius: "10px", cursor: "pointer" }}>
        Go Home
      </button>
    </div>
  );

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleOrder = () => {
    const msg = `Hi, I'm interested in the "${project.title}" project. Can you provide more details?`;
    window.open(`https://wa.me/9779745310259?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div style={{ minHeight: "100vh", padding: "100px 24px 60px", maxWidth: "900px", margin: "0 auto" }}>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push("/")}
        style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(124,58,237,0.3)", color: "#ccc", padding: "8px 16px", borderRadius: "10px", cursor: "pointer", marginBottom: "32px", fontSize: "0.9rem" }}
      >
        <FiArrowLeft size={16} /> Homepage
      </motion.button>

      {/* HEADER */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
          {(Array.isArray(project.category) ? project.category : [project.category]).map((cat) => (
            <span key={cat} style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", fontSize: "0.78rem", padding: "3px 12px", borderRadius: "20px", fontWeight: 600, border: "1px solid rgba(124,58,237,0.3)" }}>
              {cat}
            </span>
          ))}
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, marginBottom: "16px" }}>{project.title}</h1>
<p style={{
  color: "#aaa",
  fontSize: "1.05rem",
  lineHeight: 1.85,
  marginBottom: "32px",
  maxWidth: "800px",
  textAlign: "justify",
  whiteSpace: "pre-line",
}}>
  {project.longDescription}
</p>


        


        {/* TAGS */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ background: "rgba(93, 44, 44, 0.05)", color: "#ccc", fontSize: "0.85rem", padding: "5px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
              {tag}
            </span>
          ))}
        </div>
        {/* PRICE */}
          <div style={{
           display: "inline-flex",
           alignItems: "center",
          gap: "8px",
          background: "rgba(124,58,237,0.15)",
           border: "1px solid rgba(124,58,237,0.3)",
           borderRadius: "12px",
         padding: "10px 20px",
         marginBottom: "24px",
}       }>
       <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600 }}>Price</span>
        <span style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 900 }}>
        {Array.isArray(project.price) ? project.price[0] : project.price}
         </span>
       </div>
       
        {/* ACTION BUTTONS */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOrder}
            style={{ display: "flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "white", border: "none", padding: "12px 28px", borderRadius: "12px", fontWeight: 700, fontSize: "1rem", cursor: "pointer", boxShadow: "0 0 24px rgba(124,58,237,0.35)" }}
          >
            <FiMessageCircle size={18} /> Order on WhatsApp
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleShare}
            style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", color: "#ccc", border: "1px solid rgba(124,58,237,0.3)", padding: "12px 24px", borderRadius: "12px", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }}
          >
            <FiShare2 size={18} /> Share
          </motion.button>
        </div>

        {/* SCREENSHOTS */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "20px" }}>Attachments🔗</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
              {project.screenshots.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ width: "100%", borderRadius: "12px", border: "1px solid rgba(124,58,237,0.2)" }}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}