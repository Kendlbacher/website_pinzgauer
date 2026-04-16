export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, background: "black", color: "white", fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}