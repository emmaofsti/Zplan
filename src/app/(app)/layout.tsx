import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import CacheBuster from '@/components/CacheBuster';
import '../app.css';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <CacheBuster />
      <div className="page-container">
        <Navbar />
        {children}
        <footer className="site-footer">
          <p>Trenger du hjelp? Kontakt <a href="mailto:hei@zplan.no">hei@zplan.no</a></p>
        </footer>
      </div>
    </Providers>
  );
}
