"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Scroll-Animations-Varianten (identisch zur Main)
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ProjektePage() {
  const [activeFilter, setActiveFilter] = useState("Alles");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const kategorien = [
    "Alles", "Anbauten", "Dächer", "Geländer", "Plasma", 
    "Rampen", "Schlosserarbeiten", "Stahlbau", "Treppen", "Umbauten / Reparaturarbeiten"
  ];

  const projektListe = [
    { id: 1, title: "Skistation Schmitten", cat: "Stahlbau", bild: "/projekte/projekt1.jpg", desc: "Stahlkonstruktion im Hochgebirge." },
    { id: 2, title: "Moderner Balkon", cat: "Geländer", bild: "/projekte/projekt3.jpg", desc: "Edelstahlgeländer mit Glas." },
    { id: 3, title: "Lagerhallen Dach", cat: "Dächer", bild: "/projekte/info2.jpg", desc: "Trapezblecheindeckung Industrie." },
    { id: 4, title: "Außentreppe", cat: "Treppen", bild: "/projekte/projekt1.jpg", desc: "Fluchttreppe verzinkt." },
    { id: 5, title: "Plasma Deko", cat: "Plasma", bild: "/projekte/info2.jpg", desc: "Präzisions-Plasmaschnitt." },
    { id: 6, title: "Verlade-Rampe", cat: "Rampen", bild: "/projekte/projekt3.jpg", desc: "Schwerlastrampe für Logistik." }
  ];

  const filteredProjects = activeFilter === "Alles" 
    ? projektListe 
    : projektListe.filter(p => p.cat === activeFilter);

  const scrollToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #080808; color: #FFFFFF; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        
        .nav-link { color: #D1D1D1; text-decoration: none; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; transition: color 0.25s ease; cursor: pointer; }
        .nav-link:hover { color: #FFF; }

        .hamburger { display: none; cursor: pointer; flex-direction: column; gap: 5px; align-items: flex-end; margin-right: 15px; }
        .hamburger span { width: 24px; height: 2px; background: #D1D1D1; transition: all 0.3s ease; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
        
        .mobile-menu { display: none !important; position: absolute; top: 60px; right: 0; background: rgba(8,8,8,0.95); backdrop-filter: blur(15px); flex-direction: column; width: calc(100% - 40px); padding: 20px; border-top: 1px solid rgba(255,255,255,0.05); z-index: 999; box-sizing: border-box; }
        .mobile-menu.active { display: flex !important; }
        .mobile-menu a { color: #D1D1D1; text-decoration: none; padding: 12px 0; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.05); transition: color 0.2s; }
        .mobile-menu a:hover { color: #FFF; }

        .filter-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          color: #666;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          padding: 12px 0;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .filter-btn.active { color: #C8102E; font-weight: bold; border-bottom: 1px solid #C8102E; }
        .filter-btn:hover { color: #000; }

        /* Projekt-Karten Design von der Main-Seite */
        .card-project { background: #262626; border: 1px solid #333; transition: all 0.4s ease; height: 100%; border-radius: 8px; overflow: hidden; }
        .card-project:hover { transform: translateY(-8px); border-color: #C8102E; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }

        .footer-link { color: #D1D1D1; text-decoration: none; font-size: 13px; transition: color 0.2s; }
        .footer-link:hover { color: #FFF; }

        @media (max-width: 900px) {
          .content-wrapper { flex-direction: column !important; padding: 40px 20px !important; }
          .sidebar { width: 100% !important; position: relative !important; top: 0 !important; margin-bottom: 40px !important; }
          .filter-btn { display: inline-block !important; width: auto !important; margin-right: 15px !important; }
        }

        @media (max-width: 768px) {
          header { padding: 12px 20px !important; }
          nav { gap: 15px !important; }
          .nav-link { font-size: 9px; }
          
          .content-wrapper { padding: 40px 20px !important; }
          div[style*="grid"] { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important; gap: 15px !important; }
          
          h1 { font-size: 36px !important; }
          h3 { font-size: 20px !important; }
          p { font-size: 13px !important; }
          
          footer { padding: 60px 20px 40px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 30px !important; }
        }

        @media screen and (max-width: 480px) {
          header { padding: 10px 15px !important; position: relative; }
          header img { height: 30px !important; }
          nav { display: none !important; }
          .hamburger { display: flex !important; }
          
          .content-wrapper { padding: 20px 15px !important; }
          .sidebar { width: 100% !important; margin-bottom: 20px !important; }
          div[style*="grid"] { grid-template-columns: 1fr !important; gap: 12px !important; }
          
          h1 { font-size: 28px !important; }
          h3 { font-size: 16px !important; }
          p { font-size: 11px !important; }
          
          .filter-btn { font-size: 11px !important; }
          
          footer { padding: 40px 15px 30px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 30px !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh" }}>
        
        {/* HEADER (Identisch zur Main) */}
        <header style={{
          position: "fixed", top: 0, width: "100%", zIndex: 1000,
          background: "rgba(8,8,8,0.85)", backdropFilter: "blur(15px)",
          padding: "20px 80px", display: "flex", justifyContent: "space-between", alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        }}>
          <Link href="/" style={{ cursor: "pointer" }}>
            <img src="/logo.png" alt="Logo" style={{ height: "38px" }} />
          </Link>
          <nav style={{ display: "flex", gap: "35px" }}>
             <Link href="/unternehmen" className="nav-link">Unternehmen</Link>
             <Link href="/#leistungen" className="nav-link">Leistungen</Link>
             <Link href="/projekte" className="nav-link" style={{ color: "#FFF" }}>Projekte</Link>
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

        {/* HERO SEKTION */}
        <section style={{
          height: "60vh", display: "flex", justifyContent: "center", alignItems: "center",
          backgroundImage: "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.2) 50%, #E2E2E2 100%), url('/hero_projekt.jpg')",
          backgroundSize: "cover", backgroundPosition: "center", position: "relative"
        }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "62px", fontStyle: "italic", fontWeight: "300", letterSpacing: "3px", color: "#FFF" }}>Referenzen</h1>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "4px", fontSize: "14px", marginTop: "15px", color: "#C8102E" }}>Einblick in unsere Meisterwerke</p>
          </motion.div>
        </section>

        {/* MAIN CONTENT AREA - Hintergrund wie "Aktuelle Projekte" (#E2E2E2) */}
        <div className="content-wrapper" style={{ 
          display: "flex", 
          padding: "80px 80px 120px", 
          gap: "60px", 
          background: "#E2E2E2", 
          color: "#111" 
        }}>
          
          {/* SIDEBAR */}
          <aside className="sidebar" style={{ width: "250px", flexShrink: 0, position: "sticky", top: "120px", height: "fit-content" }}>
            <p style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              color: "#C8102E", 
              fontSize: "12px", 
              letterSpacing: "3px", 
              textTransform: "uppercase", 
              marginBottom: "30px",
              borderBottom: "1px solid rgba(200, 16, 46, 0.2)",
              paddingBottom: "10px"
            }}>
              Kategorien
            </p>
            {kategorien.map(kat => (
              <button 
                key={kat} 
                className={`filter-btn ${activeFilter === kat ? 'active' : ''}`}
                onClick={() => setActiveFilter(kat)}
              >
                {kat}
              </button>
            ))}
          </aside>

          {/* PROJECT GRID */}
          <main style={{ flex: 1 }}>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
              gap: "30px" 
            }}>
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="card-project"
                  >
                    <div style={{ 
                      height: "240px", 
                      backgroundImage: `url(${p.bild})`, 
                      backgroundSize: "cover", 
                      backgroundPosition: "center"
                    }} />
                    <div style={{ padding: "30px" }}>
                      <span style={{ 
                        color: "#C8102E", 
                        fontFamily: "'DM Sans', sans-serif", 
                        fontSize: "10px", 
                        letterSpacing: "2px", 
                        textTransform: "uppercase",
                        fontWeight: "600"
                      }}>
                        {p.cat}
                      </span>
                      <h3 style={{ 
                        fontFamily: "'Cormorant Garamond', serif", 
                        fontSize: "24px", 
                        marginTop: "12px", 
                        fontWeight: "400",
                        color: "#FFF" 
                      }}>
                        {p.title}
                      </h3>
                      <p style={{ color: "#BBBBBB", fontSize: "14px", marginTop: "12px", lineHeight: "1.7" }}>{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </main>
        </div>

        {/* FOOTER (Identisch zur Main) */}
        <footer style={{ background: "#0C0C0C", padding: "100px 80px 60px", color: "#FFF" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "60px", maxWidth: "1400px", margin: "0 auto 80px" }}>
            <motion.div {...fadeInUp}>
              <img src="/logo.png" alt="Logo" style={{ height: "45px", marginBottom: "30px" }} />
              <p style={{ color: "#CCCCCC", fontSize: "14px", lineHeight: "2.2" }}>
                <strong>Pinzgauer Stahl- und Metallbau GmbH</strong><br />
                Gewerbestraße 9, A-5671 Bruck<br />
                info@psmb.at
              </p>
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <p style={{ color: "#666", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>Navigation</p>
              <Link href="/unternehmen" className="footer-link">Unternehmen</Link>
              <Link href="/projekte" className="footer-link">Projekte</Link>
              <Link href="/karriere" className="footer-link">Karriere</Link>
              <Link href="/kontakt" className="footer-link">Kontakt</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <p style={{ color: "#666", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>Rechtliches</p>
              <a href="#" className="footer-link">Impressum</a>
              <a href="#" className="footer-link">Datenschutz</a>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <motion.div onClick={scrollToTop} whileHover={{ scale: 1.1, backgroundColor: "#E31235" }} style={{ cursor: "pointer", background: "#C8102E", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "'Bebas Neue', sans-serif" }}>TOP</span>
              </motion.div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: "40px", fontSize: "12px", color: "#666", textAlign: "center" }}>
            (c) 2025 Pinzgauer Stahl- und Metallbau GmbH.
          </div>
        </footer>
      </div>
    </>
  );
}