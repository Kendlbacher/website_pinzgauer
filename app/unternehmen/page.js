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

export default function Unternehmen() {
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
        
        .footer-link { color: #D1D1D1; text-decoration: none; font-size: 13px; transition: color 0.2s; }
        .footer-link:hover { color: #FFF; }

        /* Stat-Karten Design wie Projekte-Stil */
        .stat-card { background: #262626; border: 1px solid #333; padding: 40px; transition: all 0.3s ease; border-radius: 8px; }
        .stat-card:hover { border-color: #C8102E; transform: translateY(-5px); }
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
             <Link href="/unternehmen" className="nav-link" style={{ color: "#FFF" }}>Unternehmen</Link>
             <Link href="/#leistungen" className="nav-link">Leistungen</Link>
             <Link href="/projekte" className="nav-link">Projekte</Link>
             <Link href="/team" className="nav-link">Team</Link>
             <Link href="/karriere" className="nav-link">Karriere</Link>
             <Link href="/kontakt" className="nav-link">Kontakt</Link>
          </nav>
        </header>

        {/* HERO SEKTION - Fade entfernt, klares Bild */}
        <section style={{
          height: "70vh", display: "flex", justifyContent: "center", alignItems: "center",
          backgroundImage: "url('/hero_unternehmen.jpg')",
          backgroundSize: "cover", backgroundPosition: "center", position: "relative"
        }}>
          {/* Optionaler ganz leichter Overlay für Lesbarkeit der weißen Schrift */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2 }} 
            style={{ textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "62px", fontStyle: "italic", fontWeight: "300", letterSpacing: "3px" }}>Tradition trifft <br/> Präzision</h1>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "4px", fontSize: "14px", marginTop: "15px", color: "#C8102E" }}>Über die Pinzgauer Stahl- und Metallbau GmbH</p>
          </motion.div>
        </section>

        {/* 1. PHILOSOPHIE - Grau wie LEISTUNGEN (#F5F5F5) */}
        <div style={{ background: "#F5F5F5", color: "#111" }}>
          <SectionDivider title="Unsere Philosophie" />
          <section style={{ padding: "0 80px 100px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
              <motion.div {...fadeInUp}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: "300", lineHeight: "1.2", marginBottom: "30px" }}>
                  Qualität aus dem Herzen des Pinzgaus – seit Generationen.
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
                  Die Pinzgauer Stahl- und Metallbau GmbH steht für erstklassiges Handwerk und innovative Lösungen im Bereich Stahl- und Metallbau. Was als kleine Schlosserei begann, hat sich zu einem modernen Vorzeigebetrieb in Bruck entwickelt.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                  Wir verbinden traditionelle Schmiedekunst mit modernster Plasma-Technologie und computergestützter Fertigung. Unser Ziel ist es, jedes Projekt – ob privates Geländer oder komplexe Industrie-Stahlbrücke – mit höchster Präzision und Verlässlichkeit umzusetzen.
                </p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                 <motion.img 
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}
                   src="/unternehmen/unternehmen1.jpg" 
                   alt="Philosophie" 
                   style={{ width: "70%", borderRadius: "8px", display: "block", margin: "0 auto" }} 
                 />
              </motion.div>
            </div>
          </section>
        </div>

        {/* 2. DATEN & FAKTEN - Grau wie PROJEKTE (#E2E2E2) */}
        <div style={{ background: "#E2E2E2", color: "#111" }}>
          <SectionDivider title="Daten & Fakten" />
          <section style={{ padding: "0 80px 120px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "25px" }}>
              {[
                { label: "Mitarbeiter", val: "25+" },
                { label: "Jahre Erfahrung", val: "30" },
                { label: "Projekte / Jahr", val: "200+" },
                { label: "Zertifikate", val: "EN1090" }
              ].map((stat, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="stat-card">
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", color: "#C8102E", marginBottom: "10px" }}>{stat.val}</p>
                  <p style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#FFF" }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 3. ZERTIFIKATE - Grau wie LEISTUNGEN (#F5F5F5) */}
        <div style={{ background: "#F5F5F5", color: "#111" }}>
          <SectionDivider title="Zertifizierte Sicherheit" />
          <section style={{ padding: "0 80px 140px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
              <motion.div {...fadeInUp}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", marginBottom: "25px" }}>Höchste Standards für Ihre Sicherheit.</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                  Im Stahlbau gibt es keine Kompromisse. Wir sind zertifiziert nach <strong>EN 1090-2 (EXC2)</strong>, was uns berechtigt, tragende Bauteile aus Stahl in ganz Europa in Verkehr zu bringen. Unsere Schweißer sind staatlich geprüft und werden regelmäßig nachqualifiziert.
                </p>
              </motion.div>
              
              {/* Bereich für zwei Zertifikats-Bilder */}
              <motion.div {...fadeInUp} style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1, background: "#FFF", padding: "10px", border: "1px solid #DDD", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                  <img src="/unternehmen/zertifikat1.jpg" alt="Zertifikat EN 1090" style={{ width: "100%", height: "auto" }} />
                </div>
                <div style={{ flex: 1, background: "#FFF", padding: "10px", border: "1px solid #DDD", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                  <img src="/unternehmen/zertifikat2.jpg" alt="Zertifikat Schweißqualität" style={{ width: "100%", height: "auto" }} />
                </div>
              </motion.div>
            </div>
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