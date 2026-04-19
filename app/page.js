"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Scroll-Animations-Varianten
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
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

export default function Home() {
  const [isUnternehmenOpen, setIsUnternehmenOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0a; color: #FFFFFF; font-family: 'Inter', sans-serif; overflow-x: hidden; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        
        .nav-link { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; transition: color 0.3s ease; cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 500; position: relative; }
        .nav-link:hover { color: #FFF; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: #C8102E; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        
        .hamburger { display: none; cursor: pointer; flex-direction: column; gap: 5px; align-items: flex-end; margin-right: 15px; }
        .hamburger span { width: 24px; height: 2px; background: #D1D1D1; transition: all 0.3s ease; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
        
        .mobile-menu { display: none !important; position: absolute; top: 60px; right: 0; background: rgba(10,10,10,0.98); backdrop-filter: blur(20px); flex-direction: column; width: calc(100% - 40px); padding: 25px; border-top: 1px solid rgba(255,255,255,0.06); z-index: 999; box-sizing: border-box; }
        .mobile-menu.active { display: flex !important; }
        .mobile-menu a { color: rgba(255,255,255,0.6); text-decoration: none; padding: 14px 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.04); transition: color 0.2s; font-family: 'Inter', sans-serif; }
        .mobile-menu a:hover { color: #FFF; }
        
        /* Leistungs-Karten */
        .card-dark { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.06); transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1); height: 100%; position: relative; overflow: hidden; }
        .card-dark::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: #C8102E; transform: scaleX(0); transform-origin: left; transition: transform 0.5s ease; }
        .card-dark:hover { transform: translateY(-10px); border-color: rgba(200,16,46,0.3); box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(200,16,46,0.1); }
        .card-dark:hover::before { transform: scaleX(1); }
        .card-dark:hover .card-num-bg { opacity: 0.08 !important; }

        /* Projekt-Karten */
        .card-project { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.06); transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1); height: 100%; overflow: hidden; }
        .card-project:hover { transform: translateY(-10px); border-color: rgba(200,16,46,0.3); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
        .card-project .project-img { transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1); }
        .card-project:hover .project-img { transform: scale(1.05); }
        
        .card-btn { margin-top: 25px; padding: 14px 28px; border: 1px solid #C8102E; background: #C8102E; color: #FFF; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; transition: all 0.4s ease; width: fit-content; font-family: 'Inter', sans-serif; font-weight: 600; }
        .card-btn:hover { background: transparent; color: #C8102E; }

        .footer-link { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 13px; transition: all 0.3s ease; font-family: 'Inter', sans-serif; letter-spacing: 0.3px; }
        .footer-link:hover { color: #FFF; padding-left: 5px; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 1024px) {
          header { padding: 15px 40px !important; }
          .nav-link { font-size: 10px; gap: 20px; }
          section { padding: 0 40px 80px !important; }
          .card-dark { margin-bottom: 20px; }
        }

        @media (max-width: 768px) {
          header { padding: 12px 20px !important; }
          nav { gap: 15px !important; }
          .nav-link { font-size: 9px; letter-spacing: 1px; }
          
          section { padding: 0 20px 60px !important; }
          
          div[style*="grid"][style*="3"] { grid-template-columns: repeat(2, 1fr) !important; gap: 15px !important; }
          div[style*="grid"][style*="auto-fit"] { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important; gap: 15px !important; }
          
          .card-dark, .card-project { max-height: none !important; }
          h1 { font-size: 36px !important; }
          h3 { font-size: 20px !important; }
          p { font-size: 14px !important; }
          
          footer { padding: 60px 20px 40px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 30px !important; }
        }

        @media (max-width: 480px) {
          header { padding: 10px 15px !important; position: relative; }
          header img { height: 30px !important; }
          nav { display: none !important; }
          .hamburger { display: flex !important; }
          
          section { padding: 0 15px 40px !important; }
          
          div[style*="grid"][style*="3"] { grid-template-columns: 1fr !important; gap: 12px !important; }
          div[style*="grid"][style*="auto-fit"] { grid-template-columns: 1fr !important; gap: 12px !important; }
          
          h1 { font-size: 28px !important; }
          h3 { font-size: 16px !important; }
          h4 { font-size: 14px !important; }
          p { font-size: 12px !important; }
          
          .card-dark { padding: 30px 20px !important; min-height: 200px !important; }
          .card-project { border-radius: 6px !important; }
          
          footer { padding: 40px 15px 30px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 30px !important; }
          footer > div > div { width: 100% !important; }
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
          
          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
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
                <a href="#leistungen" onClick={() => setIsMobileMenuOpen(false)}>Leistungen</a>
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
          height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden"
        }}>
          <motion.div
            initial={{ filter: "blur(18px)", scale: 1.05 }}
            animate={{ filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%), url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1
            }}
          />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.3 }} style={{ textAlign: "center", zIndex: 2, position: "relative" }}>
            <motion.img 
              src="/logo.png"
              alt="Hero Logo"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              style={{
                width: "460px",
                maxWidth: "85vw",
                marginBottom: "30px",
                cursor: "pointer",
                display: "block"
              }}
              className="hero-logo-responsive"
            />
                    <style>{`
                      @media (max-width: 600px) {
                        .hero-logo-responsive {
                          width: 220px !important;
                          margin-left: auto !important;
                          margin-right: auto !important;
                          display: block !important;
                        }
                      }
                    `}</style>
            <div 
              style={{ 
                width: "60px", 
                height: "2px", 
                background: "#C8102E", 
                margin: "0 auto 25px", 
                opacity: 1 
              }} 
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                fontWeight: "400"
              }}
            >
              Stahl- und Metallbau seit Generationen
            </motion.p>
          </motion.div>
          {/* Scroll Arrow */}
          <motion.div
            onClick={() => {
              const element = document.getElementById('leistungen');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ opacity: { delay: 1.5, duration: 1 }, y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
            style={{
              position: "absolute",
              bottom: "50px",
              left: "50%",
              transform: "translateX(-50%)",
              cursor: "pointer",
              zIndex: 2
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>Scroll</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round">
                <polyline points="4 7 10 13 16 7"></polyline>
              </svg>
            </div>
          </motion.div>
        </section>

        {/* 1. LEISTUNGEN */}
        <div id="leistungen" style={{ background: "#F7F7F5", color: "#111" }}>
          <SectionDivider title="Leistungen" subtitle="Was wir für Sie tun" />
          <section style={{ padding: "0 80px 140px" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {leistungen.map((item, i) => (
                <motion.div 
                  key={i} 
                  {...staggerItem}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="card-dark" 
                  style={{ padding: "50px 40px", borderRadius: "4px", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "300px" }}
                >
                  <span className="card-num-bg" style={{ position: "absolute", top: "15px", right: "25px", fontFamily: "'Playfair Display', serif", fontSize: "90px", fontWeight: "700", color: "#FFF", opacity: 0.04, transition: "opacity 0.4s ease", lineHeight: "1" }}>{item.n}</span>
                  <div style={{ width: "25px", height: "2px", background: "#C8102E", marginBottom: "28px" }} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: "600", marginBottom: "16px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>{item.t}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: "1.9", fontWeight: "300" }}>{item.d}</p>
                  {item.isLast && <button className="card-btn">Anfrage stellen</button>}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 2. PROJEKTE */}
        <div id="projekte" style={{ background: "#EDEDEB", color: "#111" }}>
          <SectionDivider title="Projekte" subtitle="Referenzen & Arbeiten" />
          <section style={{ padding: "0 80px 160px" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "25px" }}>
              {projekte.map((proj, i) => (
                <motion.div key={proj.id} {...staggerItem} transition={{ delay: i * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="card-project" style={{ borderRadius: "4px" }}>
                  <div style={{ height: "280px", overflow: "hidden" }}>
                    <div className="project-img" style={{ height: "100%", backgroundImage: `url('${proj.bild}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  </div>
                  <div style={{ padding: "35px 40px 40px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <span style={{ color: "#C8102E", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600", fontFamily: "'Inter', sans-serif" }}>{proj.kategorie}</span>
                      <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>—</span>
                      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "2px", fontFamily: "'Inter', sans-serif" }}>{proj.jahr}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "600", marginBottom: "14px", color: "#FFFFFF", letterSpacing: "-0.3px", lineHeight: "1.3" }}>{proj.name}</h3>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: "1.9", fontWeight: "300" }}>{proj.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 3. MEDIA */}
        <div style={{ background: "#F7F7F5", color: "#111" }}>
          <SectionDivider title="Media" subtitle="Einblicke in unsere Arbeit" />
          <section style={{ padding: "0 80px 180px" }}>
            <motion.div {...fadeInUp} style={{ maxWidth: "1050px", margin: "0 auto" }}>
               <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "#0a0a0a", borderRadius: "4px", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.15)" }}>
                  <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/jItsMRP8Dqk" frameBorder="0" allowFullScreen />
               </div>
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
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  cursor: "pointer",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                title="Nach oben"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round">
                  <polyline points="3 10 8 5 13 10"></polyline>
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