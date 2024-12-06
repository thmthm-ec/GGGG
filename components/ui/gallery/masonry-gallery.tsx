"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import { MasonryGalleryProps } from "./types";
import { CloudinaryImage as CloudinaryImageType } from "@/lib/types/cloudinary";
import { GalleryImage } from "./gallery-image";
import { GalleryModal } from "./gallery-modal";

const breakpointColumns = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

export function MasonryGallery({ images }: MasonryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<CloudinaryImageType | null>(null);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((image) => (
          <GalleryImage
            key={image.id}
            image={image}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </Masonry>

      <GalleryModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}