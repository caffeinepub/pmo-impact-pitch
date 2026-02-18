import { useEffect } from 'react';
import HeroExecutivePitch from './components/sections/HeroExecutivePitch';
import AboutMeSection from './components/sections/AboutMeSection';
import SuccessCriteriaModule from './components/sections/SuccessCriteriaModule';
import ImpactSection from './components/sections/ImpactSection';
import Roadmap90DaySection from './components/sections/Roadmap90DaySection';
import SectionNav from './components/SectionNav';
import ReferenceNotes from './components/ReferenceNotes';
import { Toaster } from '@/components/ui/sonner';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SectionNav />
      
      <main className="relative">
        <HeroExecutivePitch />
        <AboutMeSection />
        <SuccessCriteriaModule />
        <ImpactSection />
        <Roadmap90DaySection />
        <ReferenceNotes />
      </main>

      <footer className="border-t border-border bg-card py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PMO Impact Pitch. Built with love using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;
