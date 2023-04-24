/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_MODE: false,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '6LdQJR8lAAAAAKwEKMo297y-0-ERWeEgZhtmG-cR',
    API_BASE: process.env.DEV_MODE === true ?
      'http://localhost:5000/api/v1'
      :
      'https://45d0-135-181-13-63.ngrok-free.app/api/v1',
    FILE_IMAGE_BASE: process.env.DEV_MODE === true ?
      'http://localhost:5000/images/'
      :
      'https://45d0-135-181-13-63.ngrok-free.app/images/',
    FILE_VIDEO_BASE: process.env.DEV_MODE === true ?
      'http://localhost:5000/videos/'
      :
      'https://45d0-135-181-13-63.ngrok-free.app/videos/',
  }
}

module.exports = nextConfig