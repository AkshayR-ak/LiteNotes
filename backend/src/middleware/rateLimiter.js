import ratelimit from "../utils/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("ratelimit-like-id");

        if(!success) {
            return res.status(429).json({message:"Too many request, please try again later"});
        }
        next();
    } catch (error) {
        console.log(`Error in rateLimiter: ${error}`);
        next(error);
    }
}

export default rateLimiter;