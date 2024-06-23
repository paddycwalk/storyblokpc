import styles from './Intro.module.scss';

export interface IntroProps {
  children: React.ReactNode;
}

export const Intro = ({ children }: IntroProps) => {
  return <div className={styles.Intro}>{children}</div>;
};
