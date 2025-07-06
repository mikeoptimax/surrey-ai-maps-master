/**
 * Common type definitions for the application
 */

// Form event types
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

// Form data types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface AuditFormData extends ContactFormData {
  business: string;
  serviceType?: string;
  postcode?: string;
}

export interface IndustryFormData extends ContactFormData {
  company: string;
  industry: string;
}

export interface AreaFormData extends ContactFormData {
  business: string;
  service: string;
  area: string;
}