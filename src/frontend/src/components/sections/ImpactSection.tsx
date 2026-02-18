import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { impactStatements } from '@/content/pitchContent';

export default function ImpactSection() {
  return (
    <section id="impact" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <Badge variant="outline" className="text-xs sm:text-sm">
              <TrendingUp className="w-3 h-3 mr-1" />
              Impact Analysis
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
              Before vs After: Measurable Transformation
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              12 systematic improvements demonstrating the shift from friction to predictable execution, 
              from reactive firefighting to preventive discipline.
            </p>
          </div>

          {/* Impact Grid */}
          <div className="grid gap-3 sm:gap-4">
            {impactStatements.map((statement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-l-4 border-l-blue-600">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col md:grid md:grid-cols-[1fr,auto,1fr] gap-4 items-start md:items-center">
                    {/* Before */}
                    <div className="space-y-2 w-full">
                      <Badge variant="secondary" className="text-xs">Before</Badge>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {statement.before}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center w-full md:w-auto my-2 md:my-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-2 w-full">
                      <Badge className="text-xs bg-gradient-to-r from-blue-600 to-blue-800">After</Badge>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">
                        {statement.after}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">12</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Transformative Initiatives</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">4</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Success Criteria Pillars</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Structural Solutions</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
