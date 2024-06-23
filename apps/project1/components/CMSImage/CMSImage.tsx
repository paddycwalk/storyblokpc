import { storyblokEditable } from '@storyblok/react';
import { NextImage, ImageProps } from 'ui';

export const CMSImage = ({ blok }) => {
  let src = blok.src ?? '';

  if (src.startsWith('//')) {
    src = 'https:' + src;
  }

  console.log('blok:', blok);

  const imageProps: ImageProps = {
    src: src,
    alt: blok.alt ?? '',
    width: blok.width,
    height: blok.height,
    fill: blok.fill,
    quality: blok.quality,
    loading: blok.loading,
    priority: blok.priority,
    aspectRatio: blok.aspectRatio,
    objectFit: blok.objectFit,
    sizes: blok.sizes,
    fetchpriority: blok.fetchpriority,
  };

  return (
    <div {...storyblokEditable(blok)}>
      <NextImage {...imageProps} />
    </div>
  );
};
