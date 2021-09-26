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
  env: {
    micro_cms_base_url: process.env.MICROCMS_BASE_URL,
    micro_cms_x_api_key: process.env.MICROCMS_API_KEY,
    next_public_google_analystics_id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  },
};
