import { storyblokEditable } from '@storyblok/react';
import { Headline } from 'ui';

export const CMSHeadline = ({ blok }) => {
  // console.log('blok', blok);
  return (
    <Headline
      tag={blok.tag}
      size={blok.size}
      id={blok.id}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </Headline>
  );
};
