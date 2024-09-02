// pages/api/auth/user.js

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const clientPromise = MongoClient.connect(process.env.MONGO_URI);

export async function GET(request) {
    try {
        // Simulate getting session ID from request cookies
        const cookies = request.headers.get('cookie') || '';
        const sessionIdMatch = cookies.match(/sessionId=([^;]+)/);
        const sessionId = sessionIdMatch ? sessionIdMatch[1] : null;

        if (!sessionId) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        const client = await clientPromise;
        const db = client.db('web');
        const session = await db.collection('sessions').findOne({ sessionId });

        if (session) {
            return NextResponse.json({ user: session.sessionData.user });
        } else {
            return NextResponse.json({ user: null }, { status: 404 });
        }
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
    }
}
