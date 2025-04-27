import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeIcon from './HomeIcon';
import styles from './Breadcrumbs.module.css';

// Pagina namen voor de breadcrumbs
const pageNames = {
  '': 'Home',
  'blog': 'Blog',
  'contact': 'Contact',
  'portfolio': 'Portfolio',
  'over-mij': 'Over mij',
  'prijzen': 'Prijzen',
  'fotostudio': 'Fotostudio',
  'fashion-fotograaf': 'Fashion Fotograaf',
  'boek-een-fotoshoot': 'Boek een fotoshoot',
  'fotoshoot': 'Fotoshoot',
  'workshop': 'Workshop',
  // Voeg hier meer toe indien gewenst
};

export default function Breadcrumbs({ customCurrent }) {
  const router = useRouter();
  const pathParts = router.asPath.split('?')[0].split('/').filter(Boolean);

  const crumbs = pathParts.map((part, idx) => {
    const href = '/' + pathParts.slice(0, idx + 1).join('/');
    const label = pageNames[part] || decodeURIComponent(part.replace(/-/g, ' '));
    return { href, label };
  });

  return (
    <nav className={styles['breadcrumb-wrapper']} aria-label="Breadcrumbs">
      <Link href="/" legacyBehavior>
        <a title="Home" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <HomeIcon size={17} color="#263159" style={{ marginRight: 2, marginBottom: -2 }} />
        </a>
      </Link>
      {crumbs.map((crumb, idx) => (
        <span key={crumb.href}>
          <span className={styles.separator}>/</span>
          {idx === crumbs.length - 1 ? (
            <span className={styles.current}>{customCurrent || crumb.label}</span>
          ) : (
            <Link href={crumb.href} legacyBehavior><a>{crumb.label}</a></Link>
          )}
        </span>
      ))}
    </nav>
  );
}
