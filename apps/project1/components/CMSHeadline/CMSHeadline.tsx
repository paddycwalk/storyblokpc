import { Headline } from '@repo/ui/headline';
import { storyblokEditable } from '@storyblok/react';
import React from 'react';

export const CMSHeadline = ({ blok }) => {
  console.log('blok:', blok);

  return <Headline label={blok.label} {...storyblokEditable(blok)}></Headline>;
};
