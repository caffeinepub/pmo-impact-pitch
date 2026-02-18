import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

export default function HeroExecutivePitch() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-2">
            Building Scalable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Governance Ecosystems
            </span>
          </h1>

          {/* Pitch Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            I specialise in building scalable governance, high-integrity lifecycle systems, and data foundations 
            that remove friction across regions. I solve problems at the structural level, not the symptomatic 
            level—creating disciplined, predictable, globally aligned delivery ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('success')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all min-h-[44px]"
            >
              Explore Impact
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto min-h-[44px]"
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('reviews')}
              className="w-full sm:w-auto min-h-[44px]"
            >
              Reviews
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-2xl mx-auto px-4">
            <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400">7+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Years PMO Experience</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400">12+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">High-Impact Initiatives</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Compliance Achievement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
