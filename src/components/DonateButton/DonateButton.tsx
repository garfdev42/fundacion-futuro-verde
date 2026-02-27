import { useState } from 'react';
import { Modal } from '../Modal';
import { DonationForm } from '../DonationForm';
import styles from './DonateButton.module.css';

interface DonateButtonProps {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  className?: string;
}

export function DonateButton({
  variant = 'primary',
  children = 'Donar',
  className = '',
}: DonateButtonProps) {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState<{ amount: number; currency: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = (amount: number, currency: string) => {
    setConfirm({ amount, currency });
    setError(null);
  };

  const handleError = (message: string) => {
    setError(message);
  };

  const handleClose = () => {
    setOpen(false);
    setConfirm(null);
    setError(null);
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${styles[variant]} ${className}`.trim()}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      <Modal open={open} onClose={handleClose} title="Donar">
        {confirm ? (
          <div className={styles.confirm}>
            <p className={styles.confirmText}>
              Gracias. Tu donación de {confirm.amount} {confirm.currency} ha sido registrada.
            </p>
            <button type="button" className={styles.confirmClose} onClick={handleClose}>
              Cerrar
            </button>
          </div>
        ) : (
          <>
            {error && <p className={styles.formError}>{error}</p>}
            <DonationForm onSuccess={handleSuccess} onError={handleError} />
          </>
        )}
      </Modal>
    </>
  );
}
