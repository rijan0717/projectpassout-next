import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", college: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
 
  emailjs.send(
    "service_gx0uyys",
    "template_wi2k67c",
    {
      from_name: form.name,
      from_email: form.email,
      college: form.college,
      message: form.message,
    },
    "G0pxfQYWCP1oAZ7-d"
  )
  .then(() => {
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", college: "", message: "" });
  })
  .catch((error) => {
    setLoading(false);
    console.error("EmailJS error:", error);
    alert("Something went wrong. Please try again.");
  });
};

  return (
    <section id="contact" style={{ padding: "100px 40px 60px", maxWidth: "1100px", margin: "0 auto" }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <p style={{ color: "#7c3aed", fontWeight: 600, marginBottom: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem" }}>
          Get In Touch
        </p>
        <h2 style={{ fonSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>
          Contact{" "}
          <span style={{ background: "linear-gradient(135deg,#7c3aed,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            ProjectPassout
          </span>
        </h2>
        <p style={{ color: "#888", marginTop: "14px", maxWidth: "460px", margin: "14px auto 0", lineHeight: 1.7 }}>
          Have a project in mind? Want to submit your own? Reach out and we&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>

<div className="contact-grid">

        {/* LEFT — INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "24px" }}>Let&apos;s talk</h3>

          {[
            { icon: <FiMail size={18} />, 
            label: "Email",
            value: "projectpassout@gmail.com",
            href: "https://mail.google.com/mail/?view=cm&to=passoutproject@gmail.com",
        },
            { icon: <FiPhone size={18} />,
              label: "Phone / WhatsApp",
              value: "+977-9745310259", 
              href: "https://wa.me/9779745310259",
        
        },
          ].map((item) => (
            <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", textDecoration:"none", gap: "14px", alignItems: "flex-start", marginBottom: "24px" }
            }>
              <div style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
                borderRadius: "10px",
                padding: "10px",
                color: "#a78bfa",
                flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "#666", marginBottom: "2px" }}>{item.label}</div>
                <div style={{ fontSize: "0.95rem", color: "#ddd" }}>{item.value}</div>
              </div>
            </a>
          ))}

          {/* SOCIAL */}
          <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
            {[
            //   { icon: <FaFacebook size={18} />, label: "Facebook" },
            //   { icon: <FaWhatsapp size={18} />, label: "WhatsApp" },
            ].map((s) => (
              <motion.button
                key={s.label}
                whileHover={{ scale: 1.08 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  color: "#ccc",
                  padding: "9px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "0.88rem",
                }}
              >
                {s.icon} {s.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: "20px",
            padding: "32px",
          }}
        >
          {[
            { name: "name", placeholder: "Your Name*", type: "text", required:true},
            { name: "email", placeholder: "Your Email*", type: "email", required:true},
            { name: "college", placeholder: "Your College (optional)", type: "text", required:false},
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              required={field.required}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: "10px",
                padding: "12px 16px",
                color: "white",
                fontSize: "0.95rem",
                marginBottom: "14px",
                outline: "none",
              }}
            />
          ))}

          <textarea
            name="message"
            placeholder="Describe your project requirement..."
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: "10px",
              padding: "12px 16px",
              color: "white",
              fontSize: "0.95rem",
              marginBottom: "18px",
              outline: "none",
              resize: "vertical",
            }}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%",
              background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "0 0 24px rgba(124,58,237,0.35)",
            }}
          >
            <FiSend size={16} />
              {loading ? "Sending..." : sent ? "Message Sent! ✓" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>

      {/* FOOTER */}
      
    </section>
  );
}

export default Contact;