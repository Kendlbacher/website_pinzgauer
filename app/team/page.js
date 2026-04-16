"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SectionDivider = ({ title }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    padding: "100px 80px 50px 80px",
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

const TeamMember = ({ name, funktion, bild }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{ 
      textAlign: "center", 
      width: "220px", // Breite reduziert von 280px auf 220px
      margin: "0 auto" 
    }}
  >
    <div style={{
      width: "100%",
      aspectRatio: "3/4",
      background: "#151515",
      backgroundImage: bild ? `url(/team/${bild})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid #222",
      marginBottom: "15px",
      borderRadius: "2px"
    }} />
    <h4 style={{ 
      fontFamily: "'Cormorant Garamond', serif", 
      fontSize: "18px", // Schrift etwas kleiner passend zum Bild
      fontWeight: "400", 
      marginBottom: "4px",
      color: "#FFFFFF" 
    }}>{name}</h4>
    <p style={{ 
      fontFamily: "'DM Sans', sans-serif", 
      fontSize: "10px", // Schrift etwas kleiner
      letterSpacing: "2px", 
      textTransform: "uppercase", 
      color: "#C8102E" 
    }}>{funktion}</p>
  </motion.div>
);

export default function TeamPage() {
  const [isUnternehmenOpen, setIsUnternehmenOpen] = useState(false);

  const teamData = {
    fuehrung: [
      { name: "ROBERT ABERGER", funktion: "Geschaeftsfuehrung", bild: "Robert-Aberger-PSMB.jpg" },
      { name: "JOSEF MITTEREGGER", funktion: "Geschaeftsfuehrung", bild: "Josef-Mitteregger-PSMB.jpg" }
    ],
    buero: [
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
      { name: "BERNHARD WOERGOETTER", funktion: "Produktion", bild: "Bernhard-Woergoetter-PSMB.jpg" },
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
        body { background: #080808; color: #FFFFFF; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        
        .nav-link { color: #999999; text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; transition: color 0.25s ease; cursor: pointer; }
        .nav-link:hover { color: #FFFFFF; }
        
        .grid-container { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, 220px); 
          justify-content: center;
          justify-items: center;
          gap: 40px; 
          padding: 0 80px 60px; 
          max-width: 1400px;
          margin: 0 auto;
        }
      `}</style>

      <header style={{
        position: "fixed", top: 0, width: "100%", zIndex: 1000,
        background: "rgba(8,8,8,0.95)", backdropFilter: "blur(12px)",
        padding: "0 80px", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        borderBottom: "1px solid #1C1C1C",
        height: "80px"
      }}>
        <a href="/">
          <img src="/logo.png" alt="Logo" style={{ height: "45px", width: "auto" }} />
        </a>
        <nav style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <div onMouseEnter={() => setIsUnternehmenOpen(true)} onMouseLeave={() => setIsUnternehmenOpen(false)} style={{ position: "relative", padding: "30px 0" }}>
            <span className="nav-link">Unternehmen</span>
            <AnimatePresence>
              {isUnternehmenOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} style={{ position: "absolute", top: "100%", left: "-10px", background: "#111", border: "1px solid #222", minWidth: "150px", padding: "10px 0" }}>
                  <a href="#" style={{ display: "block", color: "#999", textDecoration: "none", fontSize: "11px", padding: "10px 20px" }}>Ueber uns</a>
                  <a href="#" style={{ display: "block", color: "#999", textDecoration: "none", fontSize: "11px", padding: "10px 20px" }}>Zertifikate</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="/#leistungen" className="nav-link">Leistungen</a>
          <a href="/#projekte" className="nav-link">Projekte</a>
          <a href="/team" className="nav-link" style={{ color: "#FFFFFF" }}>Team</a>
          <a href="/#kontakt" className="nav-link">Kontakt</a>
        </nav>
      </header>

      <section style={{ 
        height: "75vh", 
        position: "relative", 
        overflow: "hidden", 
        marginTop: "80px", 
        background: "#080808"
      }}>
        <div style={{
          position: "absolute", 
          inset: 0,
          backgroundImage: "linear-gradient(to bottom, #080808 0%, transparent 15%, transparent 75%, rgba(8, 8, 8, 0.5) 90%, #080808 100%), url('/team/team-group.jpg')",
          backgroundSize: "cover", 
          backgroundPosition: "center top", 
          backgroundRepeat: "no-repeat"
        }} />
      </section>

      <section style={{ 
        padding: "60px 20px", 
        background: "#080808",
        textAlign: "center"
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <h1 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "clamp(35px, 5vw, 65px)", 
            fontWeight: "300", 
            fontStyle: "italic", 
            marginBottom: "25px",
            color: "#FFFFFF"
          }}>
            Unser Team
          </h1>
          <p style={{ 
            color: "#AAAAAA", 
            fontSize: "18px", 
            lineHeight: "1.8", 
            fontWeight: "300", 
            letterSpacing: "0.5px"
          }}>
            Hinter jedem Projekt steht ein Team aus Experten, das Praezision, Erfahrung und Leidenschaft einbringt. 
            Seit 1985 bauen wir auf echte Handschlagqualitaet im Pinzgau.
          </p>
        </motion.div>
      </section>

      <main style={{ background: "#080808" }}>
        <SectionDivider title="Geschaeftsfuehrung" />
        <div className="grid-container">
          {teamData.fuehrung.map((m, i) => <TeamMember key={i} {...m} />)}
        </div>

        <SectionDivider title="Buero" />
        <div className="grid-container">
          {teamData.buero.map((m, i) => <TeamMember key={i} {...m} />)}
        </div>

        <SectionDivider title="Kalkulation und Technik" />
        <div className="grid-container">
          {teamData.technik.map((m, i) => <TeamMember key={i} {...m} />)}
        </div>

        <SectionDivider title="Produktion" />
        <div className="grid-container">
          {teamData.produktion.map((m, i) => <TeamMember key={i} {...m} />)}
        </div>
      </main>

      <footer style={{ background: "#080808", borderTop: "1px solid #1C1C1C", padding: "80px 80px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "60px", maxWidth: "1400px", margin: "0 auto 60px" }}>
          <div>
            <img src="/logo.png" alt="Logo" style={{ height: "50px", marginBottom: "20px" }} />
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "2.2" }}>
              Gewerbestrasse 9<br />A-5671 Bruck / Glocknerstrasse<br />info@psmb.at
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "#444", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>Seiten</p>
            {["Unternehmen", "Leistungen", "Projekte", "Team", "Kontakt"].map(l => (
              <a key={l} href={l === "Team" ? "/team" : "/"} style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "#444", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>Rechtliches</p>
            {["Impressum", "Datenschutz", "AGB"].map(l => (
              <a key={l} href="#" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div onClick={scrollToTop} style={{ cursor: "pointer", color: "#C8102E", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>UP</div>
          </div>
        </div>
        <div style={{ textAlign: "center", color: "#333", fontSize: "12px", borderTop: "1px solid #141414", paddingTop: "30px" }}>
          (c) 2025-2026 Pinzgauer Stahl- und Metallbau GmbH. Alle Rechte vorbehalten.
        </div>
      </footer>
    </>
  );
}