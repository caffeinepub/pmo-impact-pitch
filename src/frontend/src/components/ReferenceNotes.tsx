import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, FileText } from 'lucide-react';

export default function ReferenceNotes() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 sm:py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <Card>
              <CardHeader>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between p-0 h-auto hover:bg-transparent min-h-[44px]"
                  >
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                      Reference Notes
                    </CardTitle>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsibleContent>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Supporting reference materials for interview preparation and context.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg overflow-hidden">
                      <img 
                        src="/assets/reference/uploaded-reference-1.png" 
                        alt="Reference material 1"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <img 
                        src="/assets/reference/uploaded-reference-2.png" 
                        alt="Reference material 2"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
