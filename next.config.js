/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGO_DB_URL:
      "mongodb+srv://kuchuoi:2261988@cluster0.lqap3.mongodb.net/?retryWrites=true&w=majority",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
