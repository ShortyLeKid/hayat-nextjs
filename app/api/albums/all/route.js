import Albums from "@models/albums";
import { connectToDB } from "@utils/database";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import { NextResponse } from 'next/server'
import { redisConnect } from "@app/_lib/redis";

// const ratelimit = new Ratelimit({
//     redis: Redis.fromEnv(),
//     limiter: Ratelimit.slidingWindow(1, "10 s"),
// });

export const GET = async (request) => {

    try {
        await connectToDB()

        const cachedValue = await redisConnect.get('All Albums')

        if (cachedValue) {
            console.log('cached value got returned')
            return new Response(cachedValue)
        }

        // Rate limiting code
        // const ip = request.headers.get("x-forwarded-for") ?? "";
        // const { success, reset } = await ratelimit.limit(ip);

        // if (!success) {
        //     const now = Date.now();
        //     const retryAfter = Math.floor((reset - now) / 1000);
        //     return new NextResponse("Too Many Requests", {
        //         status: 429,
        //         headers: {
        //             ["retry-after"]: `${retryAfter}`,
        //         },
        //     });
        // }

        const albums = await Albums.find({})
        console.log('database was queried')

        if (!albums) return new Response('Error')

        await redisConnect.set('All Albums', JSON.stringify(albums))

        return NextResponse.json(
            albums,
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            "Failed to fetch all albums",
            { status: 500 }
        )
    }
}