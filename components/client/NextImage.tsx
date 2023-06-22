'use client';

import Image from 'next/image';
import React from 'react';
interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}
export const NextImage = ({ src, alt, width, height, blurDataURL }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-auto h-full max-w-full transition-opacity duration-1000 rounded opacity-0"
      onLoadingComplete={image => image.classList.remove('opacity-0')}
      blurDataURL={blurDataURL}
      style={{ width: 'auto', height: 'auto' }}
    />
  );
};
