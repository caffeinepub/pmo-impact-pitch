import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Database, Shield, TrendingUp, Zap } from 'lucide-react';

export default function AboutMeSection() {
  const strengths = [
    {
      icon: Database,
      title: 'Transparent & Reliable Data',
      description: 'Built ServiceNow ITAM inventory, global demand review systems, and PM training frameworks for lifecycle data integrity.'
    },
    {
      icon: Shield,
      title: 'Governance & Process Adherence',
      description: 'Implemented resource-first policies, extension governance, and lifted compliance from 77% to 100%.'
    },
    {
      icon: Zap,
      title: 'Reduced Bottlenecks',
      description: 'Deployed MS Planner for VP visibility, weekly agile patching, and Day-1 onboarding manuals.'
    },
    {
      icon: TrendingUp,
      title: 'Improved Reporting & Automation',
      description: 'Created PM availability dashboards, resource intelligence systems, and automated resource-plan hygiene.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <Badge variant="outline" className="text-xs sm:text-sm">About Me</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
              7 Years Building PMO Excellence
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Specializing in scalable governance models, global workflows, cross-region alignment, 
              and high-integrity data structures that reduce friction and increase predictability.
            </p>
          </div>

          {/* Core Profile */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg flex-wrap">
                <CheckCircle2 className="w-5 h-5 text-blue-700 dark:text-blue-400 flex-shrink-0" />
                <span>Core Expertise</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I design systems that reduce friction, increase predictability, and allow leaders to make 
                decisions on reliable foundations rather than firefighting signals. My approach focuses on 
                building structural mechanisms that prevent recurrence, not patches.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Lifecycle Integrity</Badge>
                <Badge variant="secondary" className="text-xs">Cross-Regional Alignment</Badge>
                <Badge variant="secondary" className="text-xs">Data Governance</Badge>
                <Badge variant="secondary" className="text-xs">Process Automation</Badge>
                <Badge variant="secondary" className="text-xs">Dashboard Engineering</Badge>
                <Badge variant="secondary" className="text-xs">Compliance Management</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Success Criteria Alignment */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 text-base sm:text-lg">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="min-w-0">{strength.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
