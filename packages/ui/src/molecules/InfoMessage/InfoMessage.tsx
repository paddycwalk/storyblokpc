import styles from './InfoMessage.module.scss';
import clsx from 'clsx';

export interface InfoMessageProps {
  label?: string;
  state?: 'info' | 'warning' | 'success' | 'error';
  className?: string;
}

export const InfoMessage = ({ label, state, className }: InfoMessageProps) => {
  return (
    <div
      className={clsx({
        [`${className}`]: className,
        [styles['InfoMessage']]: true,
        [styles[`InfoMessage-${state}`]]: state,
      })}
    >
      {label}
    </div>
  );
};
