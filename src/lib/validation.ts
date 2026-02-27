export function validateEmail(value: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value.trim());
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function validateAmount(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

export function getDonationErrors(payload: {
  identification: string;
  email: string;
  fullName: string;
  amount: number;
  currency: string;
  message: string;
}): Partial<Record<keyof typeof payload, string>> {
  const errors: Partial<Record<keyof typeof payload, string>> = {};
  if (!validateRequired(payload.identification)) errors.identification = 'Requerido';
  if (!validateRequired(payload.email)) errors.email = 'Requerido';
  else if (!validateEmail(payload.email)) errors.email = 'Email no válido';
  if (!validateRequired(payload.fullName)) errors.fullName = 'Requerido';
  if (!validateAmount(payload.amount)) errors.amount = 'Monto debe ser mayor a 0';
  if (!validateRequired(payload.message)) errors.message = 'Requerido';
  return errors;
}

export function getContactErrors(payload: {
  name: string;
  email: string;
  message: string;
}): Partial<Record<keyof typeof payload, string>> {
  const errors: Partial<Record<keyof typeof payload, string>> = {};
  if (!validateRequired(payload.name)) errors.name = 'Requerido';
  if (!validateRequired(payload.email)) errors.email = 'Requerido';
  else if (!validateEmail(payload.email)) errors.email = 'Email no válido';
  if (!validateRequired(payload.message)) errors.message = 'Requerido';
  return errors;
}
