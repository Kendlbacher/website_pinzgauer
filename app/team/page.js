"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Scroll-Animations-Varianten
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const SectionDivider = ({ title, textColor = "#C8102E", lineColor = "rgba(200, 16, 46, 0.2)" }) => (
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
    <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${lineColor}, transparent)` }} />
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
      fontFamily: "'Cormorant Garamond', serif", 
      fontSize: "20px", 
      fontWeight: "500", 
      marginBottom: "6px",
      color: darkText ? "#111" : "#FFF" 
    }}>{name}</h4>
    <p style={{ 
      fontFamily: "'DM Sans', sans-serif", 
      fontSize: "10px", 
      letterSpacing: "2px", 
      textTransform: "uppercase", 
      color: "#C8102E",
      fontWeight: "600"
    }}>{funktion}</p>
  </motion.div>
);

export default function TeamPage() {
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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #080808; color: #FFFFFF; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        
        .nav-link { color: #D1D1D1; text-decoration: none; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; transition: color 0.25s ease; cursor: pointer; }
        .nav-link:hover { color: #FFF; }
        
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

        .footer-link { color: #D1D1D1; text-decoration: none; font-size: 13px; transition: color 0.2s; }
        .footer-link:hover { color: #FFF; }
      `}</style>

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
             <Link href="/team" className="nav-link" style={{ color: "#FFF" }}>Team</Link>
             <Link href="/karriere" className="nav-link">Karriere</Link>
             <Link href="/kontakt" className="nav-link">Kontakt</Link>
        </nav>
      </header>

      {/* HERO (Nach unten verschoben durch marginTop) */}
      <section style={{ 
        height: "80vh", 
        marginTop: "78px", // Header Höhe
        backgroundImage: "linear-gradient(to bottom, rgba(8,8,8,0.3), rgba(8,8,8,0.3)), url('/team/team-group.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center 20%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2 }}
            style={{ padding: "0 20px" }}
        >
          <h1 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "clamp(45px, 7vw, 90px)", 
            fontWeight: "300", 
            fontStyle: "italic", 
            color: "#FFF",
            textShadow: "0 10px 40px rgba(0,0,0,0.6)"
          }}>
            Unser Team
          </h1>
          <p style={{ 
            color: "#FFFFFF", 
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "14px", 
            letterSpacing: "5px",
            marginTop: "15px",
            opacity: 0.9,
            textTransform: "uppercase"
          }}>
            Handschlagqualität aus dem Pinzgau
          </p>
        </motion.div>
      </section>

      <main>
        {/* Geschäftsführung: Mittig gruppiert (Flex) */}
        <div style={{ background: "#F5F5F5" }}>
          <SectionDivider title="Geschäftsführung" />
          <div className="flex-centered">
            {teamData.führung.map((m, i) => <TeamMember key={i} {...m} darkText={true} />)}
          </div>
        </div>

        {/* Büro: Mittig gruppiert (Flex) */}
        <div style={{ background: "#E2E2E2" }}>
          <SectionDivider title="Büro" />
          <div className="flex-centered">
            {teamData.büro.map((m, i) => <TeamMember key={i} {...m} darkText={true} />)}
          </div>
        </div>

        {/* Technik: Mittig gruppiert (Flex) */}
        <div style={{ background: "#F5F5F5" }}>
          <SectionDivider title="Kalkulation und Technik" />
          <div className="flex-centered">
            {teamData.technik.map((m, i) => <TeamMember key={i} {...m} darkText={true} />)}
          </div>
        </div>

        {/* Produktion: Klassisches Grid für viele Personen */}
        <div style={{ background: "#E2E2E2" }}>
          <SectionDivider title="Produktion" />
          <div className="grid-container">
            {teamData.produktion.map((m, i) => <TeamMember key={i} {...m} darkText={true} />)}
          </div>
        </div>
      </main>

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
              <span style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "'Bebas Neue', sans-serif" }}>TOP</span>
            </motion.div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: "40px", fontSize: "12px", color: "#666", textAlign: "center" }}>
          (c) 2025 Pinzgauer Stahl- und Metallbau GmbH.
        </div>
      </footer>
    </>
  );
}