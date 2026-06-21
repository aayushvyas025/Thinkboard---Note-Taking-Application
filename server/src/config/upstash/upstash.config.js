import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import envVariables from "#constant/envs.constant";

const { upstashRedisRestToken, upstashRedisRestUrl } = envVariables;

function rateLimitingConfig() {
  const redisConfig = new Redis({
    url: upstashRedisRestUrl,
    token: upstashRedisRestToken,
  });

  const rateLimit = new Ratelimit({
    redis: redisConfig,
    limiter: Ratelimit.slidingWindow(10, "20"),
  });

  return rateLimit;
}

export default rateLimitingConfig;
