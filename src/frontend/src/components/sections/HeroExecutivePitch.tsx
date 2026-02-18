import { Button } from '@/components/ui/button';
import { ArrowDown, Users } from 'lucide-react';

export default function HeroExecutivePitch() {
  const scrollToSuccess = () => {
    const element = document.getElementById('success');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Interviewer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Tailored for Sanjeev & Martin</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Building Scalable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Governance Ecosystems
            </span>
          </h1>

          {/* Pitch Paragraph */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I specialise in building scalable governance, high-integrity lifecycle systems, and data foundations 
            that remove friction across regions. I solve problems at the structural level, not the symptomatic 
            level—creating disciplined, predictable, globally aligned delivery ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={scrollToSuccess}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Explore Impact
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-500">7+</div>
              <div className="text-sm text-muted-foreground mt-1">Years PMO Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-500">12+</div>
              <div className="text-sm text-muted-foreground mt-1">High-Impact Initiatives</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-500">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Compliance Achievement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
