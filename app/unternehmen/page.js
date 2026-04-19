"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Scroll-Animations-Varianten
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

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

export default function Unternehmen() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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

        /* Stat-Karten Design */
        .stat-card { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.06); padding: 40px; transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1); border-radius: 4px; }
        .stat-card:hover { border-color: rgba(200,16,46,0.3); transform: translateY(-8px); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }

        /* MOBILE RESPONSIVE */
        @media (max-width: 1024px) {
          header { padding: 15px 40px !important; }
          nav { gap: 20px !important; }
          section { padding: 0 40px 60px !important; }
        }

        @media (max-width: 768px) {
          header { padding: 12px 20px !important; }
          nav { gap: 15px !important; }
          .nav-link { font-size: 9px; }
          
          section { padding: 0 20px 60px !important; }
          div[style*="grid"] { grid-template-columns: 1fr !important; gap: 20px !important; }
          
          h1 { font-size: 36px !important; }
          h2 { font-size: 24px !important; }
          h3 { font-size: 18px !important; }
          p { font-size: 13px !important; }
          
          .stat-card { padding: 25px !important; }
          
          footer { padding: 60px 20px 40px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 30px !important; }
        }

        @media screen and (max-width: 480px) {
          header { padding: 10px 15px !important; position: relative; }
          header img { height: 30px !important; }
          nav { display: none !important; }
          .hamburger { display: flex !important; }
          
          section { padding: 0 15px 40px !important; }
          div[style*="grid"] { grid-template-columns: 1fr !important; gap: 15px !important; }
          
          h1 { font-size: 28px !important; }
          h2 { font-size: 20px !important; }
          h3 { font-size: 14px !important; }
          p { font-size: 11px !important; }
          
          .stat-card { padding: 20px !important; }
          
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
             <Link href="/unternehmen" className="nav-link" style={{ color: "#FFF" }}>Unternehmen</Link>
             <Link href="/#leistungen" className="nav-link">Leistungen</Link>
             <Link href="/projekte" className="nav-link">Projekte</Link>
             <Link href="/team" className="nav-link">Team</Link>
             <Link href="/karriere" className="nav-link">Karriere</Link>
             <Link href="/kontakt" className="nav-link">Kontakt</Link>
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

        {/* HERO SEKTION - Fade entfernt, klares Bild */}
        <section style={{
          height: "70vh", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden"
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
              backgroundImage: "url('/hero_unternehmen.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1
            }}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2 }} 
            style={{ textAlign: "center", position: "relative", zIndex: 2 }}
          >
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "58px", fontWeight: "600", letterSpacing: "-1px", lineHeight: "1.1" }}>Tradition trifft <br/> Präzision</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "5px", fontSize: "12px", fontWeight: "500", marginTop: "20px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Über die Pinzgauer Stahl- und Metallbau GmbH</p>
          </motion.div>
        </section>

        {/* 1. PHILOSOPHIE - Grau wie LEISTUNGEN (#F5F5F5) */}
        <div style={{ background: "#F7F7F5", color: "#111" }}>
          <SectionDivider title="Philosophie" subtitle="Qualität aus dem Herzen des Pinzgaus" />
          <section style={{ padding: "0 80px 100px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
              <motion.div {...fadeInUp}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: "600", lineHeight: "1.3", marginBottom: "30px", letterSpacing: "-0.5px" }}>
                  Seit Generationen – Handwerk auf höchstem Niveau.
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
                  Die Pinzgauer Stahl- und Metallbau GmbH steht für erstklassiges Handwerk und innovative Lösungen im Bereich Stahl- und Metallbau. Was als kleine Schlosserei begann, hat sich zu einem modernen Vorzeigebetrieb in Bruck entwickelt.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                  Wir verbinden traditionelle Schmiedekunst mit modernster Plasma-Technologie und computergestützter Fertigung. Unser Ziel ist es, jedes Projekt – ob privates Geländer oder komplexe Industrie-Stahlbrücke – mit höchster Präzision und Verlässlichkeit umzusetzen.
                </p>
              </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/unternehmen/unternehmen1.jpg" 
                    alt="Philosophie" 
                    style={{ width: "70%", borderRadius: "8px", display: "block", margin: "0 auto 32px auto" }} 
                  />
                  {/* Handwerkspreis Bild direkt darunter */}
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/unternehmen/handwerkspreis.jpg"
                    alt="Handwerkspreis Auszeichnung"
                    style={{ width: "38%", maxWidth: "180px", borderRadius: "10px", display: "block", margin: "0 auto" }}
                  />
               </motion.div>
            </div>
          </section>
        </div>

        {/* 2. DATEN & FAKTEN - Grau wie PROJEKTE (#E2E2E2) */}
        <div style={{ background: "#EDEDEB", color: "#111" }}>
          <SectionDivider title="Fakten" subtitle="Zahlen die für sich sprechen" />
          <section style={{ padding: "0 80px 120px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "25px" }}>
              {[
                { label: "Mitarbeiter", val: "25+" },
                { label: "Jahre Erfahrung", val: "30" },
                { label: "Projekte / Jahr", val: "200+" },
                { label: "Zertifikate", val: "EN1090" }
              ].map((stat, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="stat-card">
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", fontWeight: "700", color: "#C8102E", marginBottom: "10px" }}>{stat.val}</p>
                  <p style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", fontWeight: "500" }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 3. ZERTIFIKATE - Grau wie LEISTUNGEN (#F5F5F5) */}
        <div style={{ background: "#F7F7F5", color: "#111" }}>
          <SectionDivider title="Zertifikate" subtitle="Höchste Standards für Ihre Sicherheit" />
          <section style={{ padding: "0 80px 140px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
              <motion.div {...fadeInUp}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "30px", fontWeight: "600", marginBottom: "25px", letterSpacing: "-0.3px" }}>EN 1090-2 zertifiziert.</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                  Im Stahlbau gibt es keine Kompromisse. Wir sind zertifiziert nach <strong>EN 1090-2 (EXC2)</strong>, was uns berechtigt, tragende Bauteile aus Stahl in ganz Europa in Verkehr zu bringen. Unsere Schweißer sind staatlich geprüft und werden regelmäßig nachqualifiziert.
                </p>
              </motion.div>
              
              {/* Bereich für zwei Zertifikats-Bilder */}
              <motion.div {...fadeInUp} style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1, background: "#FFF", padding: "10px", border: "1px solid #DDD", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                  <img src="/unternehmen/zertifikat1.jpg" alt="Zertifikat EN 1090" style={{ width: "100%", height: "auto" }} />
                </div>
                <div style={{ flex: 1, background: "#FFF", padding: "10px", border: "1px solid #DDD", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                  <img src="/unternehmen/zertifikat2.jpg" alt="Zertifikat Schweißqualität" style={{ width: "100%", height: "auto" }} />
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer style={{ background: "#0a0a0a", padding: "120px 80px 60px", color: "#FFF" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "60px", maxWidth: "1400px", margin: "0 auto 100px" }}>
            <motion.div {...fadeInUp}>
              <img src="/logo.png" alt="Logo" style={{ height: "40px", marginBottom: "35px", opacity: 0.9 }} />
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: "2.4", fontWeight: "300" }}>
                <strong style={{ color: "rgba(255,255,255,0.7)", fontWeight: "600" }}>Pinzgauer Stahl- und Metallbau GmbH</strong><br />
                Gewerbstraße 9, A-5671 Bruck<br />
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