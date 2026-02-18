import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { impactStatements } from '@/content/pitchContent';

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm">
              <TrendingUp className="w-3 h-3 mr-1" />
              Impact Analysis
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Before vs After: Measurable Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              12 systematic improvements demonstrating the shift from friction to predictable execution, 
              from reactive firefighting to preventive discipline.
            </p>
          </div>

          {/* Impact Grid */}
          <div className="grid gap-4">
            {impactStatements.map((statement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-l-4 border-l-amber-500">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
                    {/* Before */}
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-xs">Before</Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {statement.before}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-2">
                      <Badge className="text-xs bg-gradient-to-r from-amber-500 to-orange-600">After</Badge>
                      <p className="text-sm font-medium leading-relaxed">
                        {statement.after}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-500 mb-2">12</div>
                <div className="text-sm text-muted-foreground">Transformative Initiatives</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-500 mb-2">4</div>
                <div className="text-sm text-muted-foreground">Success Criteria Pillars</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-500 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Structural Solutions</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
