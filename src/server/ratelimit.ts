import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const rateLimitRate = 5;
export const rateLimitTimeInMinutes = 5;

const redis = Redis.fromEnv();
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(
    rateLimitRate,
    `${rateLimitTimeInMinutes} m`
  ),

  // 5 requests from the same IP in 10 seconds
  // limiter: Ratelimit.slidingWindow(5, '10 s'),
});
