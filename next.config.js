/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domain: [
      'https://tawzruaohepnjqzncjhp.supabase.co/storage/v1/object/sign/',
    ], //指定しなければエラーが発生する
  },
})
