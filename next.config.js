/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_MODE: true,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '6LdQJR8lAAAAAKwEKMo297y-0-ERWeEgZhtmG-cR',
    // API_BASE: DEV_MODE === true ? 'http://localhost:5000/api/v1' : 'http://167.172.148.107:5000/api/v1',
    // API_BASE: 'http://localhost:5000/api/v1',
    API_BASE: 'https://2650-135-181-13-63.eu.ngrok.io/api/v1',
    // IMAGE_BASE: DEV_MODE === true ? 'http://localhost:5000/images/' : 'http://167.172.148.107:5000/images/',
    // FILE_IMAGE_BASE: 'http://localhost:5000/images/',
    // FILE_VIDEO_BASE: 'http://localhost:5000/videos/',
    FILE_IMAGE_BASE: 'https://2650-135-181-13-63.eu.ngrok.io/images/',
    FILE_VIDEO_BASE: 'https://2650-135-181-13-63.eu.ngrok.io/videos/',
  }
}

module.exports = nextConfig