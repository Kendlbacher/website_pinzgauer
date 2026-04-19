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

const TeamMember = ({ name, funktion, bild, darkText = true }) => (
  <motion.div
    {...fadeInUp}
    style={{ textAlign: "center", width: "220px" }}
  >
    <div style={{
      width: "100%",
      aspectRatio: "3/4",
      backgroundColor: "#151515",
      backgroundImage: `url(/team/${bild})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid rgba(0,0,0,0.05)",
      marginBottom: "20px",
      borderRadius: "4px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
    }} />
    <h4 style={{ 
      fontFamily: "'Playfair Display', serif", 
      fontSize: "20px", 
      fontWeight: "600", 
      marginBottom: "6px",
      color: darkText ? "#111" : "#FFF",
      letterSpacing: "-0.2px"
    }}>{name}</h4>
    <p style={{ 
      fontFamily: "'Inter', sans-serif", 
      fontSize: "10px", 
      letterSpacing: "3px", 
      textTransform: "uppercase", 
      color: "#C8102E",
      fontWeight: "600"
    }}>{funktion}</p>
  </motion.div>
);

export default function TeamPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const teamData = {
    führung: [
      { name: "ROBERT ABERGER", funktion: "Geschäftsführung", bild: "Robert-Aberger-PSMB.jpg" },
      { name: "JOSEF MITTEREGGER", funktion: "Geschäftsführung", bild: "Josef-Mitteregger-PSMB.jpg" }
    ],
    büro: [
      { name: "EVA ABERGER", funktion: "Verwaltung", bild: "team-bild-coming-soon.jpg" },
      { name: "CLAUDIA ALTACHER", funktion: "Buchhaltung", bild: "Claudia-Altacher-PSMB.jpg" }
    ],
    technik: [
      { name: "ING. KARL KENDLBACHER", funktion: "Technik", bild: "Ing.-Karl-Kendlbacher-PSMB.jpg" },
      { name: "LUKAS WIMMER", funktion: "Kalkulation & Technik", bild: "Lukas-Wimmer-PSMB.jpg" },
      { name: "MARKUS KOCH", funktion: "Lager", bild: "Markus-Koch-PSMB.jpg" }
    ],
    produktion: [
      { name: "ANDREAS BRUNNER", funktion: "Produktion", bild: "Andreas-Brunner-PSMB.jpg" },
      { name: "DRAGAN CVIJETIC", funktion: "Produktion", bild: "Dragen-Cvijetiv-PSMB.jpg" },
      { name: "ALEXANDER ELLMAUER", funktion: "Produktion", bild: "Alexander-Ellmauer.jpg" },
      { name: "PERO LUKIC", funktion: "Produktion", bild: "Pero-Lukic-PSMB.jpg" },
      { name: "JONAS MESSNER", funktion: "Produktion", bild: "Jonas-Messner-PSMB.jpg" },
      { name: "HANS-PETER MITTEREGGER", funktion: "Produktion", bild: "Hans-Peter-Mitteregger-PSMB.jpg" },
      { name: "THOMAS NOTDURFTER", funktion: "Produktion", bild: "Thomas-Nothdurfter.jpg" },
      { name: "SIMON PERWEIN", funktion: "Produktion", bild: "Simon-Perwein-PSMB.jpg" },
      { name: "MARVIN RATGEB", funktion: "Produktion", bild: "Marvin-Rathgeb-PSMB.jpg" },
      { name: "SIMON RIESS", funktion: "Produktion", bild: "Simon-Riess-PSMB.jpg" },
      { name: "HANNES SCHEIBLBRANDNER", funktion: "Produktion", bild: "Hannes-Scheiblbrander-PSMB.jpg" },
      { name: "FABIAN STADLER", funktion: "Produktion", bild: "Fabian-Stadler-PSMB.jpg" },
      { name: "MIKE STAUDENMAYER", funktion: "Produktion", bild: "Mike-Staudenmayer-PSMB.jpg" },
      { name: "THOMAS VOLKMAR", funktion: "Produktion", bild: "Thomas-Volkmar-PSMB.jpg" },
      { name: "BERNHARD WÖRGETTER", funktion: "Produktion", bild: "Bernhard-Woergoetter-PSMB.jpg" },
      { name: "CHRISTOPH ZAGAR", funktion: "Produktion", bild: "Christoph-Zagar-PSMB.jpg" }
    ]
  };

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
        
        /* Flex-Container für zentrierte kleine Gruppen */
        .flex-centered { 
          display: flex; 
          flex-wrap: wrap; 
          justify-content: center; 
          gap: 40px; 
          padding: 0 80px 100px; 
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Grid-Container für die große Produktions-Liste */
        .grid-container { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, 220px); 
          justify-content: center;
          gap: 50px 40px; 
          padding: 0 80px 100px; 
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-link { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 13px; transition: all 0.3s ease; font-family: 'Inter', sans-serif; letter-spacing: 0.3px; }
        .footer-link:hover { color: #FFF; padding-left: 5px; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 1024px) {
          header { padding: 15px 40px !important; }
          .nav-link { font-size: 10px; gap: 20px; }
          .grid-container { padding: 0 40px 60px !important; }
        }

        @media (max-width: 768px) {
          header { padding: 12px 20px !important; }
          nav { gap: 15px !important; }
          .nav-link { font-size: 9px; letter-spacing: 1px; }
          
          .content-wrapper { flex-direction: column !important; padding: 40px 20px !important; }
          .sidebar { width: 100% !important; }
          .grid-container { grid-template-columns: repeat(2, 1fr) !important; padding: 0 20px 60px !important; gap: 15px !important; }
          
          h1 { font-size: 36px !important; }
          h3 { font-size: 18px !important; }
          p { font-size: 13px !important; }
          
          footer { padding: 60px 20px 40px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 30px !important; }
        }

        @media screen and (max-width: 480px) {
          header { padding: 10px 15px !important; position: relative; }
          header img { height: 30px !important; }
          nav { display: none !important; }
          .hamburger { display: flex !important; }
          
          .content-wrapper { flex-direction: column !important; padding: 20px 15px !important; }
          .sidebar { width: 100% !important; margin-bottom: 20px !important; }
          .grid-container { grid-template-columns: 1fr !important; padding: 0 15px 40px !important; gap: 10px !important; }
          
          h1 { font-size: 28px !important; }
          h3 { font-size: 14px !important; }
          p { font-size: 11px !important; }
          
          footer { padding: 40px 15px 30px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 30px !important; }
        }
      `}</style>

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
             <Link href="/team" className="nav-link" style={{ color: "#FFF" }}>Team</Link>
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

      {/* HERO (Nach unten verschoben durch marginTop) */}
      <section style={{ 
        height: "80vh", 
        marginTop: "78px", // Header Höhe
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden"
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
            backgroundImage: "linear-gradient(to bottom, rgba(8,8,8,0.3), rgba(8,8,8,0.3)), url('/team/team-group.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            zIndex: 1
          }}
        />
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2 }}
            style={{ zIndex: 2, position: "relative", padding: "0 20px" }}
        >
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "clamp(45px, 7vw, 80px)", 
            fontWeight: "600", 
            color: "#FFF",
            letterSpacing: "-1px",
            textShadow: "0 10px 40px rgba(0,0,0,0.6)"
          }}>
            Unser Team
          </h1>
          <p style={{ 
            color: "rgba(255,255,255,0.5)", 
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "5px",
            marginTop: "20px",
            textTransform: "uppercase"
          }}>
            Handschlagqualität aus dem Pinzgau
          </p>
        </motion.div>
      </section>

      <main>
        {/* Geschäftsführung: Mittig gruppiert (Flex) */}
        <div style={{ background: "#F7F7F5" }}>
          <SectionDivider title="Geschäftsführung" />
          <div className="flex-centered">
            {teamData.führung.map((m, i) => <TeamMember key={i} {...m} darkText={true} />)}
          </div>
        </div>

        {/* Büro: Mittig gruppiert (Flex) */}
        <div style={{ background: "#EDEDEB" }}>
          <SectionDivider title="Büro" />
          <div className="flex-centered">
            {teamData.büro.map((m, i) => <TeamMember key={i} {...m} darkText={true} />)}
          </div>
        </div>

        {/* Technik: Mittig gruppiert (Flex) */}
        <div style={{ background: "#F7F7F5" }}>
          <SectionDivider title="Kalkulation und Technik" />
          <div className="flex-centered">
            {teamData.technik.map((m, i) => <TeamMember key={i} {...m} darkText={true} />)}
          </div>
        </div>

        {/* Produktion: Klassisches Grid für viele Personen */}
        <div style={{ background: "#EDEDEB" }}>
          <SectionDivider title="Produktion" />
            <div className="grid-container" style={{ justifyItems: "center" }}>
              {teamData.produktion.map((m, i) => <TeamMember key={i} {...m} darkText={true} />)}
            </div>
        </div>
      </main>

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
    </>
  );
}