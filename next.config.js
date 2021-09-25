module.exports = {
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ['images.microcms-assets.io'],
    loader: "imgix",
    path: "",
  },
};
