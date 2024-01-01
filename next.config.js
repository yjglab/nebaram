// @ts-check

const withNextIntl = require("next-intl/plugin")();
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const config = {
  ...withPWA(),
};

module.exports = withNextIntl(config);
