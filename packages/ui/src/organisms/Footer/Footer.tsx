import { Link } from '../../atoms';
import { List } from '../../molecules';
import styles from './Footer.module.scss';

export interface FooterProps {
  // children: React.ReactNode;
}

export const Footer = ({}: FooterProps) => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer_container}>
        <Link href="#" className={styles.Footer_print} label=" Diese Seite drucken"></Link>
        <div className={styles.Footer_listContainer}>
          <List
            className={styles.Footer_list}
            tag="ul"
            data={[
              { url: 'dashboard', name: 'Kostenlose Beratung - Heizung' },
              { url: 'dashboard', name: 'Wartungsverträge - Heizung' },
              { url: 'dashboard', name: 'Service Kontakt' },
              { url: 'dashboard', name: 'Brenneraustausch' },
              { url: 'dashboard', name: 'Schlüsselbox' },
              { url: 'dashboard', name: 'Gewährleistung' },
              { url: 'dashboard', name: 'Korrespondenzadresse ändern' },
              { url: 'dashboard', name: 'Bosch HomeCom' },
            ]}
          ></List>
          <List
            className={styles.Footer_list}
            tag="ul"
            data={[
              { url: 'dashboard', name: 'Fachhändlersuche' },
              { url: 'dashboard', name: 'Unterlagen & Medien' },
              { url: 'dashboard', name: 'Häufig gestellte Fragen' },
              { url: 'dashboard', name: 'Aktuelles' },
              { url: 'dashboard', name: 'Messen' },
              { url: 'dashboard', name: 'Energieverordnung' },
              { url: 'dashboard', name: 'Muken' },
            ]}
          ></List>
          <List
            className={styles.Footer_list}
            tag="ul"
            data={[
              { url: 'dashboard', name: 'Geschichte' },
              { url: 'dashboard', name: 'Standorte in der Schweiz' },
              { url: 'dashboard', name: 'Ansprechpartner' },
              { url: 'dashboard', name: 'Jobs & Karriere' },
              { url: 'dashboard', name: 'Kontaktformular' },
            ]}
          ></List>
        </div>

        <p>© Bosch Thermotechnik GmbH 2023, alle Rechte vorbehalten</p>
      </div>
    </div>
  );
};
