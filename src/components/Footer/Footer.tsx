import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.grid}>
          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Ubicación</h3>
            <p className={styles.blockText}>
              Vía Pasto – Nariño
              <br />
              Pasto – Nariño
            </p>
          </section>
          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Legal</h3>
            <p className={styles.blockText}>
              NIT: 901.198.100-7
              <br />
              Cámara de Comercio
              <br />
              Pasto – Nariño
            </p>
          </section>
          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Donaciones</h3>
            <p className={styles.blockText}>
              Fundación Futuro Verde
              <br />
              Cuenta de Ahorros
              <br />
              Código Swift: COLOCOBM
            </p>
          </section>
          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Contacto</h3>
            <p className={styles.blockText}>
              <Link to="/contacto" className={styles.footerLink}>
                Enviar mensaje
              </Link>
              <br />
              Pasto – Nariño
            </p>
          </section>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Fundación Futuro Verde
        </p>
      </div>
    </footer>
  );
}
