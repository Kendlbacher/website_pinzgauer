"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Scroll-Animations-Varianten (wie Main-Seite)
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Konsistenter SectionDivider
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

export default function KarrierePage() {
  const [openJob, setOpenJob] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleJob = (id) => {
    setOpenJob(openJob === id ? null : id);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jobs = [
    {
      id: 1,
      title: "Lehrling Metallbautechniker(in)",
      type: "Lehrzeit 3 ½ Jahre",
      content: (
        <div style={{ fontSize: "15px", lineHeight: "1.8", color: "#BBB" }}>
          <p style={{ marginBottom: "15px", color: "#FFF" }}><strong>Monatliche Lehrlingsentschädigung nach Lehrjahr (brutto):</strong></p>
          <ul style={{ listStyle: "none", marginBottom: "20px" }}>
            <li>1. LJ: € 692,00</li>
            <li>2. LJ: € 871,00</li>
            <li>3. LJ: € 1.148,00</li>
            <li>4. LJ: € 1.527,00</li>
          </ul>
          <p style={{ marginBottom: "10px", color: "#FFF" }}><strong>Wir bieten:</strong></p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>Gutes, familiäres Betriebsklima</li>
            <li>Kran- und Staplerschein</li>
            <li>Schweißkurse</li>
          </ul>
          <p>Du bist handwerklich geschickt und wir haben dein Interesse geweckt? Dann bewirb dich!</p>
          <p style={{ marginTop: "15px" }}>Gerne per Mail: <a href="mailto:info@psmb.at" style={{ color: "#C8102E" }}>info@psmb.at</a></p>
        </div>
      )
    },
    {
      id: 2,
      title: "Metallbaumonteur(in) / Stahlbaumonteur(in)",
      type: "Vollzeit",
      content: (
        <div style={{ fontSize: "15px", lineHeight: "1.8", color: "#BBB" }}>
          <p style={{ marginBottom: "10px", color: "#FFF" }}><strong>Aufgabengebiet:</strong></p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>Montagearbeiten im Bereich leichten bis mittelschweren Stahlbau</li>
            <li>Montagearbeiten Schlosserarbeiten</li>
            <li>Reparaturarbeiten im Industriegewerbe</li>
          </ul>
          <p style={{ marginBottom: "10px", color: "#FFF" }}><strong>Zugangsvoraussetzung:</strong></p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>Abgeschlossene Lehre, abgeschlossener Präsenzdienst</li>
            <li>Gute Deutschkenntnisse in Wort und Schrift</li>
            <li>Führerschein BE, reisebereit, höhentauglich</li>
            <li>Praktische Schweißerfahrung (111, 135, 141)</li>
          </ul>
          <p>Wir entlohnen gemäß Kollektivvertrag für Arbeiter im Metallgewerbe. Die Bereitschaft zur Überbezahlung ist je nach Berufserfahrung und Qualifikation gegeben.</p>
          <p style={{ marginTop: "20px" }}>Bewerbung z.H. Herrn <strong>Ing. Karl Kendlbacher</strong><br/>E-Mail: <a href="mailto:technik1@psmb.at" style={{ color: "#C8102E" }}>technik1@psmb.at</a></p>
        </div>
      )
    },
    {
      id: 3,
      title: "Metallbautechniker(in)",
      type: "Vollzeit",
      content: (
        <div style={{ fontSize: "15px", lineHeight: "1.8", color: "#BBB" }}>
          <p style={{ marginBottom: "10px", color: "#FFF" }}><strong>Aufgabengebiet:</strong></p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>Fertigung verschiedenster Metallteile</li>
            <li>Kurzfristige Einsätze extern auf der Baustelle (Montagearbeiten)</li>
          </ul>
          <p style={{ marginBottom: "10px", color: "#FFF" }}><strong>Zugangsvoraussetzung:</strong></p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>Abgeschlossene Lehre, abgeschlossener Präsenzdienst</li>
            <li>Gute Deutschkenntnisse in Wort und Schrift</li>
            <li>Führerschein B</li>
            <li>Praktische Schweißerfahrung (111, 135, 141)</li>
            <li>Kran- und Staplerschein von Vorteil</li>
          </ul>
          <p>Wir entlohnen gemäß Kollektivvertrag für Arbeiter im Metallgewerbe. Die Bereitschaft zur Überbezahlung ist je nach Berufserfahrung und Qualifikation gegeben.</p>
          <p style={{ marginTop: "20px" }}>Bewerbung z.H. Herrn <strong>Ing. Karl Kendlbacher</strong><br/>E-Mail: <a href="mailto:technik1@psmb.at" style={{ color: "#C8102E" }}>technik1@psmb.at</a></p>
        </div>
      )
    }
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
        
        .hamburger { display: none; cursor: pointer; flex-direction: column; gap: 5px; align-items: flex-end; margin-right: 15px; }
        .hamburger span { width: 24px; height: 2px; background: #D1D1D1; transition: all 0.3s ease; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
        
        .mobile-menu { display: none !important; position: absolute; top: 60px; right: 0; background: rgba(8,8,8,0.95); backdrop-filter: blur(15px); flex-direction: column; width: calc(100% - 40px); padding: 20px; border-top: 1px solid rgba(255,255,255,0.05); z-index: 999; box-sizing: border-box; }
        .mobile-menu.active { display: flex !important; }
        .mobile-menu a { color: #D1D1D1; text-decoration: none; padding: 12px 0; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.05); transition: color 0.2s; }
        .mobile-menu a:hover { color: #FFF; }
        
        .job-card { background: #262626; border: 1px solid #333; margin-bottom: 15px; border-radius: 4px; overflow: hidden; transition: all 0.3s ease; cursor: pointer; }
        .job-card:hover { border-color: #C8102E; transform: translateY(-2px); }

        .apply-btn { background: #C8102E; color: #FFF; border: 1px solid #C8102E; padding: 12px 28px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; display: inline-block; text-decoration: none; margin-top: 30px; }
        .apply-btn:hover { background: transparent; color: #C8102E; }

        .footer-link { color: #D1D1D1; text-decoration: none; font-size: 13px; transition: color 0.2s; }
        .footer-link:hover { color: #FFF; }

        @media (max-width: 1024px) {
          header { padding: 15px 40px !important; }
          .nav-link { font-size: 10px; gap: 20px; }
          section { padding: 0 40px 80px !important; }
        }

        @media (max-width: 768px) {
          header { padding: 12px 20px !important; }
          nav { gap: 15px !important; }
          .nav-link { font-size: 9px; letter-spacing: 1px; }
          
          section { padding: 0 20px 60px !important; }
          
          h1 { font-size: 36px !important; }
          h2 { font-size: 28px !important; }
          h3 { font-size: 20px !important; }
          p { font-size: 14px !important; }
          
          footer { padding: 60px 20px 40px !important; }
          footer > div { display: grid !important; grid-template-columns: 1fr !important; gap: 30px !important; }
        }

        @media screen and (max-width: 480px) {
          header { padding: 10px 15px !important; position: relative; }
          header img { height: 30px !important; }
          nav { display: none !important; }
          .hamburger { display: flex !important; }
          
          section { padding: 0 15px 40px !important; }
          
          h1 { font-size: 28px !important; }
          h2 { font-size: 20px !important; }
          h3 { font-size: 16px !important; }
          h4 { font-size: 14px !important; }
          p { font-size: 12px !important; }
          
          footer { padding: 40px 15px 30px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 30px !important; }
          footer > div > div { width: 100% !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh" }}>
        
        {/* HEADER */}
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
             <Link href="/projekte" className="nav-link">Projekte</Link>
             <Link href="/team" className="nav-link">Team</Link>
             <Link href="/karriere" className="nav-link" style={{ color: "#FFF" }}>Karriere</Link>
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
              backgroundImage: "url('/hero_karriere.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 50%",
              zIndex: 1
            }}
          />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ textAlign: "center", zIndex: 2, position: "relative" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "62px", fontStyle: "italic", fontWeight: "300", letterSpacing: "3px" }}>Karriere</h1>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "4px", fontSize: "14px", marginTop: "15px", color: "#C8102E" }}>Werde Teil unseres Teams</p>
          </motion.div>
        </section>

        {/* 1. EINLEITUNG - Grau wie LEISTUNGEN (#F5F5F5) */}
        <div style={{ background: "#F5F5F5", color: "#111" }}>
          <SectionDivider title="Wachse mit uns" />
          <section style={{ padding: "0 80px 100px", maxWidth: "1200px" }}>
            <motion.div {...fadeInUp}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: "300", lineHeight: "1.3", marginBottom: "30px", fontStyle: "italic" }}>
                Wir sind ein junges, dynamisches, national tätiges und wachsendes Unternehmen.
              </h2>
              <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#444", maxWidth: "900px" }}>
                Unsere Firmenschwerpunkte liegen im Bereich vom leichten bis mittelschweren Stahlbau, Schlosserarbeiten und Schweißarbeiten. Wenn Sie sich gerne in einem dynamischen Team persönlich und fachlich entwickeln möchten, freuen wir uns auf Ihre Bewerbung.
              </p>
            </motion.div>
          </section>
        </div>

        {/* 2. OFFENE STELLEN - Grau wie PROJEKTE (#E2E2E2) */}
        <div style={{ background: "#E2E2E2", color: "#111" }}>
          <SectionDivider title="Offene Stellen" />
          <section style={{ padding: "0 80px 120px", maxWidth: "1100px" }}>
            
            {jobs.map((job) => (
              <motion.div 
                key={job.id} 
                {...fadeInUp}
                className="job-card"
                onClick={() => toggleJob(job.id)}
              >
                <div style={{ padding: "25px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C8102E", fontSize: "11px", letterSpacing: "2px" }}>{job.type}</span>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", color: "#FFF", marginTop: "5px", fontWeight: "400" }}>{job.title}</h3>
                  </div>
                  <div style={{ color: "#C8102E", fontSize: "22px", fontWeight: "300" }}>
                    {openJob === job.id ? "−" : "+"}
                  </div>
                </div>

                <AnimatePresence>
                  {openJob === job.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 40px 40px", borderTop: "1px solid #333" }}>
                        <div style={{ marginTop: "30px" }}>
                          {job.content}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

          </section>
        </div>

        {/* 3. INITIATIVBEWERBUNG - Grau wie LEISTUNGEN (#F5F5F5) */}
        <div style={{ background: "#F5F5F5", color: "#111" }}>
          <SectionDivider title="Initiativbewerbung" />
          <section style={{ padding: "0 80px 140px", textAlign: "center" }}>
             <motion.div {...fadeInUp}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", marginBottom: "20px", fontWeight: "300", fontStyle: "italic" }}>Nicht das Richtige gefunden?</h3>
                <p style={{ color: "#666", marginBottom: "40px", maxWidth: "650px", margin: "0 auto 40px", fontSize: "16px", lineHeight: "1.8" }}>
                  Wir sind immer auf der Suche nach motivierten Talenten, die unser Team verstärken. Senden Sie uns Ihre Initiativbewerbung direkt per E-Mail oder nehmen Sie Kontakt mit uns auf.
                </p>
                <Link href="/kontakt" className="apply-btn">Jetzt Kontakt aufnehmen</Link>
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
                Gewerbestrasse 9, A-5671 Bruck<br />
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
              <motion.div
                onClick={scrollToTop}
                whileHover={{ scale: 1.08, boxShadow: "0 4px 16px #c8102e33", backgroundColor: "#E2E2E2" }}
                style={{
                  cursor: "pointer",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  background: "#E2E2E2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s cubic-bezier(.4,1.3,.6,1)",
                  boxShadow: "0 2px 8px #c8102e11"
                }}
                title="Nach oben"
              >
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="8 16 14 10 20 16"></polyline>
                </svg>
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