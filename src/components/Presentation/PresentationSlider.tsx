import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Maximize, Minimize2, ChevronUp } from 'lucide-react';

interface Slide {
  id: string;
  title: string;
  component: React.ComponentType;
}

interface PresentationSliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const PresentationSlider = ({ 
  slides, 
  autoPlay = false, 
  autoPlayInterval = 30000 
}: PresentationSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const resetPresentation = () => {
    setCurrentSlide(0);
    setIsPlaying(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'Home':
          event.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          event.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
        case 'f':
        case 'F11':
          event.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, isFullscreen]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, autoPlayInterval]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide]?.component;

  return (
    <div className={`relative w-full h-screen bg-background overflow-hidden ${isFullscreen ? 'z-50' : ''}`}>
      {/* Slide Content */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto pb-40"
          >
            {CurrentSlideComponent && <CurrentSlideComponent />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Presentation Controls */}
      <motion.div 
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <AnimatePresence>
          {isMinimized ? (
            /* Minimized State */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-card/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-2xl border border-border/50 flex items-center gap-2"
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isPlaying ? 'bg-primary animate-pulse' : 'bg-muted-foreground/50'
                }`} />
                <span className="text-xs text-muted-foreground">{currentSlide + 1}/{slides.length}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(false)}
                className="rounded-full p-1 h-6 w-6"
              >
                <ChevronUp className="w-3 h-3" />
              </Button>
            </motion.div>
          ) : (
            /* Full Controls */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-card/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-2xl border border-border/50 flex items-center gap-4"
            >
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="rounded-full p-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : index < currentSlide
                      ? 'bg-primary/60'
                      : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="rounded-full p-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Divider */}
          <div className="w-px h-6 bg-border/50 mx-2" />

          {/* Play/Pause */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full p-2"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>

          {/* Reset */}
          <Button
            variant="ghost"
            size="sm"
            onClick={resetPresentation}
            className="rounded-full p-2"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>

          {/* Fullscreen */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleFullscreen}
            className="rounded-full p-2"
          >
            <Maximize className="w-4 h-4" />
          </Button>

          {/* Minimize */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(true)}
            className="rounded-full p-2"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Slide Counter */}
      <div className="fixed top-6 right-6 z-50">
        <Badge variant="outline" className="bg-card/90 backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
        </Badge>
      </div>

      {/* Current Slide Title */}
      <div className="fixed top-6 left-6 z-50">
        <Badge variant="outline" className="bg-card/90 backdrop-blur-sm">
          {slides[currentSlide]?.title}
        </Badge>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted/30 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Keyboard Shortcuts Help */}
      {!isFullscreen && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-border/50 text-xs space-y-1 max-w-48">
            <div className="font-semibold mb-2 text-primary">Keyboard Shortcuts:</div>
            <div className="flex justify-between">
              <span>→ / Space</span>
              <span>Next slide</span>
            </div>
            <div className="flex justify-between">
              <span>←</span>
              <span>Previous slide</span>
            </div>
            <div className="flex justify-between">
              <span>F / F11</span>
              <span>Fullscreen</span>
            </div>
            <div className="flex justify-between">
              <span>Home/End</span>
              <span>First/Last</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PresentationSlider;