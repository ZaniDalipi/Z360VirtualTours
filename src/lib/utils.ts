import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatPrice(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function getEmbedUrl(url: string, embedType: string): string {
  switch (embedType) {
    case 'matterport':
      // Ensure proper Matterport embed format
      if (url.includes('my.matterport.com/show')) {
        return url;
      }
      return url;
    case 'cloudpano':
      return url;
    case '3dvista':
      return url;
    case 'kuula':
      // Kuula embed format
      if (!url.includes('/share/')) {
        return url.replace('/post/', '/share/');
      }
      return url;
    case 'panoee':
      return url;
    case 'teliportme':
      return url;
    default:
      return url;
  }
}

export function getEmbedAllowedFeatures(embedType: string): string {
  const baseFeatures = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking';

  switch (embedType) {
    case 'matterport':
      return `${baseFeatures}; fullscreen; vr`;
    case 'kuula':
      return `${baseFeatures}; fullscreen; vr`;
    default:
      return `${baseFeatures}; fullscreen`;
  }
}

export function generateMetaDescription(tour: { title: string; shortDescription: string; location: { city: string; state: string } }): string {
  return `${tour.shortDescription} Located in ${tour.location.city}, ${tour.location.state}. Experience this immersive 360° virtual tour.`;
}
