import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { successCriteria } from '@/content/pitchContent';
import { ArrowRight, Target, TrendingUp, Calendar } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

export default function SuccessCriteriaModule() {
  const [activeTab, setActiveTab] = useState('data');

  const handleImpactClick = () => {
    scrollToSection('impact');
  };

  const handleRoadmapClick = () => {
    scrollToSection('roadmap');
  };

  return (
    <section id="success" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <Badge variant="outline" className="text-xs sm:text-sm">Success Criteria</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
              Proven Impact Across Four Pillars
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Each success criterion demonstrates 3 high-impact initiatives delivered in STAR format, 
              plus comprehensive impact analysis and a strategic 90-day roadmap.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 h-auto gap-2 bg-transparent p-0">
              {successCriteria.map((criterion) => (
                <TabsTrigger
                  key={criterion.id}
                  value={criterion.id}
                  className="success-tab-trigger flex flex-col items-center gap-1 py-3 px-2 h-auto min-h-[80px] sm:min-h-[70px] w-full min-w-0"
                >
                  <span className="text-xl sm:text-2xl flex-shrink-0">{criterion.icon}</span>
                  <span className="text-[10px] sm:text-xs text-center whitespace-normal break-words leading-tight w-full">
                    {criterion.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Separate navigation buttons for Impact and 90-Day Plan */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Button
                variant="outline"
                onClick={handleImpactClick}
                className="success-nav-button flex flex-col items-center gap-1 py-3 px-2 h-auto min-h-[80px] sm:min-h-[70px] w-full"
              >
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs text-center whitespace-normal break-words leading-tight w-full">
                  Impact
                </span>
              </Button>
              <Button
                variant="outline"
                onClick={handleRoadmapClick}
                className="success-nav-button flex flex-col items-center gap-1 py-3 px-2 h-auto min-h-[80px] sm:min-h-[70px] w-full"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs text-center whitespace-normal break-words leading-tight w-full">
                  90-Day Plan
                </span>
              </Button>
            </div>

            {/* Content for each success criterion */}
            {successCriteria.map((criterion) => (
              <TabsContent key={criterion.id} value={criterion.id} className="mt-6 sm:mt-8 space-y-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    {criterion.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold">{criterion.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">3 High-Impact Initiatives</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-6">
                  {criterion.stories.map((story, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-2">
                      <CardHeader>
                        <CardTitle className="flex items-start gap-2 text-base sm:text-lg md:text-xl">
                          <Target className="w-5 h-5 text-blue-700 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="min-w-0">{story.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">Situation</Badge>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {story.situation}
                            </p>
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">Task</Badge>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {story.task}
                            </p>
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">Action</Badge>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {story.action}
                            </p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-gradient-to-r from-blue-600 to-blue-800 text-xs">Result</Badge>
                            <p className="text-xs sm:text-sm font-medium leading-relaxed">
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
          </Tabs>
        </div>
      </div>
    </section>
  );
}
