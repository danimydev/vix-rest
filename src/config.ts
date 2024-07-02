import "dotenv/config";

const config = {
  port: String(process.env.PORT || 3000),
}

export default config;
