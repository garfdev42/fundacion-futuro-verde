import { DonateButton } from '../../components/DonateButton';
import styles from './Donaciones.module.css';

export function Donaciones() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Donaciones</h1>
          <p className={styles.subtitle}>
            Pagos seguros. Certificado de adopción. Donaciones deducibles. Apoyas la
            conservación y a las comunidades.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Donar ahora</h2>
            <p className={styles.cardText}>
              Puedes donar y contribuir de manera real a la conservación y la recuperación
              del territorio. Tu aporte apoya la biodiversidad, las comunidades y los
              guardabosques de nuestras reservas. Completa el formulario con tu monto,
              datos y mensaje. Recibirás confirmación al registrar la donación.
            </p>
            <DonateButton variant="primary" className={styles.button}>
              Abrir formulario de donación
            </DonateButton>
          </div>
          <div className={styles.info}>
            <p className={styles.infoText}>
              También puedes realizar transferencias a la cuenta de la fundación. Para más
              datos bancarios y opciones, contáctanos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
