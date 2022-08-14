export const BACKEND_URI = process.env.NODE_ENV === 'production' 
  ? 'http://localhost' 
  : 'http://localhost:3001';