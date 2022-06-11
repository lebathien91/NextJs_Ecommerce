/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGO_DB_URL:
      "mongodb+srv://kuchuoi:2261988@cluster0.lqap3.mongodb.net/ecommer?retryWrites=true&w=majority",
    ACCESS_TOKEN_SECRET: "KFKAJFKAJF",
    REFRESH_TOKEN_SECRET: "KDJFKAJFKJKJFKAJFKJD",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
