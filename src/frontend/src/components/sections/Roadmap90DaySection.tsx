import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { roadmapPhases } from '@/content/pitchContent';

export default function Roadmap90DaySection() {
  return (
    <section id="roadmap" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <Badge variant="outline" className="text-xs sm:text-sm">Strategic Roadmap</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
              90-Day Execution Plan
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A structured approach to building scalable governance, lifecycle integrity, and 
              data foundations—focused on preventive mechanisms, not temporary patches.
            </p>
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-4 sm:space-y-6">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-base sm:text-lg md:text-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {phase.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg md:text-xl font-bold">{phase.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-normal">
                        Phase {index + 1} of 3
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed min-w-0">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Principles */}
          <Card className="border-2 bg-gradient-to-br from-blue-600/5 to-blue-800/5">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Core Principles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-800 flex-shrink-0 text-xs">1</Badge>
                <p className="text-xs sm:text-sm text-muted-foreground min-w-0">
                  <strong className="text-foreground">Structural over Symptomatic:</strong> Build mechanisms that prevent recurrence, not temporary fixes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-800 flex-shrink-0 text-xs">2</Badge>
                <p className="text-xs sm:text-sm text-muted-foreground min-w-0">
                  <strong className="text-foreground">Scalable & Repeatable:</strong> Design governance models that work across regions and grow with the organization.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-800 flex-shrink-0 text-xs">3</Badge>
                <p className="text-xs sm:text-sm text-muted-foreground min-w-0">
                  <strong className="text-foreground">Data-Driven Decisions:</strong> Enable leaders to act on reliable foundations, not firefighting signals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
