"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

export function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
}: CloudinaryImageProps) {
  const baseUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dgwesgtcp"}/image/upload`;
  const imageUrl = `${baseUrl}/q_auto,f_auto/${publicId}`;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={fill ? undefined : (width || 800)}
      height={fill ? undefined : (height || 600)}
      fill={fill}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}