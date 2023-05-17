/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  debug: true,
  env: {
    DEV_MODE: true,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '6LdQJR8lAAAAAKwEKMo297y-0-ERWeEgZhtmG-cR',
    REACT_APP_GOOGLE_MAPS_API_KEY: 'AIzaSyBjp4DGW9LacYAyDBac_3tnpRRMt5gYcRQ',
    // API_BASE: process.env.DEV_MODE === 'true' ? 'http://localhost:5000/api/v1' : 'https://aae1-135-181-13-63.ngrok-free.app/api/v1',
    // FILE_IMAGE_BASE: process.env.DEV_MODE === 'true' ? 'http://localhost:5000/images/' : 'https://aae1-135-181-13-63.ngrok-free.app/images/',
    // FILE_VIDEO_BASE: process.env.DEV_MODE === 'true' ? 'http://localhost:5000/videos/' : 'https://aae1-135-181-13-63.ngrok-free.app/videos/',
    API_BASE: 'http://localhost:5000/api/v1',
    FILE_IMAGE_BASE: 'http://localhost:5000/images/',
    FILE_VIDEO_BASE: 'http://localhost:5000/videos/',
  }
}

module.exports = nextConfig