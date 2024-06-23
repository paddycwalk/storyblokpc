import styles from './Header.module.scss';
import { List } from '../../molecules';

export interface HeaderProps {
  //   children: React.ReactNode;
}

export const Header = async () => {
  const res = await fetch('http://slcana130-bottocs-prd-vm.nautilus:5000/bott-content-service/it/it/flyout.json');
  const data = await res.json();

  const ocsData = data[0].childs;

  return <List data={ocsData} className={styles.Header}></List>;
};
