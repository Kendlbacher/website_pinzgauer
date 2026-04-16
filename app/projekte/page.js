"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ProjektePage() {
  const [isUnternehmenOpen, setIsUnternehmenOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Alles");

  const kategorien = [
    "Alles", 
    "Anbauten", 
    "Daecher", 
    "Gelaender", 
    "Plasma", 
    "Rampen", 
    "Schlosserarbeiten", 
    "Stahlbau", 
    "Treppen", 
    "Umbauten / Reparaturarbeiten"
  ];

  // Pfade angepasst auf /projekte/...
  const projektListe = [
    { id: 1, title: "Skistation Schmitten", cat: "Stahlbau", bild: "/projekte/projekt1.jpg", desc: "Stahlkonstruktion im Hochgebirge." },
    { id: 2, title: "Moderner Balkon", cat: "Gelaender", bild: "/projekte/projekt3.jpg", desc: "Edelstahlgelaender mit Glas." },
    { id: 3, title: "Lagerhallen Dach", cat: "Daecher", bild: "/projekte/info2.jpg", desc: "Trapezblecheindeckung Industrie." },
    { id: 4, title: "Aussentreppe", cat: "Treppen", bild: "/projekte/projekt1.jpg", desc: "Fluchttreppe verzinkt." },
    { id: 5, title: "Plasma Deko", cat: "Plasma", bild: "/projekte/info2.jpg", desc: "Praezisions-Plasmaschnitt." },
    { id: 6, title: "Verlade-Rampe", cat: "Rampen", bild: "/projekte/projekt3.jpg", desc: "Schwerlastrampe fuer Logistik." }
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
        body { background: #080808; color: #FFFFFF; font-family: 'DM Sans', sans-serif; }
        
        .nav-link { color: #999999; text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; transition: color 0.25s ease; cursor: pointer; }
        .nav-link:hover { color: #FFFFFF; }
        
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
          border-bottom: 1px solid #111;
        }
        .filter-btn.active { color: #C8102E; padding-left: 10px; border-bottom: 1px solid #C8102E; }
        .filter-btn:hover { color: #FFF; }

        @media (max-width: 900px) {
          .content-wrapper { flex-direction: column !important; padding: 0 40px 100px !important; }
          .sidebar { width: 100% !important; margin-bottom: 40px !important; position: relative !important; top: 0 !important; }
          .filter-btn { display: inline-block !important; width: auto !important; margin-right: 20px !important; border-bottom: none !important; padding: 10px 0 !important; }
        }
      `}</style>

      {/* HEADER */}
      <header style={{
        position: "fixed", top: 0, width: "100%", zIndex: 1000,
        background: "rgba(8,8,8,0.95)", backdropFilter: "blur(12px)",
        padding: "15px 80px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1C1C1C"
      }}>
        <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ height: "45px", width: "auto" }} />
        </Link>
        <nav style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <div onMouseEnter={() => setIsUnternehmenOpen(true)} onMouseLeave={() => setIsUnternehmenOpen(false)} style={{ position: "relative", padding: "10px 0" }}>
            <span className="nav-link">Unternehmen</span>
            <AnimatePresence>
              {isUnternehmenOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} style={{ position: "absolute", top: "100%", left: "-20px", background: "#111", border: "1px solid #222", minWidth: "180px", padding: "10px 0" }}>
                  <a href="#" style={{ display: "block", color: "#999", textDecoration: "none", padding: "12px 20px", fontSize: "11px" }}>Ueber uns</a>
                  <a href="#" style={{ display: "block", color: "#999", textDecoration: "none", padding: "12px 20px", fontSize: "11px" }}>Zertifikate</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/#leistungen" className="nav-link">Leistungen</Link>
          <Link href="/projekte" className="nav-link" style={{ color: "#FFFFFF" }}>Projekte</Link>
          <Link href="/team" className="nav-link">Team</Link>
          <Link href="/#kontakt" className="nav-link">Kontakt</Link>
        </nav>
      </header>

      {/* HERO SEKTION */}
      <section style={{
        height: "65vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `
          linear-gradient(to bottom, 
            #080808 0%, 
            rgba(8, 8, 8, 0.4) 15%, 
            transparent 30%, 
            transparent 70%, 
            rgba(8, 8, 8, 0.8) 85%, 
            #080808 100%
          ), 
          url('/hero_projekt.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        marginTop: "80px"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ textAlign: "center", width: "90%", maxWidth: "800px" }}
        >
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: "300",
            fontSize: "clamp(40px, 6vw, 75px)",
            letterSpacing: "2px",
            color: "#FFFFFF",
            lineHeight: "1.1",
            fontStyle: "italic",
            marginBottom: "20px"
          }}>
            Unsere Referenzen
          </h1>
          <p style={{ color: "#AAA", fontSize: "18px", fontWeight: "300", letterSpacing: "0.5px", maxWidth: "600px", margin: "0 auto" }}>
            Ein Einblick in unsere Projekte aus Stahlbau, Schlosserei und Praezisionsfertigung.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="content-wrapper" style={{ display: "flex", padding: "80px 80px 100px", gap: "60px", background: "#080808" }}>
        
        {/* SIDEBAR */}
        <aside className="sidebar" style={{ width: "250px", flexShrink: 0, position: "sticky", top: "120px", height: "fit-content" }}>
          <p style={{ color: "#C8102E", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>Kategorien</p>
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
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div style={{ 
                    border: "1px solid #1A1A1A", 
                    background: "#0F0F0F",
                    overflow: "hidden" 
                  }}>
                    <div style={{ 
                      height: "240px", 
                      backgroundImage: `url(${p.bild})`, 
                      backgroundSize: "cover", 
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }} />
                    <div style={{ padding: "25px" }}>
                      <span style={{ color: "#C8102E", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>{p.cat}</span>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", marginTop: "10px", fontWeight: "400" }}>{p.title}</h3>
                      <p style={{ color: "#555", fontSize: "14px", marginTop: "10px", lineHeight: "1.6" }}>{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#080808", borderTop: "1px solid #1C1C1C", padding: "80px 80px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "60px", maxWidth: "1400px", margin: "0 auto 60px" }}>
          <div>
            <img src="/logo.png" alt="Logo" style={{ height: "50px", marginBottom: "20px" }} />
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "2.2" }}>Gewerbestrasse 9<br />A-5671 Bruck / Glocknerstrasse<br />info@psmb.at</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "#444", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase" }}>Seiten</p>
            {['Unternehmen', 'Leistungen', 'Projekte', 'Team', 'Kontakt'].map(l => (
              <Link key={l} href={l === 'Projekte' ? '/projekte' : '/'} style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{l}</Link>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "#444", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase" }}>Rechtliches</p>
            {['Impressum', 'Datenschutz', 'AGB'].map(l => (
              <a key={l} href="#" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <motion.div 
              onClick={scrollToTop} 
              whileHover={{ scale: 1.1, backgroundColor: "#E31235" }}
              style={{ 
                cursor: "pointer", 
                background: "#C8102E", 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}
            >
              <span style={{ color: "#FFF", fontSize: "10px", fontFamily: "'Bebas Neue', sans-serif" }}>UP</span>
            </motion.div>
          </div>
        </div>
        <div style={{ textAlign: "center", color: "#333", fontSize: "12px", borderTop: "1px solid #141414", paddingTop: "30px" }}>
          (c) 2025-2026 Pinzgauer Stahl- und Metallbau GmbH. Alle Rechte vorbehalten.
        </div>
      </footer>
    </>
  );
}