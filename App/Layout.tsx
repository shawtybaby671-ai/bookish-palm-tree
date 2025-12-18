import './globals.css';
import Header from '@/components/Header';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Skill Bingo Platform',
  description: 'Sweepstakes bingo with skills'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <Header />
        <main className="p-4">{children}</main>
        <ThemeToggle />
      </body>
    </html>
  );
}
