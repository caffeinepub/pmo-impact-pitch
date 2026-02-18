import { useEffect } from 'react';
import HeroExecutivePitch from './components/sections/HeroExecutivePitch';
import AboutMeSection from './components/sections/AboutMeSection';
import SuccessCriteriaModule from './components/sections/SuccessCriteriaModule';
import ImpactSection from './components/sections/ImpactSection';
import Roadmap90DaySection from './components/sections/Roadmap90DaySection';
import ReviewsSection from './components/sections/ReviewsSection';
import SectionNav from './components/SectionNav';
import ReferenceNotes from './components/ReferenceNotes';
import { Toaster } from '@/components/ui/sonner';
import { Heart } from 'lucide-react';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SectionNav />
      
      <main className="relative pt-16">
        <HeroExecutivePitch />
        <AboutMeSection />
        <SuccessCriteriaModule />
        <ImpactSection />
        <Roadmap90DaySection />
        <ReviewsSection />
        <ReferenceNotes />
      </main>

      <footer className="border-t border-border bg-card py-6 sm:py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            <span>© {new Date().getFullYear()} PMO Impact Pitch.</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" /> using
            </span>
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
