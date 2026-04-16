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

export default function KontaktPage() {
  const [isUnternehmenOpen, setIsUnternehmenOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const infoStyle = { marginBottom: "35px" };
  const labelStyle = {
    color: "#C8102E",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontFamily: "'Bebas Neue', sans-serif",
    display: "block",
    marginBottom: "8px"
  };
  const contentStyle = {
    color: "#AAAAAA",
    fontSize: "16px",
    lineHeight: "1.6",
    fontFamily: "'DM Sans', sans-serif",
    textDecoration: "none"
  };
  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #333333",
    padding: "12px 0",
    color: "#FFFFFF",
    fontSize: "14px",
    outline: "none",
    marginBottom: "25px",
    transition: "border-color 0.3s ease",
    fontFamily: "'DM Sans', sans-serif"
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #080808; color: #FFFFFF; font-family: 'DM Sans', sans-serif; }
        .nav-link { color: #999999; text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; transition: color 0.25s ease; cursor: pointer; }
        .nav-link:hover { color: #FFFFFF; }
        .dropdown-item { display: block; padding: 12px 20px; color: #999999; text-decoration: none; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; transition: all 0.2s ease; border-left: 0 solid #C8102E; }
        .dropdown-item:hover { color: #FFFFFF; background: #1a1a1a; border-left: 3px solid #C8102E; padding-left: 25px; }
        input:focus, textarea:focus { border-bottom: 1px solid #C8102E !important; }
        .submit-btn { background: #C8102E; color: #FFF; border: none; padding: 15px 35px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; border-radius: 4px; }
        .submit-btn:hover { background: #FFFFFF; color: #000000; }
        
        @media (max-width: 900px) {
          .kontakt-grid { grid-template-columns: 1fr !important; gap: 50px !important; }
          .page-padding { padding: 40px 25px !important; }
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
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} style={{ position: "absolute", top: "100%", left: "-10px", background: "#111", border: "1px solid #222", minWidth: "180px", padding: "10px 0" }}>
                  <Link href="/unternehmen" className="dropdown-item">Ueber uns</Link>
                  <a href="#" className="dropdown-item">Zertifikate</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/#leistungen" className="nav-link">Leistungen</Link>
          <Link href="/projekte" className="nav-link">Projekte</Link>
          <Link href="/team" className="nav-link">Team</Link>
          <Link href="/kontakt" className="nav-link" style={{ color: "#FFFFFF" }}>Kontakt</Link>
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
          url('/hero_kontakt.jpg')
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
            Kontakt
          </h1>
          <p style={{ color: "#AAA", fontSize: "18px", fontWeight: "300", letterSpacing: "0.5px", maxWidth: "600px", margin: "0 auto" }}>
            Wir freuen uns auf Ihre Anfrage und beraten Sie gerne bei Ihrem Projekt.
          </p>
        </motion.div>
      </section>

      {/* KONTAKT INFOS & FORMULAR */}
      <main className="page-padding" style={{ padding: "40px 80px 60px", maxWidth: "1300px", margin: "0 auto" }}>
        <div className="kontakt-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div style={{ paddingTop: "20px" }}>
            <div style={infoStyle}><span style={labelStyle}>Telefon</span><p style={contentStyle}>+43 6545 20345</p></div>
            <div style={infoStyle}><span style={labelStyle}>Kontakt per E-Mail</span><p style={contentStyle}>E-Mail: <a href="mailto:info@psmb.at" style={contentStyle}>info@psmb.at</a></p></div>
            <div style={infoStyle}><span style={labelStyle}>Adresse</span><p style={contentStyle}>Pinzgauer Stahl- und Metallbau GmbH<br />Gewerbestrasse 9<br />A - 5671 Bruck a.d. Grossglocknerstrasse</p></div>
            <div style={infoStyle}><span style={labelStyle}>Unsere Oeffnungszeiten</span><p style={contentStyle}>MO - DO: 07:00 - 12:00 / 13:00 - 16:30<br />FR: 07:00 - 11:30</p></div>
          </div>

          <div style={{ background: "#161616", padding: "45px", borderRadius: "12px", border: "1px solid #C8102E", maxWidth: "500px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "24px", color: "#FFFFFF", marginBottom: "30px", fontWeight: "500" }}>Anfrage senden</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ihr Name" style={inputStyle} required />
                <input type="email" placeholder="E-Mail" style={inputStyle} required />
                <input type="text" placeholder="Betreff" style={inputStyle} required />
                <textarea placeholder="Nachricht" rows="3" style={{ ...inputStyle, resize: "none" }} required></textarea>
                <div style={{ display: "flex", gap: "12px", marginBottom: "30px", alignItems: "flex-start" }}>
                  <input type="checkbox" id="privacy" style={{ marginTop: "4px", accentColor: "#C8102E" }} required />
                  <label htmlFor="privacy" style={{ color: "#777777", fontSize: "11px", lineHeight: "1.5" }}>Ich akzeptiere die DATENSCHUTZERKLAERUNG.</label>
                </div>
                <button type="submit" className="submit-btn">Anfrage Senden</button>
              </form>
            ) : (
              <div style={{ textAlign: "center" }}><h3 style={{ color: "#C8102E" }}>Vielen Dank!</h3><p style={{ color: "#AAAAAA" }}>Nachricht erhalten.</p></div>
            )}
          </div>
        </div>
      </main>

      {/* MAP SEKTION */}
      <SectionDivider title="Anfahrt / Standort" />
      <div className="map-container" style={{ padding: "0 80px 100px", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ 
          width: "100%", 
          height: "450px", 
          borderRadius: "12px", 
          overflow: "hidden", 
          border: "1px solid #1A1A1A",
          position: "relative"
        }}>
          <iframe 
            title="Google Maps Standort"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.648160002131!2d12.82285497686524!3d47.28310341050212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47771dc31841398d%3A0x6b10766159c3817f!2sGewerbestra%C3%9Fe%209%2C%205671%20Bruck%20an%20der%20Gro%C3%9Fglocknerstra%C3%9Fe!5e0!3m2!1sde!2sat!4v1709123456789!5m2!1sde!2sat"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
              <Link key={l} href={l === 'Kontakt' ? '/kontakt' : '/'} style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{l}</Link>
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