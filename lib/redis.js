import { Redis as RedisConnection } from "ioredis";

const getRedisUrl = () => {
    if (process.env.REDIS_URL) {
        return process.env.REDIS_URL
    }

    throw new Error('REDIS_URL is not defined')
}

export const redisConnect = new RedisConnection(getRedisUrl())