//@ts-check
require("dotenv").config();

const { AUTH0_BASE_URL } = process.env;
/**
 * // @type {import('next/dist/next-server/server/config').NextConfig}
 */
const nextConfig = {
  publicRuntimeConfig: {
    BACKEND_URL: `${AUTH0_BASE_URL}/api/graphql`,
    CORS_URL: `${AUTH0_BASE_URL}/api/cors`,
  },
};

module.exports = nextConfig;
