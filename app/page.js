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

const SectionDivider = ({ title, textColor = "#C8102E" }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    padding: "80px 80px 40px 80px",
    position: "relative"
  }}>
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{
        paddingRight: "25px",
        color: textColor,
        fontFamily: "'Bebas Neue', sans-serif",
        fontWeight: "400",
        letterSpacing: "5px",
        fontSize: "12px",
        textTransform: "uppercase"
      }}
    >
      {title}
    </motion.span>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(200, 16, 46, 0.2), transparent)" }} />
  </div>
);

export default function Home() {
  const [isUnternehmenOpen, setIsUnternehmenOpen] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const leistungen = [
    { n: "01", t: "Stahlbau", d: "Leichter bis mittelschwerer Stahlbau, Rohrbücken und Liftstationen auf höchstem Niveau." },
    { n: "02", t: "Schlosserei", d: "Individuelle Schlosserarbeiten für private und gewerbliche Auftraggeber." },
    { n: "03", t: "Reparaturen", d: "Professionelle Maschinenbau-Instandsetzung und schneller Verschleiß-Service." },
    { n: "04", t: "Plasma-Cut", d: "Präzisions-Plasmaarbeiten und kreative Metall-Geschenkideen nach Maß." },
    { n: "05", t: "Schweißen", d: "Zertifizierte Reparaturschweißungen und komplexe Konstruktionsmontage." },
    { n: "06", t: "Genauere Infos", d: "Erfahren Sie mehr über unsere speziellen Fertigungsmethoden.", isLast: true }
  ];

  const projekte = [
    { id: 1, name: "Skistation Schmittenhöhe", kategorie: "Stahlbau", jahr: "2026", bild: "/projekte/projekt1.jpg", text: "Konstruktion und Montage einer spezialgefertigten Liftstation." },
    { id: 2, name: "Salzburger Handwerkspreis", kategorie: "Auszeichnung", jahr: "2025", bild: "/projekte/info2.jpg", text: "Leichter bis mittelschwerer Stahlbau für eine moderne Produktionsstätte." },
    { id: 3, name: "Privatvilla Schlosserarbeiten", kategorie: "Schlosserei", jahr: "2025", bild: "/projekte/projekt3.jpg", text: "Individuelle Geländer- und Treppenkonstruktionen aus Edelstahl." }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #080808; color: #FFFFFF; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        
        .nav-link { color: #D1D1D1; text-decoration: none; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; transition: color 0.25s ease; cursor: pointer; }
        .nav-link:hover { color: #FFF; }
        
        /* Leistungs-Karten (etwas heller) */
        .card-dark { background: #262626; border: 1px solid #333; transition: all 0.4s ease; height: 100%; max-height: 280px; position: relative; overflow: hidden; }
        .card-dark:hover { transform: translateY(-8px); border-color: #C8102E; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .card-dark:hover .card-num-bg { opacity: 0.12 !important; }

        /* Projekt-Karten */
        .card-project { background: #262626; border: 1px solid #333; transition: all 0.4s ease; height: 100%; borderRadius: "8px"; }
        .card-project:hover { transform: translateY(-8px); border-color: #C8102E; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        
        .card-btn { margin-top: 25px; padding: 12px 24px; border: 1px solid #C8102E; background: #C8102E; color: #FFF; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; width: fit-content; }
        .card-btn:hover { background: transparent; color: #C8102E; }

        .footer-link { color: #D1D1D1; text-decoration: none; font-size: 13px; transition: color 0.2s; }
        .footer-link:hover { color: #FFF; }
      `}</style>

      <div style={{ minHeight: "100vh" }}>
        
        {/* HEADER */}
        <header style={{
          position: "fixed", top: 0, width: "100%", zIndex: 1000,
          background: "rgba(8,8,8,0.85)", backdropFilter: "blur(15px)",
          padding: "20px 80px", display: "flex", justifyContent: "space-between", alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        }}>
          <div onClick={scrollToTop} style={{ cursor: "pointer" }}>
            <img src="/logo.png" alt="Logo" style={{ height: "38px" }} />
          </div>
          <nav style={{ display: "flex", gap: "35px" }}>
             <Link href="/unternehmen" className="nav-link">Unternehmen</Link>
             <a href="#leistungen" className="nav-link">Leistungen</a>
             <Link href="/projekte" className="nav-link">Projekte</Link>
             <Link href="/team" className="nav-link">Team</Link>
             <Link href="/karriere" className="nav-link">Karriere</Link>
             <Link href="/kontakt" className="nav-link">Kontakt</Link>
          </nav>
        </header>

        {/* HERO */}
        <section style={{
          height: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
          backgroundImage: "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0) 15%, rgba(8,8,8,0) 85%, #F5F5F5 100%), url('/hero.jpg')",
          backgroundSize: "cover", backgroundPosition: "center", position: "relative"
        }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} style={{ textAlign: "center" }}>
            <img src="/logo.png" alt="Hero Logo" style={{ width: "380px", marginBottom: "30px" }} />
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", fontStyle: "italic", fontWeight: "300", letterSpacing: "3px" }}>Metallbau in Bestform</h1>
          </motion.div>
        </section>

        {/* 1. LEISTUNGEN */}
        <div id="leistungen" style={{ background: "#F5F5F5", color: "#111" }}>
          <SectionDivider title="Unsere Leistungen" />
          <section style={{ padding: "0 80px 120px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px" }}>
              {leistungen.map((item, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="card-dark" 
                  style={{ padding: "60px 40px", borderRadius: "8px", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "280px" }}
                >
                  <span className="card-num-bg" style={{ position: "absolute", top: "10px", right: "20px", fontFamily: "'Bebas Neue', sans-serif", fontSize: "100px", color: "#FFF", opacity: 0.07, transition: "opacity 0.3s ease" }}>{item.n}</span>
                  <div style={{ width: "30px", height: "2px", background: "#C8102E", marginBottom: "25px" }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", marginBottom: "15px", color: "#FFFFFF" }}>{item.t}</h3>
                  <p style={{ color: "#BBBBBB", fontSize: "15px", lineHeight: "1.8" }}>{item.d}</p>
                  {item.isLast && <button className="card-btn">Anfrage stellen</button>}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 2. PROJEKTE */}
        <div id="projekte" style={{ background: "#E2E2E2", color: "#111", borderTop: "1px solid rgba(0,0,0,0.03)" }}>
          <SectionDivider title="Aktuelle Projekte" />
          <section style={{ padding: "0 80px 140px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "30px" }}>
              {projekte.map((proj, i) => (
                <motion.div key={proj.id} {...fadeInUp} transition={{ delay: i * 0.2, duration: 0.8 }} className="card-project" style={{ overflow: "hidden", borderRadius: "8px" }}>
                  <div style={{ height: "300px", backgroundImage: `url('${proj.bild}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div style={{ padding: "40px" }}>
                    <p style={{ color: "#C8102E", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", fontWeight: "600" }}>{proj.kategorie}</p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", marginBottom: "12px", color: "#FFFFFF" }}>{proj.name}</h3>
                    <p style={{ color: "#BBBBBB", fontSize: "14px", lineHeight: "1.8" }}>{proj.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 3. MEDIA */}
        <div style={{ background: "#F5F5F5", color: "#111", borderTop: "1px solid rgba(0,0,0,0.03)" }}>
          <SectionDivider title="Media & Video" />
          <section style={{ padding: "0 80px 160px" }}>
            <motion.div {...fadeInUp} style={{ maxWidth: "1050px", margin: "0 auto" }}>
               <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "#000", borderRadius: "2px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }}>
                  <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/jItsMRP8Dqk" frameBorder="0" allowFullScreen />
               </div>
            </motion.div>
          </section>
        </div>

        {/* FOOTER */}
        <footer style={{ background: "#0C0C0C", padding: "100px 80px 60px", color: "#FFF" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "60px", maxWidth: "1400px", margin: "0 auto 80px" }}>
            <motion.div {...fadeInUp}>
              <img src="/logo.png" alt="Logo" style={{ height: "45px", marginBottom: "30px" }} />
              <p style={{ color: "#CCCCCC", fontSize: "14px", lineHeight: "2.2" }}>
                <strong>Pinzgauer Stahl- und Metallbau GmbH</strong><br />
                Gewerbstraße 9, A-5671 Bruck<br />
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
                <span style={{ fontSize: "10px", fontWeight: "bold" }}>TOP</span>
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