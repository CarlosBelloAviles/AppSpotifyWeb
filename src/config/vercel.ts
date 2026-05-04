// Detectar si estamos en Vercel o en desarrollo
export const getRedirectUri = (): string => {
  // En desarrollo
  if (process.env.NODE_ENV === 'development' || !window.location.hostname.includes('vercel')) {
    return `${window.location.origin}/`;
  }

  // En Vercel (producción)
  return `https://${window.location.hostname}/`;
};

// URL base de la API (si necesitas un backend proxy)
export const getApiBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001';
  }
  return `https://${window.location.hostname}`;
};
