// @ts-check

const withNextIntl = require("next-intl/plugin")();
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
// @ts-ignore
const config = {
  // @ts-ignore
  ...withPWA(),
};

module.exports = withNextIntl(config);
