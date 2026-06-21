import "dotenv/config";

const envVariables = Object.freeze({
  backendPort: process.env.BACKEND_PORT || 3001,
  mongodbUri: process.env.MONGODB_URI,
  upstashRedisRestUrl: process.env.UPSTASH_REDIS_REST_URL,
  upstashRedisRestToken: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default envVariables;
