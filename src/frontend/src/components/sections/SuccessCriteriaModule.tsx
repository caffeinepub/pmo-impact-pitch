import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { successCriteria } from '@/content/pitchContent';
import { ArrowRight, Target, TrendingUp, Calendar } from 'lucide-react';
import ImpactSection from './ImpactSection';
import Roadmap90DaySection from './Roadmap90DaySection';

export default function SuccessCriteriaModule() {
  const [activeTab, setActiveTab] = useState('data');

  const scrollToImpact = () => {
    const element = document.getElementById('impact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById('roadmap');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="success" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm">Success Criteria</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Proven Impact Across Four Pillars
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each success criterion demonstrates 3 high-impact initiatives delivered in STAR format, 
              plus comprehensive impact analysis and a strategic 90-day roadmap.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto gap-2 bg-transparent">
              {successCriteria.map((criterion) => (
                <TabsTrigger
                  key={criterion.id}
                  value={criterion.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white flex flex-col items-center gap-1 py-3 px-2 h-auto"
                >
                  <span className="text-2xl">{criterion.icon}</span>
                  <span className="text-xs text-center leading-tight">{criterion.title}</span>
                </TabsTrigger>
              ))}
              <TabsTrigger
                value="impact-tab"
                onClick={scrollToImpact}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white flex flex-col items-center gap-1 py-3 px-2 h-auto"
              >
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs text-center leading-tight">Impact</span>
              </TabsTrigger>
              <TabsTrigger
                value="roadmap-tab"
                onClick={scrollToRoadmap}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white flex flex-col items-center gap-1 py-3 px-2 h-auto"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-xs text-center leading-tight">90-Day Plan</span>
              </TabsTrigger>
            </TabsList>

            {/* Content for each success criterion */}
            {successCriteria.map((criterion) => (
              <TabsContent key={criterion.id} value={criterion.id} className="mt-8 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl">
                    {criterion.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{criterion.title}</h3>
                    <p className="text-sm text-muted-foreground">3 High-Impact Initiatives</p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {criterion.stories.map((story, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <Target className="w-5 h-5 text-amber-600" />
                          {story.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <Badge variant="outline" className="mb-2">Situation</Badge>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {story.situation}
                            </p>
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">Task</Badge>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {story.task}
                            </p>
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">Action</Badge>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {story.action}
                            </p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-gradient-to-r from-amber-500 to-orange-600">Result</Badge>
                            <p className="text-sm font-medium leading-relaxed">
                              {story.result}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}

            {/* Placeholder tabs that scroll to sections */}
            <TabsContent value="impact-tab" className="mt-8">
              <Card className="border-2 border-dashed">
                <CardContent className="py-12 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">
                    View the comprehensive before/after impact analysis below
                  </p>
                  <ArrowRight className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="roadmap-tab" className="mt-8">
              <Card className="border-2 border-dashed">
                <CardContent className="py-12 text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">
                    View the detailed 90-day roadmap plan below
                  </p>
                  <ArrowRight className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
