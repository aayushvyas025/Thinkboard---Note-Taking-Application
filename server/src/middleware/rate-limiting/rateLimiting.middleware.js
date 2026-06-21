import rateLimitingConfig from "#config/upstash/upstash.config";
import serverResponses from "#constant/responses.constant";

const { manyRequest } = serverResponses.statusCodes;
const { rateLimitingError } = serverResponses.errorResponses;
const { failure } = serverResponses.apiStateFlags;

const rateLimiter = async (request, response, next) => {
  try {
    const upstashRateLimiter = rateLimitingConfig();
    const { success } = await upstashRateLimiter.limit("my-limit-key");

    if (!success) {
      return response
        .status(manyRequest)
        .json({ success: failure, message: rateLimitingError });
    }

    next();
  } catch (error) {
    console.error(`Error, while rate limiting: ${error.message}`);
    next(error);
  }
};

export default rateLimiter;
