import { useState, useCallback } from 'react';
import type { DonationPayload } from '../../types';
import { getDonationErrors } from '../../lib/validation';
import { createDonation } from '../../api';
import styles from './DonationForm.module.css';

const CURRENCY = 'USD';

interface DonationFormProps {
  onSuccess: (amount: number, currency: string) => void;
  onError: (message: string) => void;
}

const initial: DonationPayload = {
  identification: '',
  email: '',
  fullName: '',
  amount: 0,
  currency: CURRENCY,
  message: '',
};

export function DonationForm({ onSuccess, onError }: DonationFormProps) {
  const [payload, setPayload] = useState<DonationPayload>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof DonationPayload, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = useCallback((field: keyof DonationPayload, value: string | number) => {
    setPayload((p) => ({ ...p, [field]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[field];
      return next;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = getDonationErrors(payload);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSubmitting(true);
    setErrors({});
    try {
      const response = await createDonation(payload);
      setPayload(initial);
      if (response.data?.paymentUrl) {
        window.location.href = response.data.paymentUrl;
        return;
      }
      onSuccess(payload.amount, payload.currency);
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Error al enviar la donación');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="donation-fullName" className={styles.label}>
          Nombre completo
        </label>
        <input
          id="donation-fullName"
          type="text"
          className={styles.input}
          value={payload.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          autoComplete="name"
        />
        {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="donation-email" className={styles.label}>
          Email
        </label>
        <input
          id="donation-email"
          type="email"
          className={styles.input}
          value={payload.email}
          onChange={(e) => update('email', e.target.value)}
          autoComplete="email"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="donation-identification" className={styles.label}>
          Identificación
        </label>
        <input
          id="donation-identification"
          type="text"
          className={styles.input}
          value={payload.identification}
          onChange={(e) => update('identification', e.target.value)}
          autoComplete="off"
        />
        {errors.identification && (
          <span className={styles.error}>{errors.identification}</span>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="donation-amount" className={styles.label}>
          Monto (USD)
        </label>
        <input
          id="donation-amount"
          type="number"
          min={1}
          step={1}
          className={styles.input}
          value={payload.amount || ''}
          onChange={(e) => update('amount', e.target.value ? Number(e.target.value) : 0)}
        />
        {errors.amount && <span className={styles.error}>{errors.amount}</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="donation-message" className={styles.label}>
          Mensaje
        </label>
        <textarea
          id="donation-message"
          className={styles.textarea}
          rows={3}
          value={payload.message}
          onChange={(e) => update('message', e.target.value)}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>
      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? 'Enviando…' : 'Donar'}
      </button>
    </form>
  );
}
