export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ margin: 0, background: "black", color: "white", fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}