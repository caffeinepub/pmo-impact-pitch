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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm">About Me</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              7 Years Building PMO Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializing in scalable governance models, global workflows, cross-region alignment, 
              and high-integrity data structures that reduce friction and increase predictability.
            </p>
          </div>

          {/* Core Profile */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                Core Expertise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I design systems that reduce friction, increase predictability, and allow leaders to make 
                decisions on reliable foundations rather than firefighting signals. My approach focuses on 
                building structural mechanisms that prevent recurrence, not patches.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Lifecycle Integrity</Badge>
                <Badge variant="secondary">Cross-Regional Alignment</Badge>
                <Badge variant="secondary">Data Governance</Badge>
                <Badge variant="secondary">Process Automation</Badge>
                <Badge variant="secondary">Dashboard Engineering</Badge>
                <Badge variant="secondary">Compliance Management</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Success Criteria Alignment */}
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {strength.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
