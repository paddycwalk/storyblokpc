import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature/Feature';
import Grid from '../components/Grid/Grid';
import Teaser from '../components/Teaser/Teaser';
import Page from '../components/Page/Page';
import { CMSHeadline } from '../components/CMSHeadline/CMSHeadline';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  headline: CMSHeadline,
};

storyblokInit({
  accessToken: 'R5gC3H07sML4yvIKz256Ggtt',
  use: [apiPlugin],
  components,
  apiOptions: {
    region: 'eu',
  },
});

function MyApp({ Component, pageProps }) {
  const { key, ...restProps } = pageProps;
  return <Component key={key} {...restProps} />;
}

export default MyApp;
