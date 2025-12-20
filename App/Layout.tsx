// App/Layout.tsx
import './globals.css'; // or global.css

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Bookish Palm Tree Bingo 🌴📖</title>
        <meta name="description" content="Cosmic neon group chat bingo game" />
      </head>
      <body className="bg-background text-white min-h-screen">
        <header className="bg-gradient-to-b from-neon-purple to-background p-4 shadow-2xl shadow-neon-pink/50">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-wider flex items-center gap-4">
              <span className="text-neon-cyan drop-shadow-glow">Bookish</span>
              <span className="text-neon-green">Palm Tree</span>
              <span className="text-5xl">🌴📖</span>
            </h1>
            <p className="text-neon-pink text-sm animate-pulse">Lucky Lines Live</p>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          {children}
        </main>
        <footer className="text-center text-neon-cyan/60 text-sm p-4">
          Powered by cosmic vibes ✨
        </footer>
      </body>
    </html>
  );
}
