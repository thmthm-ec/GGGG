"use client";

import { CloudinaryImage } from './cloudinary-image';
import { cn } from '@/lib/utils';

interface CloudinaryGalleryProps {
  images: Array<{
    id: string;
    url: string;
    width: number;
    height: number;
  }>;
  className?: string;
}

export function CloudinaryGallery({ images, className }: CloudinaryGalleryProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {images.map((image, index) => (
        <CloudinaryImage
          key={image.id}
          src={image.id}
          alt={`Gallery image ${index + 1}`}
          width={image.width}
          height={image.height}
          priority={index < 4}
          className="aspect-square rounded-lg"
        />
      ))}
    </div>
  );
}