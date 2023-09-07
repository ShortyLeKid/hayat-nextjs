import { redis } from "@app/lib/redis";
import Albums from "@models/albums";
import { connectToDB } from "@utils/database";

import { NextResponse } from 'next/server'

export const GET = async () => {
    try {
        await connectToDB()

        const albums = await Albums.find({})

        await redis.set('hello', 'world')

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