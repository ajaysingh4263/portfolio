import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreBuildErrors: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.devtool = 'hidden-source-map'; // or leave it undefined
    }
    return config;
  },
};

// Move the `sentry` property to `sentryBuildOptions`
export default withSentryConfig(nextConfig, {
  org: "advisome-infotech",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  sourcemaps: {
    deleteSourceMapsAfterUpload: true, // Delete source maps after upload
    disable: false, // Keep source maps enabled
  }, // Moved here
});
