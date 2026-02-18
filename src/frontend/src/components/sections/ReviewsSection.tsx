import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const LINKEDIN_URL = 'https://www.linkedin.com/in/bhikajisawant/details/recommendations/?detailScreenTabIndex=0';

export default function ReviewsSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(LINKEDIN_URL);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Stakeholder{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Reviews
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              See what colleagues, managers, and stakeholders have to say about working with me
            </p>
          </div>

          {/* Main Card */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">LinkedIn Recommendations</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Read detailed recommendations from professionals I've worked with throughout my career
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="w-full sm:flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-md hover:shadow-lg transition-all min-h-[44px]"
                  asChild
                >
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View LinkedIn Recommendations
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Link Display & Copy */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                      Direct link:
                    </p>
                    <div className="p-3 bg-muted rounded-md border border-border">
                      <p className="text-xs sm:text-sm text-foreground break-all font-mono">
                        {LINKEDIN_URL}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto min-h-[44px]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
