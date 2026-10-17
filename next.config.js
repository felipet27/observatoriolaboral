/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Sirve las imágenes en los formatos más livianos que soporte el navegador
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
