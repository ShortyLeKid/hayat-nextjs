import Albums from "@models/albums";
import { connectToDB } from "@utils/database";

import { redisConnect } from "@lib/redis";

import { NextResponse } from 'next/server'

export const GET = async () => {
    
    try {
    
        await connectToDB()
        
        const cachedValue = await redisConnect.get('All Albums')

        if (cachedValue) {
            console.log('cached value got returned')
            return new Response(cachedValue)
        }

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
            "Failed to fetch all ablums",
            { status: 500 }
        )
    }
} 