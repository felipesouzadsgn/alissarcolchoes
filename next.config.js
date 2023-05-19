/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ecoflex.ind.br',
        port: '',
        pathname: '/img/products/original/**',
      },
      {
        protocol: 'https',
        hostname: 'www.martinsestofados.com.br',
        port: '',
        pathname: '/assets/img/produtos/**',
      },
    ],
  },
}

module.exports = nextConfig
