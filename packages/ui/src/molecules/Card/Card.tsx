import { Headline, Button, NextImage } from '../../atoms';
// import  from 'next/image';
// import type { UrlObject } from 'url';

import styles from './Card.module.scss';
import Link from 'next/link';
// type Url = string | UrlObject;

export interface CardProps {
  headline?: string;
  description?: string;
  btnLabel?: string;
  btnHref: string;
  src: string;
  link?: boolean;
  // headlineComponent?: () => React.ReactNode;
}

export const Card = ({ headline, description, btnLabel, src, btnHref, link }: CardProps) => {
  return (
    <div className={styles.Card}>
      <NextImage src={`/images/${src}.webp`} fill={true} alt="Lorem" objectFit="cover" aspectRatio="16-9" />
      <div className={styles.Card_content}>
        {/* {headlineComponent ? headlineComponent() : <>{headline}</>} */}
        <Headline tag="h3">{headline}</Headline>
        <p>{description}</p>
        <Button label={btnLabel} color="primary" />
        {link ?? (
          <Link href={btnHref || ''} data-testid="DashboardLink">
            Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};
