import {Ratelimit} from '@upstash/ratelimit';
import { Redis } from "@upstash/redis";

import donenv from "dotenv";

donenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s"),
})

export default ratelimit;