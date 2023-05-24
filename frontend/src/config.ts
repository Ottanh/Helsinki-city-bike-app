export const BACKEND_URI = process.env.NODE_ENV === 'production' 
  ? 'http://ec2-16-16-213-173.eu-north-1.compute.amazonaws.com' 
  : 'http://localhost:3001';
