import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SkillsGuide - Find the Best Professional Skills Courses',
  description: 'Expert reviews and comparisons of the best online courses for professional skills development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
