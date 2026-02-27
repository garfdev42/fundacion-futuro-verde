import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { path: '/', label: 'Principal' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/donaciones', label: 'Donaciones' },
  { path: '/contacto', label: 'Contacto' },
] as const;

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Fundación Futuro Verde
        </Link>
        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.navList}>
            {NAV_ITEMS.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={location.pathname === path ? styles.navLinkActive : styles.navLink}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={styles.menuIcon} />
        </button>
      </div>
      <div
        className={styles.mobileNav}
        aria-hidden={!mobileOpen}
        style={{ maxHeight: mobileOpen ? '320px' : 0 }}
      >
        <ul className={styles.mobileNavList}>
          {NAV_ITEMS.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className={styles.mobileNavLink}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
