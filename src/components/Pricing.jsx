'use client';
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Basic",
    badge: "Best for Portfolio Projects",
    price: "Rs. 2,500",
    description:
      "Perfect for portfolios, personal websites, and simple frontend projects.",
    features: [
      "React Frontend Development",
      "Responsive UI/UX Design",
      "Modern Landing Page",
      "WhatsApp Integration",
      "Contact Form Setup",
      "Basic SEO Optimization",
      "Vercel Deployment",
      "Source Code Included",
      "Project Documentation",
      "1 Free Revision",
    ],
    highlighted: false,
    glow: "rgba(99, 102, 241, 0.15)",
    border: "rgba(99, 102, 241, 0.3)",
  },

  {
    name: "Standard",
    badge: "⭐ Most Popular",
    price: "Rs. 5,000",
    description:
      "Complete frontend and backend project setup — best for university submissions.",
    features: [
      "Frontend + Backend Development",
      "React / Next.js / Laravel / WordPress and many more",
      "MySQL / MongoDB Database Setup",
      "Authentication System",
      "Admin Dashboard",
      "Khalti Payment Integration",
      "API Integration",
      "Source Code Included",
      "Complete Documentation",
      "3 Free Revisions",
    ],
    highlighted: true,
    glow: "rgba(124, 58, 237, 0.2)",
    border: "#7c3aed",
  },

  {
    name: "Premium",
    badge: "Business Growth Package",
    price: "Rs. 10,000",
    description:
      "Advanced full-stack solution with live deployment and support — best for online stores and businesses looking to grow.",
    features: [
      "Everything Included in Standard",
      "Live Hosting Setup",
      "Custom Domain Configuration",
      "Khalti / eSewa Integration",
      "Advanced Admin Panel",
      "E-commerce Features",
      "Performance Optimization",
      "SEO Optimization",
      "Unlimited Revisions",
      "Maintaince Support Included",
    ],
    highlighted: false,
    glow: "rgba(168, 85, 247, 0.15)",
    border: "rgba(168, 85, 247, 0.3)",
  },
];
function Pricing() {
  return (
    <section id="pricing" style={{ padding: "100px 40px", maxWidth: "1100px", margin: "0 auto" }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <p style={{ color: "#7c3aed", fontWeight: 600, marginBottom: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem" }}>
          Pricing
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>
          Simple &{" "}
          <span style={{ background: "linear-gradient(135deg,#7c3aed,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Affordable
          </span>
        </h2>
        <p style={{ color: "#888", marginTop: "14px", maxWidth: "460px", margin: "14px auto 0", lineHeight: 1.7 }}>
          No hidden charges. Pick the plan that fits your project needs and budget.
        </p>
      </motion.div>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{
              y: -8,
              boxShadow: `0 0 40px ${plan.glow}, 0 0 80px ${plan.glow}`,
              borderColor: plan.border,
            }}
            style={{
              background: plan.highlighted
                ? "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(109,40,217,0.15))"
                : "rgba(255,255,255,0.03)",
              border: plan.highlighted
                ? `2px solid ${plan.border}`
                : `1px solid ${plan.border}`,
              borderRadius: "20px",
              padding: plan.highlighted ? "36px 28px" : "28px",
              position: "relative",
              boxShadow: plan.highlighted ? `0 0 40px ${plan.glow}` : "none",
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              cursor: "pointer",
            }}
          >
            {/* BADGE */}
            <div style={{
              display: "inline-block",
              background: plan.highlighted
                ? "linear-gradient(135deg,#7c3aed,#6d28d9)"
                : "rgba(124,58,237,0.15)",
              color: plan.highlighted ? "white" : "#a78bfa",
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: "20px",
              marginBottom: "16px",
              border: plan.highlighted ? "none" : "1px solid rgba(124,58,237,0.3)",
            }}>
              {plan.badge}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "6px" }}>{plan.name}</h3>
              <p style={{ color: "#888", fontSize: "0.88rem" }}>{plan.description}</p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <span style={{ fontSize: "2.2rem", fontWeight: 900, color: plan.highlighted ? "#a78bfa" : "#fff" }}>
                {plan.price}
              </span>
              <span style={{ color: "#666", fontSize: "0.85rem" }}> / project</span>
            </div>

            <ul style={{ listStyle: "none", marginBottom: "28px" }}>
              {plan.features.map((feature) => (
                <li key={feature} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#bbb",
                  fontSize: "0.9rem",
                  marginBottom: "10px",
                }}>
                  <FiCheck size={16} color="#7c3aed" style={{ flexShrink: 0 }} />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: plan.highlighted ? "none" : `2px solid ${plan.border}`,
                background: plan.highlighted
                  ? "linear-gradient(135deg,#7c3aed,#6d28d9)"
                  : "transparent",
                color: "white",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;