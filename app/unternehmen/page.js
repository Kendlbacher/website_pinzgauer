"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const SectionDivider = ({ title }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    padding: "80px 80px 40px 80px",
    background: "#080808"
  }}>
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{
        paddingRight: "28px",
        color: "#C8102E",
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        fontWeight: "400",
        letterSpacing: "6px",
        fontSize: "13px",
        textTransform: "uppercase"
      }}
    >
      {title}
    </motion.span>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #C8102E, transparent)", transformOrigin: "left" }}
    />
  </div>
);

export default function UnternehmenPage() {
  const [isUnternehmenOpen, setIsUnternehmenOpen] = useState(false);

  const stats = [
    { label: "Fertigungshalle", val: "1000m2" },
    { label: "Freilagerflaeche", val: "2500m2" },
    { label: "Bueroflaeche", val: "190m2" },
    { label: "Mitarbeiter", val: "25" }
  ];

  const scrollToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #080808; color: #FFFFFF; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        .nav-link { color: #999999; text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; transition: color 0.25s ease; cursor: pointer; }
        .nav-link:hover { color: #FFFFFF; }
        .dropdown-item { display: block; padding: 12px 20px; color: #999999; text-decoration: none; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; transition: all 0.2s ease; border-left: 0 solid #C8102E; }
        .dropdown-item:hover { color: #FFFFFF; background: #1a1a1a; border-left: 3px solid #C8102E; padding-left: 25px; }
        
        .cert-img-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 900px) {
          .cert-img-container { grid-template-columns: 1fr; }
          .intro-grid { grid-template-columns: 1fr !important; }
          .cert-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
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
            <span className="nav-link" style={{ color: "#FFFFFF" }}>Unternehmen</span>
            <AnimatePresence>
              {isUnternehmenOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} style={{ position: "absolute", top: "100%", left: "-20px", background: "#111", border: "1px solid #222", minWidth: "180px", padding: "10px 0" }}>
                  <Link href="/unternehmen" className="dropdown-item">Ueber uns</Link>
                  <a href="#" className="dropdown-item">Zertifikate</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/#leistungen" className="nav-link">Leistungen</Link>
          <Link href="/projekte" className="nav-link">Projekte</Link>
          <Link href="/team" className="nav-link">Team</Link>
          <Link href="/#kontakt" className="nav-link">Kontakt</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section style={{
        height: "65vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.3) 50%, #080808 100%), url('/hero_unternehmen.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        marginTop: "80px"
      }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ textAlign: "center", maxWidth: "900px", padding: "0 20px" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 7vw, 80px)", fontStyle: "italic", fontWeight: "300", marginBottom: "20px" }}>Das Unternehmen</h1>
          <div style={{ height: "2px", width: "80px", background: "#C8102E", margin: "0 auto" }} />
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section style={{ padding: "40px 80px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="intro-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: "400", marginBottom: "30px", color: "#C8102E" }}>Unsere Geschichte</h2>
            <p style={{ color: "#AAA", lineHeight: "1.9", fontSize: "17px", marginBottom: "20px" }}>
              Pinzgauer Stahl- und Metallbau GmbH (PSMB) wurde im November 2016 von Herrn Robert Aberger und Herrn Josef Mitteregger gegruendet.
            </p>
            <p style={{ color: "#AAA", lineHeight: "1.9", fontSize: "17px" }}>
              Dazu wurde eine moderne Fertigungshalle mit 1000m2, eine Bueroflaeche mit 190m2 und eine grosszuegige Freilagerflaeche mit 2500m2 in Bruck an der Glocknerstrasse angemietet.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: "#111", padding: "40px 20px", textAlign: "center", border: "1px solid #222" }}>
                <div style={{ color: "#C8102E", fontSize: "32px", fontFamily: "'Bebas Neue', sans-serif", marginBottom: "10px" }}>{s.val}</div>
                <div style={{ color: "#666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <SectionDivider title="Qualitaet & Zertifizierung" />
      <section style={{ padding: "40px 80px 80px", background: "#080808" }}>
        <div className="cert-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center" }}>
          <div style={{ borderLeft: "2px solid #C8102E", paddingLeft: "40px" }}>
            <p style={{ fontSize: "20px", lineHeight: "1.8", color: "#EEE", fontWeight: "300" }}>
              Wir sind ein zertifizierter Schweissfachbetrieb nach <span style={{ color: "#C8102E" }}>EN 1090-1</span> in Verbindung mit <span style={{ color: "#C8102E" }}>EN 1090-2</span> in der Execution Class 3.
            </p>
            <br />
            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#AAA" }}>
              Zudem sind wir nach <span style={{ color: "#FFF" }}>EN ISO 3834-2</span> (Schweissteile fuer den Kranbau) zertifiziert. Dies erfordert hoechste Praezision sowie staendige Verfahrens- und Schweisserpruefungen.
            </p>
          </div>
          
          {/* ZERTIFIKAT BILDER AUS /unternehmen/ */}
          <div className="cert-img-container">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              style={{ 
                background: "#111", 
                padding: "10px", 
                border: "1px solid #222",
                aspectRatio: "1/1.4",
                backgroundImage: "url('/unternehmen/zertifikat1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} 
            />
            <motion.div 
              whileHover={{ scale: 1.03 }}
              style={{ 
                background: "#111", 
                padding: "10px", 
                border: "1px solid #222",
                aspectRatio: "1/1.4",
                backgroundImage: "url('/unternehmen/zertifikat2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} 
            />
          </div>
        </div>
      </section>

      {/* MACHINERY & PLANNING */}
      <SectionDivider title="Technik & Planung" />
      <section style={{ padding: "40px 80px 100px" }}>
        <div className="intro-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: "400", marginBottom: "30px" }}>Maschinenpark</h2>
            <p style={{ color: "#AAA", lineHeight: "1.9", marginBottom: "20px" }}>
              Unser moderner Maschinenpark ermoeglicht uns hoechste Flexibilitaet:
            </p>
            <ul style={{ listStyle: "none", color: "#888", lineHeight: "2.2" }}>
              <li><strong style={{ color: "#FFF" }}>Bandsaege:</strong> Zuschnitte bis 8m Laenge / 700mm Durchmesser.</li>
              <li><strong style={{ color: "#FFF" }}>Plasmaanlage:</strong> Blechzuschnitte bis 50mm auf den mm genau.</li>
              <li><strong style={{ color: "#FFF" }}>Abkantpresse:</strong> Kantarbeiten bis zu 8mm Blechstaerke.</li>
              <li><strong style={{ color: "#FFF" }}>Schweissen:</strong> Modernste Fronius Schweissmaschinen.</li>
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: "400", marginBottom: "30px" }}>Planung & Zukunft</h2>
            <p style={{ color: "#AAA", lineHeight: "1.9", marginBottom: "20px" }}>
              Zwei Konstrukteure verantworten die Projektleitung und Planung mit modernsten 3D-Zeichenprogrammen.
            </p>
            <p style={{ color: "#AAA", lineHeight: "1.9" }}>
              Wir investieren stark in die <span style={{ color: "#FFF" }}>Ausbildung von Fachkraeften</span> und spezialisieren uns zukuenftig verstaerkt auf das <span style={{ color: "#FFF" }}>Betonstahlschweissen</span>, um die hohe Marktnachfrage in Oesterreich optimal zu bedienen.
            </p>
          </div>
        </div>
      </section>

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
              <Link key={l} href={l === 'Unternehmen' ? '/unternehmen' : '/'} style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{l}</Link>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "#444", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase" }}>Rechtliches</p>
            {['Impressum', 'Datenschutz', 'AGB'].map(l => (
              <a key={l} href="#" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <motion.div onClick={scrollToTop} whileHover={{ scale: 1.1, backgroundColor: "#E31235" }} style={{ cursor: "pointer", background: "#C8102E", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
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