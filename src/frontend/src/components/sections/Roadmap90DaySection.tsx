import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { roadmapPhases } from '@/content/pitchContent';

export default function Roadmap90DaySection() {
  return (
    <section id="roadmap" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm">Strategic Roadmap</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              90-Day Execution Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to building scalable governance, lifecycle integrity, and 
              data foundations—focused on preventive mechanisms, not temporary patches.
            </p>
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-6">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl">
                      {phase.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold">{phase.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        Phase {index + 1} of 3
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
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
          <Card className="border-2 bg-gradient-to-br from-amber-500/5 to-orange-600/5">
            <CardHeader>
              <CardTitle>Core Principles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 flex-shrink-0">1</Badge>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Structural over Symptomatic:</strong> Build mechanisms that prevent recurrence, not temporary fixes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 flex-shrink-0">2</Badge>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Scalable & Repeatable:</strong> Design governance models that work across regions and grow with the organization.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 flex-shrink-0">3</Badge>
                <p className="text-sm text-muted-foreground">
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
