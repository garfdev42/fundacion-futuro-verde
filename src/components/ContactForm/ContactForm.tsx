import { useState, useCallback } from 'react';
import type { ContactPayload } from '../../types';
import { getContactErrors } from '../../lib/validation';
import { createContact } from '../../api';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  onSuccess: () => void;
  onError: (message: string) => void;
}

const initial: ContactPayload = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [payload, setPayload] = useState<ContactPayload>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = useCallback((field: keyof ContactPayload, value: string) => {
    setPayload((p) => ({ ...p, [field]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[field];
      return next;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = getContactErrors({
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSubmitting(true);
    setErrors({});
    try {
      await createContact({
        name: payload.name,
        email: payload.email,
        phone: payload.phone || undefined,
        message: payload.message,
      });
      onSuccess();
      setPayload(initial);
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Error al enviar el mensaje');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Nombre
        </label>
        <input
          id="contact-name"
          type="text"
          className={styles.input}
          value={payload.name}
          onChange={(e) => update('name', e.target.value)}
          autoComplete="name"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          className={styles.input}
          value={payload.email}
          onChange={(e) => update('email', e.target.value)}
          autoComplete="email"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-phone" className={styles.label}>
          Teléfono <span className={styles.optional}>(opcional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          className={styles.input}
          value={payload.phone ?? ''}
          onChange={(e) => update('phone', e.target.value)}
          autoComplete="tel"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Mensaje
        </label>
        <textarea
          id="contact-message"
          className={styles.textarea}
          rows={4}
          value={payload.message}
          onChange={(e) => update('message', e.target.value)}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>
      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  );
}
