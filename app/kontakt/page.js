"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Scroll-Animations-Varianten (wie Main)
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Konsistenter SectionDivider der Main-Seite
const SectionDivider = ({ title, subtitle, textColor = "#C8102E" }) => (
  <div style={{
    padding: "100px 80px 50px 80px",
    position: "relative",
    maxWidth: "1400px",
    margin: "0 auto"
  }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: subtitle ? "12px" : "0" }}>
        <div style={{ width: "40px", height: "1px", background: textColor }} />
        <span style={{
          color: textColor,
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          letterSpacing: "4px",
          fontSize: "11px",
          textTransform: "uppercase"
        }}>
          {title}
        </span>
      </div>
      {subtitle && (
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "42px",
          fontWeight: "600",
          color: "#1a1a1a",
          marginTop: "15px",
          lineHeight: "1.2",
          letterSpacing: "-0.5px"
        }}>
          {subtitle}
        </h2>
      )}
    </motion.div>
  </div>
);

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const labelStyle = {
    color: "#C8102E",
    fontSize: "10px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "600",
    display: "block",
    marginBottom: "8px"
  };

  const contentStyle = {
    color: "#444444",
    fontSize: "16px",
    lineHeight: "1.6",
    fontFamily: "'Inter', sans-serif",
    textDecoration: "none",
    marginBottom: "35px",
    display: "block"
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    padding: "12px 0",
    color: "#FFFFFF",
    fontSize: "14px",
    outline: "none",
    marginBottom: "25px",
    transition: "border-color 0.3s ease",
    fontFamily: "'Inter', sans-serif"
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0a; color: #FFFFFF; font-family: 'Inter', sans-serif; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        
        .nav-link { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; transition: color 0.3s ease; cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 500; position: relative; }
        .nav-link:hover { color: #FFF; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: #C8102E; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        
        .hamburger { display: none; cursor: pointer; flex-direction: column; gap: 5px; align-items: flex-end; margin-right: 15px; }
        .hamburger span { width: 24px; height: 2px; background: #D1D1D1; transition: all 0.3s ease; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
        
        .mobile-menu { display: none !important; position: absolute; top: 60px; right: 0; background: rgba(8,8,8,0.95); backdrop-filter: blur(15px); flex-direction: column; width: calc(100% - 40px); padding: 20px; border-top: 1px solid rgba(255,255,255,0.05); z-index: 999; box-sizing: border-box; }
        .mobile-menu.active { display: flex !important; }
        .mobile-menu a { color: #D1D1D1; text-decoration: none; padding: 12px 0; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.05); transition: color 0.2s; }
        .mobile-menu a:hover { color: #FFF; }
        
        .footer-link { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 13px; transition: all 0.3s ease; font-family: 'Inter', sans-serif; letter-spacing: 0.3px; }
        .footer-link:hover { color: #FFF; padding-left: 5px; }

        input:focus, textarea:focus { border-bottom: 1px solid #C8102E !important; }
        
        .form-card { background: #1a1a1a; padding: 50px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.06); box-shadow: 0 30px 60px rgba(0,0,0,0.3); }
        
        .submit-btn { background: #C8102E; color: #FFF; border: 1px solid #C8102E; padding: 15px 35px; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; font-family: 'Inter', sans-serif; font-weight: 600; }
        .submit-btn:hover { background: transparent; color: #C8102E; }

        @media (max-width: 900px) {
          .kontakt-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .page-padding { padding: 40px !important; }
        }

        @media (max-width: 768px) {
          header { padding: 12px 20px !important; }
          nav { gap: 15px !important; }
          .nav-link { font-size: 9px; }
          
          .page-padding { padding: 30px 20px !important; }
          .kontakt-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          
          h1 { font-size: 36px !important; }
          h2 { font-size: 24px !important; }
          h3 { font-size: 18px !important; }
          p { font-size: 13px !important; }
          label { font-size: 12px !important; }
          
          .form-card { padding: 30px !important; }
          .form-input { padding: 12px 8px !important; }
          
          footer { padding: 60px 20px 40px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 30px !important; }
        }

        @media screen and (max-width: 480px) {
          header { padding: 10px 15px !important; position: relative; }
          header img { height: 30px !important; }
          nav { display: none !important; }
          .hamburger { display: flex !important; }
          nav { gap: 10px !important; flex-wrap: wrap; }
          .nav-link { font-size: 8px; }
          
          .page-padding { padding: 20px 15px !important; }
          .kontakt-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          
          h1 { font-size: 28px !important; }
          h2 { font-size: 20px !important; }
          h3 { font-size: 14px !important; }
          p { font-size: 11px !important; }
          label { font-size: 10px !important; }
          
          .form-card { padding: 20px !important; }
          .form-input { padding: 10px 6px !important; font-size: 12px !important; }
          .submit-btn { padding: 10px 16px !important; font-size: 10px !important; }
          
          footer { padding: 40px 15px 30px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 30px !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh" }}>
        
        {/* HEADER */}
        <header style={{
          position: "fixed", top: 0, width: "100%", zIndex: 1000,
          background: "rgba(10,10,10,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          padding: "18px 80px", display: "flex", justifyContent: "space-between", alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.04)"
        }}>
          <Link href="/" style={{ cursor: "pointer" }}>
            <img src="/logo.png" alt="Logo" style={{ height: "38px" }} />
          </Link>
          <nav style={{ display: "flex", gap: "35px" }}>
             <Link href="/unternehmen" className="nav-link">Unternehmen</Link>
             <Link href="/#leistungen" className="nav-link">Leistungen</Link>
             <Link href="/projekte" className="nav-link">Projekte</Link>
             <Link href="/team" className="nav-link">Team</Link>
             <Link href="/karriere" className="nav-link">Karriere</Link>
             <Link href="/kontakt" className="nav-link" style={{ color: "#FFF" }}>Kontakt</Link>
          </nav>
          
          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D1D1D1" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </div>
          
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="mobile-menu active"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Link href="/unternehmen" onClick={() => setIsMobileMenuOpen(false)}>Unternehmen</Link>
                <Link href="/#leistungen" onClick={() => setIsMobileMenuOpen(false)}>Leistungen</Link>
                <Link href="/projekte" onClick={() => setIsMobileMenuOpen(false)}>Projekte</Link>
                <Link href="/team" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                <Link href="/karriere" onClick={() => setIsMobileMenuOpen(false)}>Karriere</Link>
                <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* HERO */}
        <section style={{
          height: "65vh", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden"
        }}>
          <motion.div
            initial={{ filter: "blur(18px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/hero_kontakt.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1
            }}
          />
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} style={{ textAlign: "center", zIndex: 2, position: "relative" }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "58px", fontWeight: "600", letterSpacing: "-1px" }}>Kontakt</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "5px", fontSize: "12px", fontWeight: "500", marginTop: "20px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Sprechen wir über Ihr Projekt</p>
          </motion.div>
        </section>

        {/* 1. INFOS & FORMULAR - Grau wie LEISTUNGEN (#F5F5F5) */}
        <div style={{ background: "#F7F7F5", color: "#111" }}>
          <SectionDivider title="Kontakt" subtitle="Anfrage senden" />
          <section className="page-padding" style={{ padding: "0 80px 120px" }}>
            <div className="kontakt-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "100px", maxWidth: "1300px", margin: "0 auto" }}>
              
              <motion.div {...fadeInUp}>
                <span style={labelStyle}>Telefon</span>
                <p style={contentStyle}>+43 6545 20345</p>

                <span style={labelStyle}>E-Mail</span>
                <a href="mailto:info@psmb.at" style={contentStyle}>info@psmb.at</a>

                <span style={labelStyle}>Adresse</span>
                <p style={contentStyle}>
                  Pinzgauer Stahl- und Metallbau GmbH<br />
                  Gewerbestraße 9<br />
                  A - 5671 Bruck a.d. Großglocknerstraße
                </p>

                <span style={labelStyle}>Öffnungszeiten</span>
                <p style={contentStyle}>
                  MO - DO: 07:00 - 12:00 / 13:00 - 16:30<br />
                  FR: 07:00 - 11:30
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="form-card">
                {!submitted ? (
                  <>
                    {/* Neue Überschrift innerhalb der Box */}
                    <h2 style={{ 
                      fontFamily: "'Playfair Display', serif", 
                      fontSize: "30px",
                      marginBottom: "30px", 
                      color: "#FFFFFF",
                      fontWeight: "600",
                      letterSpacing: "-0.3px"
                    }}>
                      Anfrage senden
                    </h2>
                    
                    <form onSubmit={handleSubmit}>
                      <input type="text" placeholder="Ihr Name" style={inputStyle} required />
                      <input type="email" placeholder="Ihre E-Mail" style={inputStyle} required />
                      <input type="text" placeholder="Betreff" style={inputStyle} required />
                      <textarea placeholder="Ihre Nachricht" rows="3" style={{ ...inputStyle, resize: "none" }} required></textarea>
                      
                      <div style={{ display: "flex", gap: "12px", marginBottom: "35px", alignItems: "flex-start" }}>
                        <input type="checkbox" id="privacy" style={{ marginTop: "4px", accentColor: "#C8102E" }} required />
                        <label htmlFor="privacy" style={{ color: "#888", fontSize: "11px", lineHeight: "1.5" }}>
                          Ich akzeptiere die Datenschutzbestimmungen.
                        </label>
                      </div>
                      
                      <button type="submit" className="submit-btn">Anfrage absenden</button>
                    </form>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "30px", color: "#C8102E", marginBottom: "15px", fontWeight: "600" }}>Vielen Dank!</h3>
                    <p style={{ color: "#AAA" }}>Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        </div>

        {/* 2. STANDORT - Grau wie PROJEKTE (#E2E2E2) */}
        <div style={{ background: "#EDEDEB", color: "#111" }}>
          <SectionDivider title="Standort" subtitle="Anfahrt" />
          <section style={{ padding: "0 80px 140px" }}>
            <motion.div {...fadeInUp} style={{ 
              width: "100%", 
              height: "500px", 
              borderRadius: "4px", 
              overflow: "hidden", 
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
            }}>
              <iframe 
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.648160002131!2d12.82285497686524!3d47.28310341050212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47771dc31841398d%3A0x6b10766159c3817f!2sGewerbestra%C3%9Fe%209%2C%205671%20Bruck%20an%20der%20Gro%C3%9Fglocknerstra%C3%9Fe!5e0!3m2!1sde!2sat!4v1709123456789!5m2!1sde!2sat"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" 
              />
            </motion.div>
          </section>
        </div>

        {/* FOOTER */}
        <footer style={{ background: "#0a0a0a", padding: "120px 80px 60px", color: "#FFF" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "60px", maxWidth: "1400px", margin: "0 auto 100px" }}>
            <motion.div {...fadeInUp}>
              <img src="/logo.png" alt="Logo" style={{ height: "40px", marginBottom: "35px", opacity: 0.9 }} />
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: "2.4", fontWeight: "300" }}>
                <strong style={{ color: "rgba(255,255,255,0.7)", fontWeight: "600" }}>Pinzgauer Stahl- und Metallbau GmbH</strong><br />
                Gewerbestrasse 9, A-5671 Bruck<br />
                info@psmb.at
              </p>
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "10px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "5px" }}>Navigation</p>
              <Link href="/unternehmen" className="footer-link">Unternehmen</Link>
              <Link href="/projekte" className="footer-link">Projekte</Link>
              <Link href="/karriere" className="footer-link">Karriere</Link>
              <Link href="/kontakt" className="footer-link">Kontakt</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "10px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "5px" }}>Rechtliches</p>
              <Link href="/impressum" className="footer-link">Impressum</Link>
              <Link href="/datenschutz" className="footer-link">Datenschutz</Link>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <motion.div
                onClick={scrollToTop}
                whileHover={{ scale: 1.08, borderColor: "rgba(255,255,255,0.4)" }}
                style={{
                  cursor: "pointer",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease"
                }}
                title="Nach oben"
              >
                <svg width="18" height="18" viewBox="0 0 28 28" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round">
                  <polyline points="8 16 14 10 20 16"></polyline>
                </svg>
              </motion.div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "40px", fontSize: "12px", color: "rgba(255,255,255,0.25)", textAlign: "center", letterSpacing: "0.5px" }}>
            © 2025 Pinzgauer Stahl- und Metallbau GmbH. Alle Rechte vorbehalten.
          </div>
        </footer>
      </div>
    </>
  );
}