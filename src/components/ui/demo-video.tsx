import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface DemoVideoProps {
  title: string;
  description: string;
  metrics?: string[];
  videoUrl?: string;
  thumbnailUrl?: string;
  className?: string;
}

export const DemoVideo = ({ 
  title, 
  description, 
  metrics = [],
  videoUrl,
  thumbnailUrl,
  className = ""
}: DemoVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Video URLs for event-based vision demos - Updated with working videos
  const demoVideos = {
    "sony-event-sensor": "https://www.youtube.com/embed/6xOmo7Ikwzk",
    "prophesee-metavision": "https://www.youtube.com/embed/MjX3z-6n3iA", 
    "active-marker-tracking": "https://www.youtube.com/embed/j-LpkDpCxUU",
    "machine-learning-events": "https://www.youtube.com/embed/UAiGM69aE3c"
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={`group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}>
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/10">
            {thumbnailUrl ? (
              <img 
                src={thumbnailUrl} 
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                  <Play className="w-16 h-16 text-primary relative z-10" />
                </div>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <Badge variant="secondary" className="mb-2">
                  <Play className="w-3 h-3 mr-1" />
                  Watch Demo
                </Badge>
              </div>
            </div>

            {/* Metrics badges */}
            {metrics.length > 0 && (
              <div className="absolute top-2 left-2 right-2 flex flex-wrap gap-2">
                {metrics.map((metric, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-background/90 backdrop-blur-sm text-xs"
                  >
                    {metric}
                  </Badge>
                ))}
              </div>
            )}

            {/* Expand icon */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                <Maximize2 className="w-3 h-3" />
              </Badge>
            </div>
          </div>

          <div className="p-4">
            <h4 className="font-semibold text-foreground mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <div className="relative">
          <div className="aspect-video bg-background">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <Play className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {metrics.map((metric, index) => (
                    <Badge key={index} variant="secondary">
                      {metric}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Demo video coming soon. Contact us for a live demonstration.
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Demo Gallery Component
export const DemoGallery = () => {
  const demos = [
    {
      title: "Sony Event-based Vision Sensor",
      description: "Official Sony demonstration of neuromorphic vision technology and applications",
      metrics: ["<150μs latency", "120dB dynamic range", "Low power"],
      videoUrl: "https://www.youtube.com/embed/6xOmo7Ikwzk"
    },
    {
      title: "Prophesee Metavision Technology",
      description: "Introduction to event-based vision technology inspired by human vision",
      metrics: ["Sparse data", "Motion detection", "Real-time"],
      videoUrl: "https://www.youtube.com/embed/MjX3z-6n3iA"
    },
    {
      title: "Ultra-Fast Marker Tracking",
      description: "Active marker tracking at over 1000 Hz with event-based sensors",
      metrics: [">1000 Hz", "~30mW power", "Ultra-precise"],
      videoUrl: "https://www.youtube.com/embed/j-LpkDpCxUU"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {demos.map((demo, index) => (
        <DemoVideo key={index} {...demo} />
      ))}
    </div>
  );
};
