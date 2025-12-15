'use client';

import { useState } from 'react';
import { Maximize2, Minimize2, Loader2, ExternalLink, RotateCcw } from 'lucide-react';
import { cn, getEmbedUrl, getEmbedAllowedFeatures } from '@/lib/utils';
import { Tour } from '@/lib/db/schema';

interface TourEmbedProps {
  tour: Tour;
  className?: string;
  showControls?: boolean;
}

const platformNames: Record<string, string> = {
  matterport: 'Matterport',
  cloudpano: 'CloudPano',
  '3dvista': '3DVista',
  kuula: 'Kuula',
  panoee: 'Panoee',
  teliportme: 'TeliportMe',
  custom: 'Virtual Tour',
  iframe: 'Virtual Tour',
};

export default function TourEmbed({ tour, className, showControls = true }: TourEmbedProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const embedUrl = getEmbedUrl(tour.embedUrl, tour.embedType);
  const allowedFeatures = getEmbedAllowedFeatures(tour.embedType);
  const platformName = platformNames[tour.embedType] || 'Virtual Tour';

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
  };

  return (
    <>
      <div
        className={cn(
          'tour-embed-container relative group',
          isFullscreen && 'fullscreen',
          className
        )}
      >
        {/* Loading State */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 z-10">
            <Loader2 className="w-12 h-12 text-[#0066FF] animate-spin mb-4" />
            <p className="text-slate-600 font-medium">Loading {platformName} Tour...</p>
            <p className="text-slate-400 text-sm mt-1">This may take a few moments</p>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 z-10">
            <div className="text-center max-w-md px-4">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Unable to Load Tour
              </h3>
              <p className="text-slate-600 mb-4">
                The virtual tour could not be loaded. This might be due to network issues or the tour being unavailable.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleRetry}
                  className="btn btn-primary"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
                <a
                  href={tour.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Directly
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          key={hasError ? 'retry' : 'initial'}
          src={embedUrl}
          allow={allowedFeatures}
          allowFullScreen
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          title={`${tour.title} - ${platformName} Virtual Tour`}
          className="w-full h-full"
        />

        {/* Controls */}
        {showControls && !isLoading && !hasError && (
          <div
            className={cn(
              'absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity',
              isFullscreen && 'opacity-100'
            )}
          >
            <a
              href={tour.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={handleFullscreen}
              className="w-10 h-10 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-5 h-5" />
              ) : (
                <Maximize2 className="w-5 h-5" />
              )}
            </button>
          </div>
        )}

        {/* Platform Badge */}
        {!isLoading && !hasError && (
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
              Powered by {platformName}
            </span>
          </div>
        )}

        {/* Fullscreen Close Button */}
        {isFullscreen && (
          <button
            onClick={handleFullscreen}
            className="fixed top-4 right-4 z-[10000] w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <Minimize2 className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Fullscreen Backdrop */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/90 z-[9998]"
          onClick={handleFullscreen}
        />
      )}
    </>
  );
}
