import styles from './List.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export interface ListProps {
  children?: React.ReactNode;
  item?: string;
  data: Options[];
  tag?: 'ul' | 'ol';
  className?: string;
}

interface Options {
  name?: string;
  url?: URL | string;
}

export const List = ({ data, tag: Tag = 'ul', className }: ListProps) => {
  const listItem = data.map((item: Options) => {
    return (
      <li key={item.name}>
        {item.url ? <Link href={item.url}>{item.name}</Link> : item.name}
      </li>
    );
  });

  return (
    <Tag
      className={clsx({
        [`${className}`]: className,
        [styles['List']]: true,
      })}
    >
      <>{listItem}</>
    </Tag>
  );
};
