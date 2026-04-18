"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ImpressumPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        .hamburger { display: none; cursor: pointer; flex-direction: column; gap: 5px; align-items: flex-end; margin-right: 15px; }
        .hamburger span { width: 24px; height: 2px; background: #D1D1D1; transition: all 0.3s ease; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
        .mobile-menu { display: none !important; position: absolute; top: 60px; right: 0; background: rgba(8,8,8,0.95); backdrop-filter: blur(15px); flex-direction: column; width: calc(100% - 40px); padding: 20px; border-top: 1px solid rgba(255,255,255,0.05); z-index: 999; box-sizing: border-box; }
        .mobile-menu.active { display: flex !important; }
        .mobile-menu a { color: #D1D1D1; text-decoration: none; padding: 12px 0; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.05); transition: color 0.2s; }
        .mobile-menu a:hover { color: #FFF; }
        .footer-link { color: #D1D1D1; text-decoration: none; font-size: 13px; transition: color 0.2s; }
        .footer-link:hover { color: #FFF; }
        @media (max-width: 1024px) {
          header { padding: 15px 40px !important; }
          .nav-link { font-size: 10px; gap: 20px; }
        }
        @media (max-width: 768px) {
          header { padding: 12px 20px !important; }
          nav { gap: 15px !important; }
          .nav-link { font-size: 9px; letter-spacing: 1px; }
          footer { padding: 60px 20px 40px !important; }
          footer > div { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
        @media (max-width: 480px) {
          header { padding: 10px 15px !important; position: relative; }
          header img { height: 30px !important; }
          nav { display: none !important; }
          .hamburger { display: flex !important; }
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
          <div onClick={scrollToTop} style={{ cursor: "pointer" }}>
            <img src="/logo.png" alt="Logo" style={{ height: "38px" }} />
          </div>
          <nav style={{ display: "flex", gap: "35px" }}>
             <Link href="/unternehmen" className="nav-link">Unternehmen</Link>
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
                <Link href="/projekte" onClick={() => setIsMobileMenuOpen(false)}>Projekte</Link>
                <Link href="/team" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                <Link href="/karriere" onClick={() => setIsMobileMenuOpen(false)}>Karriere</Link>
                <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        {/* IMPRESSUM CONTENT */}
        <section style={{
          minHeight: "40vh",
          background: "#E2E2E2",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "120px 0 40px 0"
        }}>
          <motion.h1 {...fadeInUp} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "38px", color: "#C8102E", letterSpacing: "6px", marginBottom: "24px", textAlign: "center", width: "100%" }}>
            IMPRESSUM
          </motion.h1>
          <div style={{ maxWidth: 900, width: "100%", margin: "0 auto", color: "#222", fontSize: 15, lineHeight: 1.8, padding: "0 24px", wordBreak: "break-word" }}>
            <p><strong>Nach § 5 Abs. 1 des österreichischen eCommerce-Gesetz (ECG) und § 24 Mediengesetz geben wir hiermit uns als den Betreiber dieser Internetseite bekannt:</strong></p>
            <p>
              Pinzgauer Stahl- und Metallbau GmbH<br />
              Gewerbestraße 9 | 5671 Bruck a.d. Großglocknerstrasse<br />
              Telefon: +43 6545 20345<br />
              Fax: +43 6545 20345 67<br />
              info@psmb.at
            </p>
            <p>
              Landesgericht Salzburg<br />
              Firmenbuchnummer FN 460952 x<br />
              UID Nr.: ATU71460509
            </p>
            <p>
              <strong>Bankverbindung:</strong><br />
              IBAN: AT 26 2040 4000 4183 0936<br />
              BIC: SBGSAT2SXXX
            </p>
            <p>
              Kammerzugehörigkeit: Wirtschaftskammer Salzburg<br />
              Eingetragener Gegenstand: Stahl- und Metallbau, Hallenbau, Reparatur von Maschinen.
            </p>
            <p>
              Geschäftsführung: Aberger Robert, Mitteregger Josef
            </p>
            <p>
              <strong>Bildnachweis</strong><br />
              Pinzgauer Stahl- und Metallbau GmbH, Jürgen Feichter, EQ-Vis OG, Hall in Tirol
            </p>
            <p>
              Texte, Bilder und Grafiken dieser Seite dürfen nur nach ausdrücklicher Genehmigung der Eigentümer verwendet werden. Alle Informationen und Erklärungen unserer Internetseiten sind unverbindlich. Wir übernehmen für die Richtigkeit und Vollständigkeit der Inhalte keine Garantie. Aus den Inhalten dieser Internetseiten können sich auch keine Rechtsansprüche ergeben. Sollten Ihnen Fehler im Inhalt auffallen, ersuchen wir Sie uns zu kontaktieren, damit wir diese korrigieren können. Wir identifizieren uns nicht mit dem Inhalt der Seiten, bzw. Unterseiten auf die gelinkt wird und übernehmen dafür keine Haftung. Sollte eine der Seiten, auf die wir linken, bedenkliche Inhalte aufweisen oder nicht vom jeweiligen Seiteninhaber erwünscht sein, dann wird der jeweilige Link sofort gelöscht.
            </p>
            <p><strong>Angaben zur Online-Streitbeilegung</strong></p>
            <p>
              Seit dem 9.1.2016 gilt die EU-Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (Nr. 524/2013). Streitigkeiten zwischen Verbrauchern und Händlern im Zusammenhang von Online-Kaufverträgen oder Online-Dienstleistungsverträgen können über folgende Online-Plattform beigelegt werden. <a href="http://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/consumers/odr</a>
            </p>
            <p><strong>Haftungsausschluss</strong></p>
            <p>
              Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Webseite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
            </p>
            <p><strong>Haftung für Inhalte dieser Webseite</strong></p>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p><strong>Haftung für Links auf Webseiten Dritter</strong></p>
            <p>
              Unser Angebot enthält Links zu externen Websites. Auf den Inhalt dieser externen Webseiten haben wir keinerlei Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <p><strong>Urheberrecht</strong></p>
            <p>
              Die Betreiber dieser Webseite sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst erstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Webseite unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>
        </section>
        {/* FOOTER */}
        <footer style={{ background: "#0C0C0C", padding: "100px 80px 60px", color: "#FFF" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "60px", maxWidth: "1400px", margin: "0 auto 80px" }}>
            <motion.div {...fadeInUp}>
              <img src="/logo.png" alt="Logo" style={{ height: "45px", marginBottom: "30px" }} />
              <p style={{ color: "#CCCCCC", fontSize: "14px", lineHeight: "2.2" }}>
                <strong>Pinzgauer Stahl- und Metallbau GmbH</strong><br />
                Gewerbestraße 9, A-5671 Bruck<br />
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
              <a href="/impressum" className="footer-link">Impressum</a>
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
