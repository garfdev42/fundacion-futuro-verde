import { useState } from 'react';
import { ContactForm } from '../../components/ContactForm';
import styles from './Contacto.module.css';

export function Contacto() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = () => {
    setSent(true);
    setError(null);
  };

  const handleError = (message: string) => {
    setError(message);
  };

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Contacto</h1>
          <p className={styles.subtitle}>
            Escríbenos si quieres más información o colaborar con la fundación.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          {sent ? (
            <div className={styles.success}>
              <p>Tu mensaje ha sido enviado. Te contactaremos pronto.</p>
            </div>
          ) : (
            <>
              {error && (
                <div className={styles.errorBox} role="alert">
                  {error}
                </div>
              )}
              <ContactForm onSuccess={handleSuccess} onError={handleError} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
