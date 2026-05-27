'use client';
import { motion, AnimatePresence } from "framer-motion";       
import { FiArrowLeft, FiShare2, FiMessageCircle } from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";                            
import projects from "@/data/projects";
import Image from "next/image";


export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState(1);

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

        {/* ATTACHMENTS SLIDER */}
{project.screenshots && project.screenshots.length > 0 && (() => {
  const media = project.screenshots;
  const isVideo = (src) => src?.endsWith(".mp4") || src?.endsWith(".webm") || src?.endsWith(".ogg");

  return (
    <div>
      <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>
        Attachments 🔗
      </h2>

      {/* MAIN FRAME */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.25)", marginBottom: "12px" }}>
        
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={{
              enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
              center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
              exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.25 } }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ position: "absolute", inset: 0 }}
          >
            {isVideo(media[activeIndex]) ? (
              <video src={media[activeIndex]} controls style={{ width: "100%", height: "100%", objectFit: "contain", background: "#000" }} />
            ) : (
              <img src={media[activeIndex]} alt={`screenshot ${activeIndex + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* PREV BUTTON */}
        {media.length > 1 && (
          <button onClick={() => { setDirection(-1); setActiveIndex((p) => (p === 0 ? media.length - 1 : p - 1)); }}
            style={{ 
  position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", 
  background: "rgba(0,0,0,0.7)", 
  border: "1px solid rgba(124,58,237,0.4)", 
  color: "#fff", width: "36px", height: "36px", 
  borderRadius: "50%", display: "flex", alignItems: "center", 
  justifyContent: "center", cursor: "pointer", fontSize: "22px", zIndex: 10 
}}
>
            ‹
          </button>
        )}

        {/* NEXT BUTTON */}
        {media.length > 1 && (
          <button onClick={() => { setDirection(1); setActiveIndex((p) => (p === media.length - 1 ? 0 : p + 1)); }}
            style={{ 
  position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", 
  background: "rgba(0,0,0,0.7)", 
  border: "1px solid rgba(124,58,237,0.4)", 
  color: "#fff", width: "36px", height: "36px", 
  borderRadius: "50%", display: "flex", alignItems: "center", 
  justifyContent: "center", cursor: "pointer", fontSize: "22px", zIndex: 10 
}}
>›
          </button>
        )}

        {/* FULLSCREEN BUTTON */}
        {!isVideo(media[activeIndex]) && (
          <button onClick={() => setLightbox(true)}
            style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0, 0, 0, 0.55)", border: "1px solid rgba(124,58,237,0.3)", color: "#fff", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10, fontSize: "14px" }}>
            ⤢
          </button>
        )}

        {/* COUNTER */}
        <div style={{ position: "absolute", bottom: "12px", right: "12px", background: "rgba(0,0,0,0.6)", color: "#ccc", fontSize: "0.75rem", padding: "3px 10px", borderRadius: "20px", zIndex: 10 }}>
          {activeIndex + 1} / {media.length}
        </div>
      </div>

      {/* THUMBNAILS */}
      {media.length > 1 && (
        <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
          {media.map((src, i) => (
            <button key={i} onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
              style={{ flexShrink: 0, width: "80px", height: "56px", borderRadius: "8px", overflow: "hidden", border: i === activeIndex ? "2px solid #7c3aed" : "2px solid transparent", cursor: "pointer", padding: 0, background: "rgba(255,255,255,0.05)", opacity: i === activeIndex ? 1 : 0.5, transition: "all 0.2s" }}>
              {isVideo(src)
                ? <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#a78bfa", fontSize: "18px" }}>▶</div>
                : <img src={src} alt={`thumb-${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              }
            </button>
          ))}
        </div>
      )}
    </div>
  );
})()}

{/* LIGHTBOX */}
{lightbox && (
  <div
    onClick={() => setLightbox(false)}
    style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
  >
    {/* CLOSE */}
    <button
      onClick={() => setLightbox(false)}
      style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "20px", zIndex: 10 }}
    >✕</button>

    {/* COUNTER */}
    <div style={{ position: "absolute", top: "22px", left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.6)", color: "#ccc", fontSize: "0.8rem", padding: "4px 14px", borderRadius: "20px", zIndex: 10 }}>
      {activeIndex + 1} / {project.screenshots.length}
    </div>

    {/* PREV */}
    {project.screenshots.length > 1 && (
      <button
        onClick={(e) => { e.stopPropagation(); setDirection(-1); setActiveIndex((p) => (p === 0 ? project.screenshots.length - 1 : p - 1)); }}
        style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid rgba(124,58,237,0.4)", color: "#fff", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "28px", zIndex: 10 }}
      >‹</button>
    )}

    {/* NEXT */}
    {project.screenshots.length > 1 && (
      <button
        onClick={(e) => { e.stopPropagation(); setDirection(1); setActiveIndex((p) => (p === project.screenshots.length - 1 ? 0 : p + 1)); }}
        style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid rgba(124,58,237,0.4)", color: "#fff", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "28px", zIndex: 10 }}
      >›</button>
    )}

    {/* IMAGE with slide animation */}
    <AnimatePresence custom={direction} mode="wait">
      <motion.img
        key={activeIndex}
        custom={direction}
        variants={{
          enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
          center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
          exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, transition: { duration: 0.2 } }),
        }}
        initial="enter"
        animate="center"
        exit="exit"
        src={project.screenshots[activeIndex]}
        alt="fullscreen"
        onClick={(e) => e.stopPropagation()}
        style={{ 
  width: "100%",
  maxWidth: "calc(100vw - 80px)", 
  maxHeight: "85vh", 
  borderRadius: "12px", 
  objectFit: "contain" 
}}

      />
    </AnimatePresence>
  </div>
)}
        
      </motion.div>
    </div>
  );
}